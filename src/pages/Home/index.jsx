import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'

export const Home = () => {
  return (
    <div className="page">
        <Header />
        <Outlet />
    </div>
  )
}
