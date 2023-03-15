import { renderHook } from '@testing-library/react'
import allProducts from '../../src/mocks/allProducts.json'

import { FilterContext } from '../../src/contexts/filter'
import { useFiltersProducts } from '../../src/hooks/useFiltersProducts'

describe('Pruebas en el hook useFiltersProducts', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Debe retornar el valor por defecto', () => {
    const setProductsFilterMock = jest.fn()
    const wrapper = ({ children }) => <FilterContext.Provider value={{ filter: { search: '' }, setProductsFilter: setProductsFilterMock }}>{children}</FilterContext.Provider>

    const { result } = renderHook(() => useFiltersProducts(), { wrapper })
    const { filter, setProductsFilter, filterProducts } = result.current

    expect(filter).toEqual({ search: '' })
    expect(typeof setProductsFilter).toBe('function')
    expect(typeof filterProducts).toBe('function')
  })

  test('Debe retornar un array con los productos filtrados', () => {
    const setProductsFilterMock = jest.fn()
    const wrapper = ({ children }) => <FilterContext.Provider value={{ filter: { search: 'Liquid' }, setProductsFilter: setProductsFilterMock }}>{children}</FilterContext.Provider>

    const { result } = renderHook(() => useFiltersProducts(), { wrapper })
    const { filterProducts } = result.current

    const productsFiltered = filterProducts(allProducts)
    expect(productsFiltered.length).toBeLessThan(allProducts.length)
  })
})
