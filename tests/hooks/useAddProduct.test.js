import { renderHook, act, waitFor } from '@testing-library/react'

import { ProductsOnCartContext } from '@/contexts/productsOnCart'
import { useAddProduct } from '@/hooks/useAddProduct'

describe('Pruebas en el hook useAddProduct', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Debe de retornar el valor por defecto', () => {
    const productsOnCartMock = 0
    const setProductsMock = jest.fn()

    const wrapper = ({ children }) => <ProductsOnCartContext.Provider value={{ productsOnCart: productsOnCartMock, setProductsOnCart: setProductsMock }}>{children}</ProductsOnCartContext.Provider>
    const { result } = renderHook(() => useAddProduct(), { wrapper })
    const { getAddProductCart, productsOnCart, loading, error } = result.current
    expect(typeof getAddProductCart).toBe('function')
    expect(productsOnCart).toBe(0)
    expect(loading).toBe(false)
    expect(error).toBe(null)
  })

  test('Que se añada un nuevo valor en el productOnCart', async () => {
    const productsOnCartMock = 0
    const setProductsMock = jest.fn()

    const wrapper = ({ children }) => <ProductsOnCartContext.Provider value={{ productsOnCart: productsOnCartMock, setProductsOnCart: setProductsMock }}>{children}</ProductsOnCartContext.Provider>
    const { result } = renderHook(() => useAddProduct(), { wrapper })
    const { getAddProductCart } = result.current
    const productAdded = {
      colorCode: 1000, id: 'ZmGrkLRPXOTpxsU4jjAcv', storageCode: 2000
    }
    await act(async () => await getAddProductCart(productAdded))

    await waitFor(() => expect(setProductsMock).toHaveBeenCalledTimes(1))
  })
})
