import './App.css'
import { ProductList } from '@/pages/ProductList'
import { ProductsFilterProvider } from './contexts/filter'
import { ProductsProvider } from './contexts/products'

export const App = () => {
  return (
    <ProductsProvider>
      <ProductsFilterProvider>
        <ProductList />
      </ProductsFilterProvider>
    </ProductsProvider>
  )
}
