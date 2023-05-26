import { CartStateType } from "types/cart-types"

export const updateTotals = (state: CartStateType) => {
  state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0)
  state.totalCountItems = state.items.reduce((acc, { count }) => acc + count, 0)
}
