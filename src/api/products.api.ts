import { instance } from "utils/constants"
import { Product, Products } from "types/product-types"

export const productsApi = {
  getAllProducts(limit: number, skip: number) {
    return instance.get<Products>(`products?limit=${limit}&skip=${skip}`)
  },
  getSingleProduct(id: number) {
    return instance.get<Product>(`products/${id}`)
  },
}
