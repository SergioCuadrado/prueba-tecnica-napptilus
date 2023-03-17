import { useState } from 'react'
import { getProduct } from '@/services/products'
import { updateLocalStorage } from '../helpers/localStorage'

export const useProduct = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const oneHour = 3600000

  const getDetailProduct = async ({ id }) => {
    try {
      setLoading(true)
      const localPodcasts = window.localStorage.getItem(`product-${id}`) ? JSON.parse(window.localStorage.getItem(`product-${id}`)) : null
      if (localPodcasts && (Date.now() - localPodcasts.creation) < oneHour) {
        setProduct(localPodcasts.data)
        return
      }
      const products = await getProduct({ id })
      updateLocalStorage(`product-${id}`, { data: products, creation: Date.now() })
      setProduct(products)
    } catch (error) {
      setError(error.message)
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
