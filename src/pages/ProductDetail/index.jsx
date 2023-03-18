import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DetailProduct } from '../../components/DetailProduct'
import { Loader } from '../../components/Loader'
import { useProduct } from '../../hooks/useProduct'

const DETAILS_IN_SPANISH = {
  brand: 'Marca',
  model: 'Modelo',
  price: 'Precio',
  cpu: 'CPU',
  ram: 'RAM',
  os: 'Sistema Operativo',
  screenResolution: 'Resolución de pantalla',
  battery: 'Batería',
  primaryCamera: 'Cámara principal',
  secondaryCamera: 'Cámara secundaria',
  dimensions: 'Dimensiones',
  weight: 'Peso'
}

export const ProductDetail = () => {
  const { id } = useParams()
  const { getDetailProduct, product, error, loading } = useProduct()

  useEffect(() => {
    getDetailProduct({ id })
  }, [])

  const descriptionProducts = product
    ? Object.entries(product?.description).map((desc) => {
      const name = DETAILS_IN_SPANISH[desc[0]]
      const value = desc[1]
      return { name, value }
    }).filter((desc) => {
      return desc.name !== undefined
    })
    : null

  const optionsProduct = product ? product.options : null

  if (error) return <DetailErrorProduct error={error} />
  if (loading) return <Loader />

  return (
    <>
      {product
        ? <DetailProduct product={product} descriptionProducts={descriptionProducts} optionsProduct={optionsProduct} errorValue={error} />
        : null
      }
    </>

  )
}

const DetailErrorProduct = ({ error }) => {
  return (
    <>
      <h2>{error}</h2>
      <p>Por favor, intenta nuevamente más tarde</p>
    </>
  )
}
