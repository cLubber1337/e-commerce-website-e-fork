import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons/faSquarePlus"
import { faSquareMinus } from "@fortawesome/free-regular-svg-icons/faSquareMinus"
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
import { useAppDispatch } from "features/store"
import { decQty, incQty, removeItem } from "features/cart"
import { Link } from "react-router-dom"
import { PATHS } from "utils/paths"

type Props = {
  title: string
  price: number
  thumbnail: string
  count: number
  id: number
}

export const CartItem = ({ title, price, thumbnail, count, id }: Props) => {
  const dispatch = useAppDispatch()
  const handleRemoveItem = () => {
    dispatch(removeItem({ id }))
  }
  const handleIncQty = () => {
    dispatch(incQty({ id }))
  }
  const handleDecQty = () => {
    dispatch(decQty({ id }))
  }

  return (
    <div className="cart-product">
      <div className="cart-product__img">
        <Link to={`${PATHS.PRODUCT}/${id}`}>
          <img src={thumbnail} alt="thumbnail" />
        </Link>
      </div>
      <div className="cart-product__title">
        <Link to={`${PATHS.PRODUCT}/${id}`}>{title}</Link>
      </div>
      <div className="cart-product__unit-price">${price}</div>

      {/* ---------------------------quantity--------------------------- */}

      <div className="cart-product__quantity">
        <FontAwesomeIcon
          icon={faSquareMinus}
          onClick={handleDecQty}
          className="cart-product__quantity__icon"
        />
        <span>{count}</span>
        <FontAwesomeIcon
          icon={faSquarePlus}
          onClick={handleIncQty}
          className="cart-product__quantity__icon"
        />
      </div>
      <div className="cart-product__total-price">
        <span>${price * count}</span>
      </div>
      <div className="cart-product__delete">
        <FontAwesomeIcon icon={faXmark} onClick={handleRemoveItem} />
      </div>
    </div>
  )
}
