import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BASE_URL } from "utils/constants"
import axios from "axios"
import { RootState } from "features/store"
import { Products } from "types/categories"

export const fetchNamesCategories = createAsyncThunk(
  "categories/fetchNamesCategories",
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

export const getProductsCategory = createAsyncThunk<Products, string>(
  "categories/getProductsCategory",
  async (categoryName, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const { data } = await axios.get<Products>(`${BASE_URL}products/category/${categoryName}`)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  namesCategories: [] as string[],
  category: {} as Products,
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNamesCategories.fulfilled, (state, action: PayloadAction<string[]>) => {
      state.namesCategories = action.payload
    })
    builder.addCase(getProductsCategory.fulfilled, (state, action: PayloadAction<Products>) => {
      state.category = action.payload
    })
  },
})

export const selectNamesCategories = (state: RootState) => state.categories.namesCategories
export const selectCategory = (state: RootState) => state.categories.category

export default categoriesSlice.reducer
