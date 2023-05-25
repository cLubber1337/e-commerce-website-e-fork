import React from "react"
import { useAppSelector } from "features/store"
import { selectAllProducts } from "features/products"
import { Navbar } from "components/Navbar"

export const Home = () => {
  const allProducts = useAppSelector(selectAllProducts)

  return (
    <div className="grid-container">
      <Navbar />
      <div>
        {allProducts &&
          allProducts.products.map(({ title, id }) => (
            <div style={{ color: "black" }} key={id}>
              {title}
            </div>
          ))}
      </div>
    </div>
  )
}
