import { getListProducts } from '@/services/products'

describe('Pruebas en el servicio `products`', () => {
  test('Debe de obtener la lista de productos de `getListProducts`', async () => {
    const products = await getListProducts()
    expect(products.length).toBeGreaterThan(0)

    expect(products[0]).toEqual({
      id: expect.any(String),
      brand: expect.any(String),
      model: expect.any(String),
      price: expect.any(String),
      image: expect.any(String)
    })
  })
})
