import { NavLink } from 'react-router-dom'

import useBreadcrumbs from 'use-react-router-breadcrumbs'

import './styles.css'

const routes = [
  { path: '/', breadcrumb: 'Home' },
  { path: '/products', breadcrumb: 'Productos' },
  { path: '/products/:id', breadcrumb: 'Detalles Producto' }
]

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes)

  return (
    <nav className='breadcrumbs'>
     { breadcrumbs.map(({ match, breadcrumb }) => (
       match.pathname !== '/products'
         ? (
            <NavLink key={match.pathname} to={match.pathname} className={({ isActive, isPending }) =>
              `breadcrumbs breadcrumb-${isActive ? 'active' : isPending ? 'pending' : 'not-active'}`
          }>
            {breadcrumb}
          </NavLink>
           )
         : null
     ))}
    </nav>
  )
}
