import { RootState } from "features/store"

export const selectSortBy = (state: RootState) => state.filter.sortBy
