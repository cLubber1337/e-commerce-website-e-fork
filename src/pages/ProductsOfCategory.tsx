import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsCategory, selectProductsCategory } from "features/categories"
import { useAppDispatch, useAppSelector } from "features/store"
import { getCategoryNameHelper } from "utils/productHelpers"
import { ProductsList } from "components/ProductsList"
import { Navbar } from "components/Navbar"
import { CustomButton } from "components/CustomButton"
import { useMediaQuery } from "react-responsive"

export const ProductsOfCategory = () => {
  const dispatch = useAppDispatch()
  const { categoryName } = useParams()
  const productsCategory = useAppSelector(selectProductsCategory)
  const [category, setCategory] = useState("")
  const isScreen765px = useMediaQuery({ query: "(max-width: 765px)" })

  useEffect(() => {
    if (categoryName) {
      dispatch(getProductsCategory({ categoryName }))
      setCategory(getCategoryNameHelper(categoryName))
    }
  }, [dispatch, categoryName])
  return (
    <section className="products-category">
      <div className="grid-container">
        <div className="grid-container__left">
          <Navbar />
        </div>
        <div className="grid-container__right">
          {isScreen765px && (
            <CustomButton
              title={"Catalog of goods"}
              onClick={() => null}
              size={"-large"}
              color={"-green"}
              icon={["fas", "folder"]}
              style={{ marginBottom: "12px" }}
            />
          )}
          <ProductsList category={category} products={productsCategory} />
        </div>
      </div>
    </section>
  )
}
