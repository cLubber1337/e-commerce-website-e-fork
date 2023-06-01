import React from "react"
import { useAppDispatch, useAppSelector } from "features/store"
import { CustomButton } from "components/CustomButton"
import { CartItem } from "components/Cart/CartItem"
import {
  clearItems,
  selectCartItems,
  selectTotalCountItemsCart,
  selectTotalPriceCart,
} from "features/cart"
import { CartItemType } from "types/cart-types"
import { CartEmpty } from "pages/CartEmpty"

export const Cart = () => {
  const cartItems: CartItemType[] = useAppSelector(selectCartItems)
  const totalItemsInCart: number = useAppSelector(selectTotalCountItemsCart)
  const totalPrice = useAppSelector(selectTotalPriceCart)
  const dispatch = useAppDispatch()

  if (!totalItemsInCart) {
    return (
      <div className="section-cart">
        <CartEmpty />
      </div>
    )
  }
  return (
    <section className="section-cart">
      <h1 className="section-cart__title">Shopping Cart</h1>

      <header className="cart-header">
        <div className="cart-header__product">Product</div>
        <div className="cart-header__unit-price">Unit Price</div>
        <div className="cart-header__quantity">Quantity</div>
        <div className="cart-header__total-price">Subtotal</div>
      </header>

      <div className="cart">
        {cartItems && cartItems.map((cartItem) => <CartItem key={cartItem.id} {...cartItem} />)}
      </div>

      <footer className="cart-footer">
        <div className="cart-footer__count">{totalItemsInCart} items</div>
        <div className="cart-footer__total">
          Total: <span>${totalPrice}</span>
        </div>
      </footer>

      <div className="section-cart__actions">
        <div className="section-cart__actions__clear">
          <CustomButton
            title="CLEAR CART"
            onClick={() => dispatch(clearItems())}
            size="-large"
            color="-grey"
            icon={["fas", "trash"]}
          />
        </div>
        <div className="section-cart__actions__checkout">
          <CustomButton title="CHECKOUT" onClick={() => null} size="-large" color="-base-color" />
        </div>
      </div>
    </section>
  )
}
