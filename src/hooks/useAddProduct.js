import { useState, useContext } from 'react'
import { addProduct } from '@/services/products'

import { ProductsOnCartContext } from '../contexts/productsOnCart'

export const useAddProduct = () => {
  const { productsOnCart, setProductsOnCart } = useContext(ProductsOnCartContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getAddProductCart = async (productAdded) => {
    try {
      setLoading(true)
      const products = await addProduct(productAdded)
      setProductsOnCart((prevValue) => prevValue + Number(products?.count))
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    productsOnCart,
    loading,
    error,
    getAddProductCart
  }
}
