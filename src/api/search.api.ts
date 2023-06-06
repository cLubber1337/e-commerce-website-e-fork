import { instance } from "utils/constants"
import { Products } from "types/product-types"

export const searchApi = {
  fetchSearchedResults(searchValue: string) {
    return instance.get<Products>(`products/search?q=${searchValue}`)
  },
}
