import { RootState } from "features/store"

export const selectSearchResults = (state: RootState) => state.search.searchResults
export const selectSearchValue = (state: RootState) => state.search.searchValue
