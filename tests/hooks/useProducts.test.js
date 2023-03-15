import { renderHook } from '@testing-library/react'

import { useProducts } from '@/hooks/useProducts'
import { ProductsContext } from '@/contexts/products'

describe('Pruebas en el hook useProducts', () => {
  test('Debe retornar el valor por defecto', () => {
    const setProductsMock = jest.fn()
    const wrapper = ({ children }) => <ProductsContext.Provider value={{ products: [], setProducts: setProductsMock }}>{children}</ProductsContext.Provider>

    const { result } = renderHook(() => useProducts(), { wrapper })
    const { products, loading, error, getProducts } = result.current
    expect(products).toEqual([])
    expect(loading).toBe(false)
    expect(error).toBe(null)
    expect(typeof getProducts).toBe('function')
  })
})
