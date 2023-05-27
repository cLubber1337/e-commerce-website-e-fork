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

      <div className="products">
        {products && products.map((product) => <ProductCard key={product.id} {...product} />)}
      </div>
    </section>
  )
}
