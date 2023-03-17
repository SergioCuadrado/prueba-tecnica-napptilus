import { useState } from 'react'
import Select from 'react-select'
import { useAddProduct } from '../../hooks/useAddProduct'
import './styles.css'

export const DetailProduct = ({ product, descriptionProducts, optionsProduct }) => {
  const storageDefault = optionsProduct.storages.length === 1
    ? {
        value: optionsProduct.storages[0].code,
        label: optionsProduct.storages[0].name
      }
    : ''
  const colorDefault = optionsProduct.colors.length === 1 ? optionsProduct.colors[0].code : ''
  const StorageOptions = optionsProduct.storages.map((color) => ({ value: color.code, label: color.name }))
  const [actions, setActions] = useState({ colorCode: colorDefault, storageCode: storageDefault?.value ? storageDefault.value : '' })
  const { getAddProductCart } = useAddProduct()
  if (!optionsProduct) return null

  const handleColorsChange = ({ target }) => {
    const colorCode = Number(target.name)
    setActions({
      ...actions,
      colorCode
    })
  }

  const handleStorageChange = ({ value }) => {
    setActions({
      ...actions,
      storageCode: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const productAdded = {
      id: product.description.id,
      ...actions
    }
    getAddProductCart(productAdded)
  }

  return (
    <div className="container">
      <div className="imgBx" data-content={product.description.brand}>
          <img src={product.description.image} alt={product.description.model} />
      </div>
      <div className="details">
          <div className="content">
            <h2>{product.description.model}</h2>
            <TableDescription descriptionProducts={descriptionProducts} />
            <Form handleSubmit={handleSubmit} optionsProduct={optionsProduct} actions={actions} handleColorsChange={handleColorsChange} product={product} storageDefault={storageDefault} handleStorageChange={handleStorageChange} StorageOptions={StorageOptions} />
          </div>
      </div>
    </div>
  )
}

const TableDescription = ({ descriptionProducts }) => (
  <table>
      <tbody>
        {descriptionProducts
          ? descriptionProducts.map((description) => (
          <tr key={description.name}>
            <td>
              <span>
                {description.name}
              </span>
            </td>
            <td>
              <span>
                {description.value.length > 0 ? description.value : 'No especificado'}
              </span>
            </td>
          </tr>
          ))
          : null}
      </tbody>
  </table>
)

const Form = ({ handleSubmit, optionsProduct, actions, handleColorsChange, product, storageDefault, handleStorageChange, StorageOptions }) => {
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: 'white',
        color: 'black'
      }
    }
  }

  return (
    <form className='buy-product' onSubmit={handleSubmit}>
        <h4 className='capacity'>Capacidad</h4>
        <Select className='basic-single' aria-label='Capacidad' onChange={handleStorageChange} options={StorageOptions} defaultInputValue={storageDefault?.label} styles={colourStyles} placeholder="Selecciona la capacidad de almacenamiento que desea" />
        <h4 className='colors-title'>Colores disponibles:</h4>
        <div className="product-colors" >
        {optionsProduct.colors.map((color) => (
            <div key={color.code}>
                <label className={`${color.name} ${actions.colorCode === color.code ? 'active' : null}`} style={{ backgroundColor: color?.name.toLowerCase() }} htmlFor={color.code} />
                <input type="checkbox" name={color.code} id={color.code} onChange={handleColorsChange} checked={actions.color === color.code} hidden />
            </div>
        ))}
        </div>
        <h3>$ {product.description.price}</h3>
        <button disabled={actions.colorCode === '' || actions.storageCode === ''}>Comprar</button>
    </form>
  )
}
