import { combineReducers, configureStore } from "@reduxjs/toolkit"
import categories from "features/categories/categoriesSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import products from "features/products/productsSlice"
import cart from "features/cart/cartSlice"
import search from "features/search/searchSlice"
import filter from "features/filter/filterSlice"
import app from "features/app/appSlice"
import storage from "redux-persist/lib/storage"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

const rootReducer = combineReducers({
  categories,
  products,
  cart,
  search,
  filter,
  app,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
