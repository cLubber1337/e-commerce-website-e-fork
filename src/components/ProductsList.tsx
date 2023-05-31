import React from "react"
import { ProductCard } from "components/ProductCard"
import { Product } from "types/product-types"

type Props = {
  category: string
  products: Product[]
}

export const ProductsList = ({ category, products }: Props) => {
  return (
    <section className="products-section">
      <h1 className="products-section__title">{category}</h1>

      <ul className="products">
        {products &&
          products.map((product) => (
            <li className="products__item" key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
      </ul>
    </section>
  )
}
