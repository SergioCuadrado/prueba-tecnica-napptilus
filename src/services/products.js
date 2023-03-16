const API_URL = 'https://itx-frontend-test.onrender.com/api'

export const getListProducts = async () => {
  const { signal } = new AbortController()
  try {
    const response = await fetch(`${API_URL}/product`, { signal })
    if (!response.ok) throw new Error('Error: No se pudo obtener los productos')
    if (signal.aborted) throw new Error('Petición cancelada, inténtelo de nuevo')

    const products = await response.json()

    return products.map((product) => ({
      id: product.id,
      brand: product.brand,
      model: product.model,
      price: product.price,
      image: product.imgUrl
    }))
  } catch (error) {
    if (error.name === 'AbortError') return
    throw new Error(error.message)
  }
}

export const getProduct = async ({ id }) => {
  const { signal } = new AbortController()
  try {
    const response = await fetch(`${API_URL}/product/${id}`, { signal })
    if (!response.ok) throw new Error('Error: No se pudo obtener el producto')
    if (signal.aborted) throw new Error('Petición cancelada, inténtelo de nuevo')

    const product = await response.json()

    return {
      description: {
        id: product.id,
        brand: product.brand,
        model: product.model,
        price: product.price,
        image: product.imgUrl,
        cpu: product.cpu,
        ram: product.ram,
        os: product.os,
        screenResolution: product.displayResolution,
        battery: product.battery,
        primaryCamera: product.primaryCamera,
        secondaryCamera: product.secondaryCmera,
        dimensions: product.dimentions,
        weight: product.weight
      },
      options: {
        colors: product.options?.colors,
        storages: product.options?.storages
      }
    }
  } catch (error) {
    if (error.name === 'AbortError') return
    throw new Error(error.message)
  }
}

export const addProduct = async (productAdded) => {
  const { signal } = new AbortController()
  try {
    const response = await fetch(`${API_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productAdded),
      signal
    })
    if (!response.ok) throw new Error('Error: No se pudo agregar el producto')
    if (signal.aborted) throw new Error('Petición cancelada, inténtelo de nuevo')

    return await response.json()
  } catch (error) {
    if (error.name === 'AbortError') return
    throw new Error(error.message)
  }
}
