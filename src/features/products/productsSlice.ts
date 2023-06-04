import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Product, Products } from "types/product-types"
import { BASE_URL } from "utils/constants"
import axios from "axios"
import { AppStatusType } from "types/app-types"

export const getAllProducts = createAsyncThunk<{ products: Products }, { limit: string }>(
  "products/getAllProducts",
  async ({ limit }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const { data } = await axios.get<Products>(`${BASE_URL}products?limit=${limit}`)
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
  statusSingleProduct: "idle" as AppStatusType,
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
      state.statusSingleProduct = "success"
    })
    builder.addCase(getSingleProduct.rejected, (state) => {
      state.statusSingleProduct = "error"
    })
    builder.addCase(getSingleProduct.pending, (state) => {
      state.statusSingleProduct = "loading"
    })
  },
})

export default productsSlice.reducer
