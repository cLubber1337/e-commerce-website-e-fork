import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "features/store"
import { getAllProducts, selectAllProducts } from "features/products"
import { Navbar } from "components/Navbar"
import { fetchNamesCategories } from "features/categories"
import { ProductsList } from "components/ProductsList"

export const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNamesCategories())
    dispatch(getAllProducts())
  }, [dispatch])

  const allProducts = useAppSelector(selectAllProducts)

  return (
    <div className="grid-container">
      <Navbar />
      <ProductsList products={allProducts.products} category={"Best sellers"} />
    </div>
  )
}
