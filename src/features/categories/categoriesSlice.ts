import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Products } from "types/product-types"
import { categoriesApi } from "api/categories.api"

export const fetchNamesCategories = createAsyncThunk<{ namesCategories: string[] }, void>(
  "categories/fetchNamesCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const { data } = await categoriesApi.fetchNamesCategories()
      return { namesCategories: data }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getProductsCategory = createAsyncThunk<
  { category: Products },
  { categoryName: string }
>("categories/getProductsCategory", async ({ categoryName }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const { data } = await categoriesApi.getProductsCategory(categoryName)
    return { category: data }
  } catch (error) {
    return rejectWithValue(error)
  }
})

const initialState = {
  namesCategories: [] as string[],
  category: {} as Products,
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
