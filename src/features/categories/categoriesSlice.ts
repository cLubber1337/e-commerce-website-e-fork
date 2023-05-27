import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL } from "utils/constants"
import axios from "axios"
import { Product, Products } from "types/product-types"

export const fetchNamesCategories = createAsyncThunk<{ namesCategories: string[] }, void>(
  "categories/fetchNamesCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const { data } = await axios.get<string[]>(`${BASE_URL}products/categories`)
      return { namesCategories: data }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getProductsCategory = createAsyncThunk<
  { category: Product[] },
  { categoryName: string }
>("categories/getProductsCategory", async ({ categoryName }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const { data } = await axios.get<Products>(`${BASE_URL}products/category/${categoryName}`)
    return { category: data.products }
  } catch (error) {
    return rejectWithValue(error)
  }
})

const initialState = {
  namesCategories: [] as string[],
  category: [] as Product[],
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNamesCategories.fulfilled, (state, action) => {
      state.namesCategories = action.payload.namesCategories
    })
    builder.addCase(getProductsCategory.fulfilled, (state, action) => {
      state.category = action.payload.category
    })
  },
})

export default categoriesSlice.reducer
