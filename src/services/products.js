const { VITE_API_PRODUCTS } = import.meta.env
export const getListProducts = async () => {
  try {
    const response = await fetch(`${VITE_API_PRODUCTS}/product`)
    const products = await response.json()

    return products.map((product) => ({
      id: product.id,
      brand: product.brand,
      model: product.model,
      price: product.price,
      image: product.imgUrl
    }))
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
