import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Product, Products } from "types/product-types"
import axios from "axios"
import { BASE_URL } from "utils/constants"

let initialState = {
  searchResults: [] as Product[],
  searchValue: "",
}

export const fetchSearchedResults = createAsyncThunk<
  { searchResult: Product[]; searchValue: string },
  { searchValue: string }
>("search/fetchSearchedResults", async ({ searchValue }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const { data } = await axios.get<Products>(`${BASE_URL}products/search?q=${searchValue}`)
    let searchResult = data.products
    return { searchResult, searchValue }
  } catch (error) {
    return rejectWithValue(error)
  }
})

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchedResults.fulfilled, (state, action) => {
      state.searchResults = action.payload.searchResult
      state.searchValue = action.payload.searchValue
    })
  },
})

export const { clearSearchResults } = searchSlice.actions
export default searchSlice.reducer
