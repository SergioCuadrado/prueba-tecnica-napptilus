import { Link } from 'react-router-dom'
import { CartIcon } from '../Icons'
import './styles.css'

export const Header = () => {
  // const [breadcrumbs, setBreadcrumbs] = useState(['Home', 'Products', 'Product'])

  return (
    <header>
      <div>
        <Link to='/' className='title-app'>
          <h1>Napptilus-Shop</h1>
        </Link>
        <p>Home &gt; Products &gt; Product</p>
          {/* <nav>
            <ul>
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index}>
                  <a href="#">{breadcrumb}</a>
                </li>
              ))}
            </ul>
          </nav> */}
      </div>
      <label className='cart-button' htmlFor="">
        <CartIcon />
        <span>5</span>
      </label>
    </header>
  )
}
