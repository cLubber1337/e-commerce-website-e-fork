import { RootState } from "features/store"

export const selectTotalCountItemsCart = (state: RootState) => state.cart.totalCountItems
export const selectTotalPriceCart = (state: RootState) => state.cart.totalPrice
export const selectCartItems = (state: RootState) => state.cart.items
