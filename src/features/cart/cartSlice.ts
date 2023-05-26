import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItemType, CartStateType } from "types/cart-types"
import { updateTotals } from "utils/cartUtils"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalCountItems: 0,
    totalPrice: 0,
    items: [],
  } as CartStateType,
  reducers: {
    addItem: (state, action: PayloadAction<{ item: CartItemType }>) => {
      let currentItem = state.items.find((item) => item.id === action.payload.item.id)
      if (currentItem) {
        currentItem.count++
      } else {
        state.items.push(action.payload.item)
      }
      updateTotals(state)
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
      updateTotals(state)
    },
    incQty: (state, action: PayloadAction<{ id: number }>) => {
      let currentItem = state.items.filter((item) => item.id === action.payload.id)
      currentItem.map((item) => item.count++)
      updateTotals(state)
    },
    decQty: (state, action: PayloadAction<{ id: number }>) => {
      let currentItem = state.items.filter((item) => item.id === action.payload.id)
      currentItem.map((item) => {
        if (item.count > 1) {
          item.count--
        }
        return item
      })
      updateTotals(state)
    },

    clearItems: (state) => {
      state.items = []
      updateTotals(state)
    },
  },
})

export const { addItem, removeItem, clearItems, incQty, decQty } = cartSlice.actions
export default cartSlice.reducer
