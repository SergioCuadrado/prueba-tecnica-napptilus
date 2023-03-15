import { Products } from '@/components/Products'
import { render, screen } from '@testing-library/react'

describe('Pruebas en el componente <Products />', () => {
  test('Si tengo productos tengo que mostrar una lista', () => {
    const products = [
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
    render(<Products products={products} />)
    expect(screen.getAllByRole('img').length).toBe(products.length)
  })

  test('Si no tengo productos tengo que mostrar un mensaje', () => {
    const products = []
    render(<Products products={products} />)
    expect(screen.getByText('No hay resultados...')).toBeInTheDocument()
  })
})
