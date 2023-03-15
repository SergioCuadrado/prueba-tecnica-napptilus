import './App.css'
import { ProductList } from '@/pages/ProductList'
import { ProductsFilterProvider } from './contexts/filter'
import { ProductsProvider } from './contexts/products'

function App () {
  return (
    <div className="page">
      <h1>React App</h1>
      <ProductsProvider>
        <ProductsFilterProvider>
          <ProductList />
        </ProductsFilterProvider>
      </ProductsProvider>
    </div>
  )
}

export default App
