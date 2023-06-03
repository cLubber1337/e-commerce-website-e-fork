import { configureStore } from "@reduxjs/toolkit"
import categories from "features/categories/categoriesSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import products from "features/products/productsSlice"
import cart from "features/cart/cartSlice"
import search from "features/search/searchSlice"
import filter from "features/filter/filterSlice"

export const store = configureStore({
  reducer: { categories, products, cart, search, filter },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
