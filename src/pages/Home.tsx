import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "features/store"
import { getAllProducts, selectAllProducts } from "features/products"
import { Navbar } from "components/Navbar"
import { ProductsList } from "components/ProductsList"
import { SliderSimple } from "components/SimpleSlider/SliderSimple"
import { imagesForBanner } from "utils/images"

export const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const allProducts = useAppSelector(selectAllProducts)

  return (
    <section className="section-home">
      <div className="section-home__left">
        <Navbar />
      </div>

      <div className="section-home__right">
        <div className="section-home__right__banner">
          <SliderSimple dots={true} infinite={true} autoplay={false} images={imagesForBanner} />
        </div>
        <ProductsList products={allProducts.products} category={"Best sellers"} />
      </div>
    </section>
  )
}
