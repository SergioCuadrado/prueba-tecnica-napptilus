import React, { useId } from 'react'
import { useFiltersProducts } from '@/hooks/useFiltersProducts'

import './styles.css'

export const Filter = () => {
  const searchFilter = useId()
  const { filter, setProductsFilter } = useFiltersProducts()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = ({ target }) => {
    const search = target.value
    setProductsFilter((prevState) => ({
      ...prevState,
      search
    }))
  }

  return (
    <>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor={searchFilter}>Búsqueda por marca / modelo:</label>
          <input
              name={searchFilter}
              id={searchFilter}
              type="text"
              onChange={handleChange}
              value={filter.search}
              placeholder="Liquid, Iconia..."
              autoFocus
          />
        </form>
    </>
  )
}
