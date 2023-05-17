import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BASE_URL } from "utils/constants"
import axios from "axios"
import { RootState } from "features/store"

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const { data } = await axios.get(`${BASE_URL}products/categories`)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [] as string[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload
    })
  },
})

export const selectCategories = (state: RootState) => state.categories.categories

export default categoriesSlice.reducer
