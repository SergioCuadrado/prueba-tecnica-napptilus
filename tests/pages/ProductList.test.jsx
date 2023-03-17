import { render } from '@testing-library/react'

import { ProductList } from '@/pages/ProductList'
import { FilterContext } from '@/contexts/filter'
import { ProductsContext } from '@/contexts/products'

describe('Pruebas en <ProductList />', () => {
  const filter = {
    search: ''
  }
  const setProductsFilterMock = jest.fn()
  const setProductsMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Snapshot de la página', () => {
    const { container } = render(
    <FilterContext.Provider value={{ filter, setProductsFilter: setProductsFilterMock }}>
        <ProductsContext.Provider value={{ products: [], setProducts: setProductsMock }}>
            <ProductList />
        </ProductsContext.Provider>
    </FilterContext.Provider>

    )
    expect(container).toMatchSnapshot()
  })

  test('Cuando inicias por primera vez tiene que mostrarse el `skeleton` de react', () => {
    const { container } = render(
      <FilterContext.Provider value={{ filter, setProductsFilter: setProductsFilterMock }}>
        <ProductsContext.Provider value={{ products: [], setProducts: setProductsMock }}>
          <ProductList />
        </ProductsContext.Provider>
      </FilterContext.Provider>
    )

    expect(container.querySelector('.react-loading-skeleton')).toBeInTheDocument()
  })
})
