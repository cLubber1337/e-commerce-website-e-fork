import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SortByType } from "types/filter-types"

let initialState = {
  sortBy: "popularity" as SortByType,
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<{ sortBy: SortByType }>) {
      state.sortBy = action.payload.sortBy
    },
  },
})

export const { setSortBy } = filterSlice.actions
export default filterSlice.reducer
