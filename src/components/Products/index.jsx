import { useProducts } from '@/hooks/useProducts'
import { useEffect } from 'react'
import './styles.css'

export const Products = () => {
  const { products, loading, error, getProducts } = useProducts()

  useEffect(() => {
    getProducts()
  }, [])

  console.log({ products, loading, error })
  return (
    <div >
      <ul className='products'>
          {products.map((product) => (
              <li className='product' key={product.id}>
                  <img src={product.image} alt={product.model} />
                  <h4>{product.brand} - {product.model}
                  {product?.price.length > 0 ? <span>${product.price}</span> : null}
                  </h4>
              </li>
          ))}
      </ul>
    </div>
  )
}
