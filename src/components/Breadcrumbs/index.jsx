import { Link, useLocation } from 'react-router-dom'

import './styles.css'

export const Breadcrumbs = () => {
  const location = useLocation()

  return (
    <nav>
        <Link to="/" className={location.pathname === '/' ? 'breadcrumb-active' : 'breadcrumb-not-active'}>Home</Link>
        <span className="breadcrumb-arrow">&gt;</span>
        <Link to="/products" className={location.pathname.startsWith('/products') ? 'breadcrumb-active' : 'breadcrumb-not-active'}>Products</Link>
    </nav>
  )
}
