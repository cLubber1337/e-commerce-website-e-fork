import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product, Products } from "types/categories"
import { BASE_URL } from "utils/constants"
import axios from "axios"

export const getAllProducts = createAsyncThunk<Products, void>(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const { data } = await axios.get<Products>(`${BASE_URL}products`)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const getSingleProduct = createAsyncThunk<Product, number>(
  "products/getSingleProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const { data } = await axios.get<Product>(`${BASE_URL}products/${id}`)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  products: null as Products | null,
  product: {} as Product,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action: PayloadAction<Products>) => {
      state.products = action.payload
    })
    builder.addCase(getSingleProduct.fulfilled, (state, action: PayloadAction<Product>) => {
      state.product = action.payload
    })
  },
})

export default productsSlice.reducer
