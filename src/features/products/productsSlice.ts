import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Product, Products } from "types/product-types"
import { AppStatusType } from "types/app-types"
import { productsApi } from "api/products.api"

export const getAllProducts = createAsyncThunk<
  { products: Products },
  { limit: number; skip: number }
>("products/getAllProducts", async ({ limit, skip }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const { data } = await productsApi.getAllProducts(limit, skip)
    return { products: data }
  } catch (error) {
    return rejectWithValue(error)
  }
})
export const getSingleProduct = createAsyncThunk<{ product: Product }, { id: number }>(
  "products/getSingleProduct",
  async ({ id }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const { data } = await productsApi.getSingleProduct(id)
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
