import { Link } from 'react-router-dom'
import './styles.css'

const WithResults = ({ products }) => (
  <ul className='products'>
    {products?.map((product) => (
      <li className='product' key={product?.id}>
        <Link to={`/products/${product.id}`}>
          <img src={product?.image} alt={product?.model} />
          <h4>{product?.brand} - {product?.model}
          {product?.price.length > 0 ? <span> ${product?.price}</span> : null}
          </h4>
        </Link>
      </li>
    ))}
  </ul>

)

const WithoutResults = () => (
    <h2>No hay resultados...</h2>
)

export const Products = ({ products }) => {
  const haveProducts = products?.length > 0

  return (
    <div >
      {haveProducts ? <WithResults products={products} /> : <WithoutResults />}
    </div>
  )
}
