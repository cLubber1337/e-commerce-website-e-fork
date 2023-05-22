import { RootState } from "features/store"

export const selectAllProducts = (state: RootState) => state.products.products
export const selectSingleProduct = (state: RootState) => state.products.product
