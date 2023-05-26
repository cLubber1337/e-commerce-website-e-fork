export const getCategoryNameHelper = (categoryName: string) => {
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
