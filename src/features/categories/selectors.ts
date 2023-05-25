import { RootState } from "features/store"

export const selectNamesCategories = (state: RootState) => state.categories.namesCategories
export const selectCategory = (state: RootState) => state.categories.category
