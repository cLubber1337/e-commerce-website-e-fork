import React from "react"
import { useAppSelector } from "features/store"
import { selectAllProducts } from "features/products"
import { Navbar } from "components/Navbar"
import { ProductsList } from "components/ProductsList"
import { SliderSimple } from "components/SimpleSlider/SliderSimple"
import { imagesForBanner } from "utils/images"
import { useMediaQuery } from "react-responsive"
import { CatalogModal } from "components/CatalogModal/CatalogModal"

export const Home = () => {
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
            <SliderSimple
              dots={true}
              infinite={true}
              autoplay={true}
              images={imagesForBanner}
              autoplaySpeed={4000}
            />
          </div>
          {isScreen765px && <CatalogModal />}
          <ProductsList products={allProducts} category={"Best sellers"} />
        </div>
      </div>
    </section>
  )
}
