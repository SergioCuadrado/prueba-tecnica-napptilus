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
