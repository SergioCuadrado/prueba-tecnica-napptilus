import { render, screen, fireEvent } from '@testing-library/react'
import { DetailProduct } from '@/components/DetailProduct'
import { ProductsOnCartContext } from '@/contexts/productsOnCart'

describe('Pruebas en el componente <DetailProduct />', () => {
  const product = {
    description: {
      battery: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
      brand: 'Acer',
      cpu: 'Quad-core 1.3 GHz Cortex-A53',
      dimensions: '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
      id: 'ZmGrkLRPXOTpxsU4jjAcv',
      image: 'https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
      model: 'Iconia Talk S',
      os: 'Android 6.0 (Marshmallow)',
      price: '170',
      primaryCamera: ['13 MP', 'autofocus'],
      ram: '2 GB RAM',
      screenResolution: '7.0 inches (~69.8% screen-to-body ratio)',
      secondaryCamera: ['2 MP', '720p'],
      weight: '260'
    },
    options: {
      colors: [
        {
          code: 1,
          name: 'Black'
        },
        {
          code: 2,
          name: 'White'
        }
      ],
      storages: [
        {
          code: 1,
          name: '26 GB'
        },
        {
          code: 2,
          name: '32 GB'
        }
      ]
    }
  }

  const descriptionProducts = [
    { name: 'Battery', value: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)' },
    { name: 'Modelo', value: 'Iconia Talk S' },
    { name: 'Precio', value: '170' },
    { name: 'CPU', value: 'Quad-core 1.3 GHz Cortex-A53' },
    { name: 'RAM', value: '2 GB RAM' },
    { name: 'Sistema Operativo', value: 'Android 6.0 (Marshmallow)' },
    { name: 'Resolución de pantalla', value: '7.0 inches (~69.8% screen' },
    { name: 'Batería', value: 'Non-removable Li-Ion 3400' },
    { name: 'Cámara principal', value: ['13 MP', 'autofocus'] },
    { name: 'Cámara secundaria', value: ['2 MP', '720p'] },
    { name: 'Dimensiones', value: '191.7 x 101' },
    { name: 'Peso', value: '260' }
  ]

  const optionsProduct = {
    colors: [
      {
        code: 1,
        name: 'Black'
      },
      {
        code: 2,
        name: 'White'
      }
    ],
    storages: [
      {
        code: 1,
        name: '16 GB'
      },
      {
        code: 2,
        name: '32 GB'
      }
    ]
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Debe de mostrar el componente correctamente', () => {
    const productsOnCart = 0
    const setProductsOnCartMock = jest.fn()

    const { container } = render(
        <ProductsOnCartContext.Provider value={{ productsOnCart, setProductsOnCart: setProductsOnCartMock }} >
            <DetailProduct product={product} descriptionProducts={descriptionProducts} optionsProduct={optionsProduct} />
        </ProductsOnCartContext.Provider>)
    expect(container).toMatchSnapshot()
  })

  test('Si algun campo del formulario no esta seleccionado que el boton este desactivado', () => {
    const productsOnCart = 0
    const setProductsOnCartMock = jest.fn()

    render(
        <ProductsOnCartContext.Provider value={{ productsOnCart, setProductsOnCart: setProductsOnCartMock }} >
            <DetailProduct product={product} descriptionProducts={descriptionProducts} optionsProduct={optionsProduct} />
        </ProductsOnCartContext.Provider>
    )

    const button = screen.getByRole('button', { name: /añadir a la cesta/i })
    expect(button).toBeDisabled()
  })

  test('Que funcione correctamente el formulario', async () => {
    const productsOnCart = 0
    const setProductsOnCartMock = jest.fn()

    const optionsProduct = {
      colors: [
        {
          code: 1,
          name: 'Black'
        },
        {
          code: 2,
          name: 'White'
        }
      ],
      storages: [
        {
          code: 1,
          name: '16 GB'
        }
      ]
    }

    render(
        <ProductsOnCartContext.Provider value={{ productsOnCart, setProductsOnCart: setProductsOnCartMock }} >
            <DetailProduct product={product} descriptionProducts={descriptionProducts} optionsProduct={optionsProduct} />
        </ProductsOnCartContext.Provider>
    )
    // comprobar que el boton del formulario este desactivado
    const button = screen.getByRole('button', { name: /Añadir a la cesta/i })
    expect(button).toBeDisabled()

    const color = screen.getByLabelText('color-1')
    fireEvent.click(color)

    // comprobar que el boton del formulario este activado
    expect(button).not.toBeDisabled()
    fireEvent.click(button)
  })

  test('Que si solo tienen un valor por cada campo del formulario el boton este activo desde el inicio', () => {
    const productsOnCart = 0
    const setProductsOnCartMock = jest.fn()

    const optionsProduct = {
      colors: [
        {
          code: 1,
          name: 'Black'
        }
      ],
      storages: [
        {
          code: 1,
          name: '16 GB'
        }
      ]
    }

    render(
      <ProductsOnCartContext.Provider value={{ productsOnCart, setProductsOnCart: setProductsOnCartMock }} >
          <DetailProduct product={product} descriptionProducts={descriptionProducts} optionsProduct={optionsProduct} />
      </ProductsOnCartContext.Provider>
    )

    const button = screen.getByRole('button', { name: /Añadir a la cesta/i })
    expect(button).not.toBeDisabled()
  })
})
