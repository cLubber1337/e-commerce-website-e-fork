import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Product, Products } from "types/product-types"
import { BASE_URL } from "utils/constants"
import axios from "axios"
import { AppStatusType } from "types/app-types"

export const getAllProducts = createAsyncThunk<
  { products: Product[]; total: number },
  { limit: number; skip: number }
>("products/getAllProducts", async ({ limit, skip }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const { data } = await axios.get<Products>(`${BASE_URL}products?limit=${limit}&skip=${skip}`)
    return { products: data.products, total: data.total }
  } catch (error) {
    return rejectWithValue(error)
  }
})
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
  products: [] as Product[],
  product: {} as Product,
  statusSingleProduct: "idle" as AppStatusType,
  total: 0 as number,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload.products
      state.total = action.payload.total
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
