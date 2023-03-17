import { Link } from 'react-router-dom'
import { useAddProduct } from '../../hooks/useAddProduct'
import { Breadcrumbs } from '../Breadcrumbs'
import { CartIcon } from '../Icons'
import './styles.css'

export const Header = () => {
  const { productsOnCart } = useAddProduct()
  return (
    <header>
      <div>
        <Link to='/' className='title-app'>
          <h1>Napptilus-Shop</h1>
        </Link>
        <Breadcrumbs />
      </div>
      <label className='cart-button' htmlFor="">
        <CartIcon />
        <span>{productsOnCart}</span>
      </label>
    </header>
  )
}
