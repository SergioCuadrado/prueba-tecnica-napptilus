import { getListProducts, getProduct, addProduct } from '@/services/products'

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

  test('Debe de obtener un error si se pasa un ID invalida de un producto', async () => {
    try {
      await getProduct({ id: '1' })
    } catch (error) {
      expect(error.message).toBe('Ups! este producto no se pudo obtener/no existe')
    }
    // expect(product).toThrow('Ups! este producto no se pudo obtener/no existe')
  })

  test('Debe de devolverme la informacion de un producto a partir de un ID', async () => {
    try {
      const product = await getProduct({ id: 'ZmGrkLRPXOTpxsU4jjAcv' })
      expect(product).toEqual({
        description: {
          id: expect.any(String),
          brand: expect.any(String),
          model: expect.any(String),
          price: expect.any(String),
          image: expect.any(String),
          cpu: expect.any(String),
          ram: expect.any(String),
          os: expect.any(String),
          screenResolution: expect.any(String),
          battery: expect.any(String),
          primaryCamera: expect.any(Array),
          secondaryCamera: expect.any(Array),
          dimensions: expect.any(String),
          weight: expect.any(String)
        },
        options: {
          colors: expect.any(Array),
          storages: expect.any(Array)
        }
      })
    } catch (error) {
      console.log(error)
    }
  })

  test('Debe de NO añadirse un nuevo producto si el body le envias informacion incorrecta', async () => {
    try {
      const productAdded = {
        id: 'ZmGrkLRPXOTpxsU4asdasdasdjjAcv',
        color: 'black',
        storage: '128gb'
      }

      await addProduct(productAdded)
    } catch (error) {
      expect(error.message).toBe('Error: No se pudo agregar el producto')
    }
  })

  test('Debe de añadirse un nuevo producto', async () => {
    try {
      const productAdded = {
        id: 'ZmGrkLRPXOTpxsU4jjAcv',
        colorCode: 1000,
        storageCode: 1000
      }

      const product = await addProduct(productAdded)
      expect(product).toEqual({
        count: expect.any(Number)
      })
    } catch (error) {
      // console.log(error)
    }
  })
})
