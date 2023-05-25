import React, { useEffect } from "react"
import { getSingleProduct, selectSingleProduct } from "features/products"
import { useAppDispatch, useAppSelector } from "features/store"
import { CustomButton } from "components/CustomButton"
import { CartProduct } from "components/Cart/CartProduct"

export const Cart = () => {
  const dispatch = useAppDispatch()
  const { title, price, thumbnail } = useAppSelector(selectSingleProduct)
  useEffect(() => {
    dispatch(getSingleProduct(18))
  }, [dispatch])

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
        {[1, 2, 3].map((product) => (
          <CartProduct key={product} title={title} price={price} thumbnail={thumbnail} />
        ))}
      </div>

      <footer className="cart-footer">
        <div className="cart-footer__count">3 items</div>
        <div className="cart-footer__total">
          Total: <span>$500</span>
        </div>
      </footer>

      <div className="section-cart__actions">
        <div className="section-cart__actions__clear">
          <CustomButton
            title="CLEAR CART"
            onClick={() => {}}
            size="-large"
            color="-grey"
            icon={["fas", "trash"]}
          />
        </div>
        <div className="section-cart__actions__checkout">
          <CustomButton title="CHECKOUT" onClick={() => {}} size="-large" color="-green" />
        </div>
      </div>
    </section>
  )
}
