import React from "react"
import { useAppSelector } from "features/store"
import { selectAllProducts } from "features/products"
import { Navbar } from "components/Navbar"
import { ProductCard } from "components/ProductCard"

export const Home = () => {
  const allProducts = useAppSelector(selectAllProducts)

  return (
    <div className="grid-home-container">
      <Navbar />

      <section className="products-section">
        <h1 className="products-section__title">Our Products</h1>

        <div className="products">
          {allProducts &&
            allProducts.products.map(
              ({ title, id, thumbnail, price, discountPercentage, category, brand }) => (
                <ProductCard
                  key={id}
                  title={title}
                  price={price}
                  discountPercentage={discountPercentage}
                  thumbnail={thumbnail}
                  category={category}
                  brand={brand}
                />
              )
            )}
        </div>
      </section>
    </div>
  )
}
