import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Products } from "types/product-types"
import { searchApi } from "api/search.api"

export const fetchSearchedResults = createAsyncThunk<
  { searchResult: Products; searchValue: string },
  { searchValue: string }
>("search/fetchSearchedResults", async ({ searchValue }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const { data } = await searchApi.fetchSearchedResults(searchValue)
    let searchResult = data
    return { searchResult, searchValue }
  } catch (error) {
    return rejectWithValue(error)
  }
})

let initialState = {
  searchResults: {} as Products,
  searchValue: "",
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchedResults.fulfilled, (state, action) => {
      state.searchResults = action.payload.searchResult
      state.searchValue = action.payload.searchValue
    })
  },
})

export default searchSlice.reducer
