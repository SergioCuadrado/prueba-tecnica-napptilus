import { FilterContext } from '@/contexts/filter'
import { useContext } from 'react'

export const useFiltersProducts = () => {
  const { filter, setProductsFilter } = useContext(FilterContext)

  const filterProducts = (products) => (
    products.filter((product) => {
      if (filter.search === '' || product.brand.toLowerCase().includes(filter.search.toLowerCase()) || product.model.toLowerCase().includes(filter.search.toLowerCase())
      ) {
        return product
      }
      return null
    })
  )

  return { filter, setProductsFilter, filterProducts }
}
