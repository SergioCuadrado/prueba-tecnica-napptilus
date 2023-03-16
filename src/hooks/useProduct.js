import { useState } from 'react'
import { getProduct } from '@/services/products'

export const useProduct = ({ id }) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getDetailProduct = async () => {
    try {
      setLoading(true)
      const products = await getProduct({ id })
      setProduct(products)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    product,
    loading,
    error,
    getDetailProduct
  }
}
