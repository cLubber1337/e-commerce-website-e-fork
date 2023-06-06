import { instance } from "utils/constants"
import { Products } from "types/product-types"

export const categoriesApi = {
  fetchNamesCategories() {
    return instance.get<string[]>(`products/categories`)
  },
  getProductsCategory(categoryName: string) {
    return instance.get<Products>(`products/category/${categoryName}`)
  },
}
