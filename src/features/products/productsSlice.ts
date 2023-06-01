import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Product, Products } from "types/product-types"
import { BASE_URL } from "utils/constants"
import axios from "axios"

export const getAllProducts = createAsyncThunk<{ products: Products }, void>(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const { data } = await axios.get<Products>(`${BASE_URL}products?limit=100`)
      return { products: data }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const getSingleProduct = createAsyncThunk<{ product: Product }, { id: number }>(
  "products/getSingleProduct",
  async ({ id }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const { data } = await axios.get<Product>(`${BASE_URL}products/${id}`)
      return { product: data }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  products: {} as Products,
  product: {} as Product,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload.products
    })
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.product = action.payload.product
    })
  },
})

export default productsSlice.reducer
