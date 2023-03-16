import { Link, useLocation } from 'react-router-dom'

import './styles.css'

export const Breadcrumbs = () => {
  const location = useLocation()

  let currentLink = ''
  const crumbs = location.pathname.split('/').filter((crumb) => crumb).map((crumb) => {
    currentLink += `/${crumb}`
    return (
      <nav className='crumb' key={crumb}>
        <Link to={currentLink} className={location.pathname === currentLink ? 'breadcrumb-active' : 'breadcrumb-not-active'}>{crumb}</Link>
      </nav>
    )
  })

  return (
    <div className='breadcrumbs'>
      {crumbs}
    </div>
  )
}
