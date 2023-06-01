import React from "react"
import { cartImages } from "utils/images"
import { CustomButton } from "components/CustomButton"
import { Link } from "react-router-dom"
import { PATHS } from "utils/paths"

export const CartEmpty = () => {
  return (
    <section className="cart-empty">
      <h1 className="cart-empty__title">Your cart is empty😕</h1>
      <p className="cart-empty__description">
        Most likely, you have not ordered any products yet. To order products, go to the main page.
      </p>
      <img
        className="cart-empty__image"
        src={cartImages.cartEmpty.src}
        alt={cartImages.cartEmpty.alt}
      />
      <Link to={PATHS.HOME} className="cart-empty__action">
        <CustomButton
          title={"GO TO MAIN PAGE"}
          onClick={() => null}
          size={"-large"}
          color={"-grey"}
          icon={["fas", "house"]}
        />
      </Link>
    </section>
  )
}
