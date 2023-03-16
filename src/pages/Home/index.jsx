import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { ProductsOnCartProvider } from '../../contexts/productsOnCart'

export const Home = () => {
  return (
    <div className="page">
      <ProductsOnCartProvider>
        <Header />
        <Outlet />
      </ProductsOnCartProvider>
    </div>
  )
}
