import { RootState } from "features/store"

export const selectNamesCategories = (state: RootState) => state.categories.namesCategories
export const selectProductsCategory = (state: RootState) => state.categories.category
