import { Filter } from '@/components/Filter'
import { Loader } from '@/components/Loader'
import { Products } from '@/components/Products'
import { useFiltersProducts } from '@/hooks/useFiltersProducts'
import { useProducts } from '@/hooks/useProducts'
import { useEffect } from 'react'

export const ProductList = () => {
  const { filterProducts } = useFiltersProducts()
  const { getProducts, products, loading, error } = useProducts()
  let filteredProducts = []

  useEffect(() => {
    getProducts()
  }, [])

  if (!loading && products?.length > 0) filteredProducts = filterProducts(products)

  if (loading) return <Loader />
  if (error) return <h2>{error?.message}</h2>

  return (
    <>
      <Filter />
      <Products products={filteredProducts} />
    </>
  )
}
