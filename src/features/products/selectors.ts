import { RootState } from "features/store"

export const selectAllProducts = (state: RootState) => state.products.products
export const selectSingleProduct = (state: RootState) => state.products.product
export const selectStatusSingleProduct = (state: RootState) => state.products.statusSingleProduct
export const selectTotalProduct = (state: RootState) => state.products.total
