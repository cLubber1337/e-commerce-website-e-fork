import { configureStore } from "@reduxjs/toolkit"
import categories from "features/categories/categoriesSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import products from "features/products/productsSlice"
import cart from "features/cart/cartSlice"

export const store = configureStore({
  reducer: { categories, products, cart },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
