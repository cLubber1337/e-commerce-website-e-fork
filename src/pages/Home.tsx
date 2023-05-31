import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "features/store"
import { getAllProducts, selectAllProducts } from "features/products"
import { Navbar } from "components/Navbar"
import { ProductsList } from "components/ProductsList"
import { SliderSimple } from "components/SimpleSlider/SliderSimple"
import { imagesForBanner } from "utils/images"
import { CustomButton } from "components/CustomButton"
import { useMediaQuery } from "react-responsive"

export const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  const isScreen765px = useMediaQuery({ query: "(max-width: 765px)" })
  const allProducts = useAppSelector(selectAllProducts)

  return (
    <section className="section-home">
      <div className="grid-container">
        <div className="grid-container__left">
          <Navbar />
        </div>
        <div className="grid-container__right">
          <div className="section-home__banner">
            <SliderSimple dots={true} infinite={true} autoplay={false} images={imagesForBanner} />
          </div>
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
          <ProductsList products={allProducts.products} category={"Best sellers"} />
        </div>
      </div>
    </section>
  )
}
