import React from "react"
import { ProductCard } from "components/ProductCard"
import { Product } from "types/product-types"
import { Sort } from "components/Sort/Sort"
import { SortByType } from "types/filter-types"
import { useAppSelector } from "features/store"
import { selectSortBy } from "features/filter"
import _ from "lodash"

type Props = {
  category: string
  products: Product[]
}

export const ProductsList = ({ category, products }: Props) => {
  const sortBy = useAppSelector(selectSortBy)

  const sortingProducts = (products: Product[], sortBy: SortByType): Product[] => {
    const clonedProducts = _.cloneDeep(products)
    const collator = new Intl.Collator("en", {
      sensitivity: "base",
      ignorePunctuation: true,
      numeric: true,
    })
    if (sortBy === "price-asc") {
      return clonedProducts.sort((a, b) => a.price - b.price)
    }
    if (sortBy === "price-desc") {
      return clonedProducts.sort((a, b) => b.price - a.price)
    }
    if (sortBy === "name-asc") {
      return clonedProducts.sort((a, b) => collator.compare(a.title, b.title))
    }
    if (sortBy === "name-desc") {
      return clonedProducts.sort((a, b) => collator.compare(b.title, a.title))
    }
    return clonedProducts
  }

  const sortedProducts = sortingProducts(products, sortBy)

  return (
    <section className="products-section">
      <div className="products-section__footer">
        <h1 className="products-section__footer__title">{category}</h1>
        <div className="products-section__footer__sort">
          <Sort />
        </div>
      </div>

      <ul className="products">
        {sortedProducts &&
          sortedProducts.map((product) => (
            <li className="products__item" key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
      </ul>
    </section>
  )
}
