import React from "react"
import { CustomButton } from "components/CustomButton"
import { Link } from "react-router-dom"
import { PATHS } from "utils/paths"
import { getOldPriceHelper, getPercentHelper } from "utils/productHelpers"
import { useAppDispatch, useAppSelector } from "features/store"
import { addItem, selectCartItems } from "features/cart"
import { CartItemType } from "types/cart-types"

type Props = {
  title: string
  thumbnail?: string
  price: number
  category: string
  discountPercentage: number
  id: number
  description: string
}
export const ProductCard = ({
  title,
  discountPercentage,
  thumbnail,
  price,
  id,
  description,
}: Props) => {
  const discount = getPercentHelper(discountPercentage)
  const oldPrice = getOldPriceHelper(price, discount)
  const dispatch = useAppDispatch()
  const cartItems: CartItemType[] = useAppSelector(selectCartItems)

  const addToCart = () => {
    const item = {
      id,
      title,
      price,
      thumbnail: thumbnail || "",
      count: 1,
    }
    dispatch(addItem({ item }))
  }

  let isProductInCart = cartItems.some((item) => item.id === id)

  return (
    <div className="product-card">
      {/*-----------------------------Image---------------------------------*/}

      <Link to={`${PATHS.PRODUCT}/${id}`} className="product-card__image">
        <img src={thumbnail} alt="title" />
      </Link>
      {/*-----------------------------Info----------------------------------*/}
      <div className="product-card__info">
        <div className="product-card__info__description">
          <p>{title}</p>
          <Link to={`${PATHS.PRODUCT}/${id}`}>{description}</Link>
        </div>
        {/*---------------------------Price---------------------------------*/}
        <div className="product-card__price">
          <div style={{ display: "flex" }}>
            <span className="product-card__price__discount">-{discount}%</span>
            <span className="product-card__price__old">${oldPrice}</span>
          </div>
          <p className="product-card__price__curr">${price}</p>
        </div>
      </div>
      {/*----------------------------Actions---------------------------------*/}
      <div className="product-card__actions">
        {isProductInCart ? (
          <Link to={PATHS.CART}>
            <CustomButton
              title="In cart"
              onClick={() => null}
              size="-small"
              color="-green"
              purpose="-cart"
              icon={["fas", "cart-arrow-down"]}
            />
          </Link>
        ) : (
          <CustomButton
            title="Add to card"
            onClick={addToCart}
            size="-small"
            color="-base-color"
            icon={["fas", "cart-plus"]}
            purpose="-cart"
          />
        )}
      </div>
    </div>
  )
}
