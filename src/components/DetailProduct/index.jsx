import { useState } from 'react'

export const DetailProduct = ({ product, descriptionProducts, optionsProduct }) => {
  const [actions, setActions] = useState({ color: '', capacity: '' })
  console.log(optionsProduct)
  if (!optionsProduct) return null

  const handleColorsChange = ({ target }) => {
    const color = Number(target.name)
    setActions({
      ...actions,
      color
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <div className="imgBx" data-content={product.description.brand}>
          <img src={product.description.image} alt={product.description.model} />
      </div>
      <div className="details">
          <div className="content">
            <h2>{product.description.model}</h2>
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
            <form className='buy-product' onSubmit={handleSubmit}>
                <label className='capacity' htmlFor="capacity">Capacidad</label>
                <select name="capacity" id="capacity">
                    {optionsProduct.storages.map((capacity) => (
                        <option key={capacity.code} value={capacity.name}>{capacity.name}</option>
                    ))}
                </select>
                <h4 className='colors-title'>Colores disponibles:</h4>
                <div className="product-colors" >
                {optionsProduct.colors.map((color) => (
                    <div key={color.code}>
                        <label className={`${color.name} ${actions.color === color.code ? 'active' : null}`} style={{ backgroundColor: color?.name.toLowerCase() }} htmlFor={color.code} />
                        <input type="checkbox" name={color.code} id={color.code} onChange={handleColorsChange} checked={actions.color === color.code} hidden />
                    </div>
                ))}
                </div>
                <h3>$ {product.description.price}</h3>
                <button>Comprar</button>
            </form>
          </div>
      </div>
    </div>
  )
}
