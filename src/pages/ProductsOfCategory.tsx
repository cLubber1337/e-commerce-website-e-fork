import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsCategory, selectProductsCategory } from "features/categories"
import { useAppDispatch, useAppSelector } from "features/store"
import { getCategoryNameHelper } from "utils/productHelpers"
import { ProductsList } from "components/ProductsList"
import { Navbar } from "components/Navbar"

export const ProductsOfCategory = () => {
  const dispatch = useAppDispatch()
  const { categoryName } = useParams()
  const productsCategory = useAppSelector(selectProductsCategory)
  const [category, setCategory] = useState("")

  useEffect(() => {
    if (categoryName) {
      dispatch(getProductsCategory({ categoryName }))
      setCategory(getCategoryNameHelper(categoryName))
    }
  }, [dispatch, categoryName])
  return (
    <div className="grid-container">
      <Navbar />
      <ProductsList category={category} products={productsCategory} />
    </div>
  )
}
