import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons/faSquarePlus"
import { faSquareMinus } from "@fortawesome/free-regular-svg-icons/faSquareMinus"
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"

type Props = {
  title: string
  price: number
  thumbnail: string
}

export const CartProduct = ({ title, price, thumbnail }: Props) => {
  return (
    <div className="cart-product">
      <div className="cart-product__img">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="cart-product__title">{title}</div>
      <div className="cart-product__unit-price">${price}</div>
      <div className="cart-product__quantity">
        <FontAwesomeIcon icon={faSquarePlus} className="cart-product__quantity__icon" />
        <span>1</span>
        <FontAwesomeIcon icon={faSquareMinus} className="cart-product__quantity__icon" />
      </div>
      <div className="cart-product__total-price">
        <span>${price * 2}</span>
      </div>
      <div className="cart-product__delete">
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  )
}
