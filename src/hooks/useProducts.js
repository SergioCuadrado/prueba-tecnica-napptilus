import { ProductsContext } from '@/contexts/products'
import { getListProducts } from '@/services/products'
import { useContext, useState } from 'react'
import { updateLocalStorage } from '../helpers/localStorage'

export const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const oneHour = 3600000
  const getProducts = async () => {
    try {
      setLoading(true)
      const localPodcasts = window.localStorage.getItem('products') ? JSON.parse(window.localStorage.getItem('products')) : null

      // si el tiempo expirado es de 1 hora, entonces se actualiza el localStorage
      if (localPodcasts && (Date.now() - localPodcasts.creation) < oneHour) {
        setProducts(localPodcasts.data)
        return
      }
      const products = await getListProducts()
      updateLocalStorage('products', { data: products, creation: Date.now() })
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
