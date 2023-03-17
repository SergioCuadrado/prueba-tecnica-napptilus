import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import allProducts from '../../mocks/allProducts.json'

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

const LoaderProduct = () => (
  <ul className='products'>
    {
      Array(allProducts.length)
        .fill()
        .map((_, index) => (
            <li className='product' key={index}>
              <Skeleton key={index} height={250} />
            </li>
        ))
    }
  </ul>
)

export const Products = ({ products, loading }) => {
  if (loading) return <LoaderProduct />
  const haveProducts = products?.length > 0

  return (
    <div >
      {haveProducts ? <WithResults products={products} /> : <WithoutResults />}
    </div>
  )
}
