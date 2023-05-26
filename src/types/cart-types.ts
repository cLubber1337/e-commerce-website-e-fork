export type CartItemType = {
  id: number
  title: string
  price: number
  thumbnail: string
  count: number
}

export type CartStateType = {
  totalCountItems: number
  totalPrice: number
  items: CartItemType[]
}
