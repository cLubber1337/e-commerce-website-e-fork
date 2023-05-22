import React from "react"
import { useAppSelector } from "features/store"
import { selectAllProducts } from "features/products/productsSlice"

export const Home = () => {
  const allProducts = useAppSelector(selectAllProducts)

  console.log(allProducts)

  return (
    <div>
      {allProducts &&
        allProducts.products.map(({ title, id }) => (
          <div style={{ color: "black" }} key={id}>
            {title}
          </div>
        ))}
    </div>
  )
}
