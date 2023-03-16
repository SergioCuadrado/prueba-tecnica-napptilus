import { Products } from '@/components/Products'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en el componente <Products />', () => {
  const hasProducts = [
    {
      id: 'YXchmkgzbCvPPUFnViAbT',
      brand: 'Acer',
      model: 'Liquid mini E310',
      price: '120',
      image: 'https://itx-frontend-test.onrender.com/images/YXchmkgzbCvPPUFnViAbT.jpg'
    },
    {
      id: 'Tpt8s3EHzIPa_XxEvQJvt',
      brand: 'Acer',
      model: 'beTouch E210',
      price: '150',
      image: 'https://itx-frontend-test.onrender.com/images/Tpt8s3EHzIPa_XxEvQJvt.jpg'
    }
  ]
  test('Si tengo productos tengo que mostrar una lista', () => {
    render(
      <MemoryRouter>
        <Products products={hasProducts} />
      </MemoryRouter>
    )
    expect(screen.getAllByRole('img').length).toBe(hasProducts.length)
  })

  test('Si no tengo productos tengo que mostrar un mensaje', () => {
    const products = []
    render(<Products products={products} />)
    expect(screen.getByText('No hay resultados...')).toBeInTheDocument()
  })

  test('Si click en un producto tengo que ir a la pagina del producto', () => {
    render(
      <MemoryRouter>
        <Products products={hasProducts} />
      </MemoryRouter>
    )
    const firstProduct = screen.getAllByRole('link')[0]
    expect(firstProduct).toHaveAttribute('href', '/products/YXchmkgzbCvPPUFnViAbT')
  })
})
