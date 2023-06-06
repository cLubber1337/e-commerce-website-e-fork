import { Product } from "types/product-types"
import { SortByType } from "types/filter-types"
import _ from "lodash"

export const getCategoryNameHelper = (categoryName: string) => {
  if (!categoryName) return ""
  let newCategoryName = categoryName[0].toUpperCase() + categoryName.slice(1)
  newCategoryName = newCategoryName.replace(/-/g, " ")
  return newCategoryName
}

export const getPercentHelper = (discountPercentage: number) => {
  return Math.round(discountPercentage)
}

export const getOldPriceHelper = (price: number, percent: number) => {
  const discount = percent / 100
  const oldPrice = price / (1 - discount)
  return oldPrice.toFixed(2)
}
export const sortingProducts = (products: Product[], sortBy: SortByType): Product[] => {
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
