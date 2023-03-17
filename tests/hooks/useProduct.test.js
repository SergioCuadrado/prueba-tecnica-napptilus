import { renderHook } from '@testing-library/react'
import { useProduct } from '../../src/hooks/useProduct'

describe('Pruebas en el hook de useProduct', () => {
  test('Debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useProduct())
    const { product, getDetailProduct, loading, error } = result.current
    expect(product).toEqual(null)
    expect(typeof getDetailProduct).toBe('function')
    expect(loading).toBe(false)
    expect(error).toBe(null)
  })
})
