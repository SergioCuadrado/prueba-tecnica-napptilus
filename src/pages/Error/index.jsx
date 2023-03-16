import { Link, useRouteError } from 'react-router-dom'

import './styles.css'

export const ErrorPage = () => {
  const error = useRouteError()
  return (
    <section className='error-page'>
        <h2>{error?.status} Error</h2>
        <p>{error?.data}</p>
        <Link to='/products'>Volver a la página inicial</Link>
    </section>
  )
}
