import { createContext, useState } from 'react'

export const ProductsOnCartContext = createContext()

export const ProductsOnCartProvider = ({ children }) => {
  const [productsOnCart, setProductsOnCart] = useState(0)

  return (
    <ProductsOnCartContext.Provider value={{ productsOnCart, setProductsOnCart }}>
      {children}
    </ProductsOnCartContext.Provider>
  )
}
