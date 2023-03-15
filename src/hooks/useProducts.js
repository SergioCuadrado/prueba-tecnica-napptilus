import { ProductsContext } from '@/contexts/products'
import { getListProducts } from '@/services/products'
import { useContext, useState } from 'react'

export const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getProducts = async () => {
    try {
      setLoading(true)
      const products = await getListProducts()
      setProducts(products)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    products,
    loading,
    error,
    getProducts
  }
}
