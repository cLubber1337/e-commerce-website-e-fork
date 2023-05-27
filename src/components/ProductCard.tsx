import React from "react"
import { CustomButton } from "components/CustomButton"
import { Link } from "react-router-dom"
import { PATHS } from "utils/paths"
import { getCategoryNameHelper, getOldPriceHelper, getPercentHelper } from "utils/productHelpers"
import { useAppDispatch, useAppSelector } from "features/store"
import { addItem, selectCartItems } from "features/cart"
import { CartItemType } from "types/cart-types"

type Props = {
  title: string
  thumbnail?: string
  price: number
  brand: string
  category: string
  discountPercentage: number
  id: number
}
export const ProductCard = ({
  title,
  category,
  brand,
  discountPercentage,
  thumbnail,
  price,
  id,
}: Props) => {
  const discount = getPercentHelper(discountPercentage)
  const oldPrice = getOldPriceHelper(price, discount)
  const categoryName = getCategoryNameHelper(category)
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
      <div className="product-card__image">
        <Link to={`${PATHS.PRODUCT}/${id}`}>
          <img src={thumbnail} alt="title" />
        </Link>
      </div>
      <div className="product-card__info">
        <div className="product-card__info__category">
          <span className="product-card__info__category__text">{categoryName}</span>
        </div>
        <div className="product-card__info__name">
          <p>{brand}</p>
          <Link to={`${PATHS.PRODUCT}/${id}`}>{title}</Link>
        </div>
        <div className="product-card__price">
          <p className="product-card__price__discount">-{discount}%</p>
          <span className="product-card__price__curr">${price}</span>
          <span className="product-card__price__old">${oldPrice}</span>
        </div>
      </div>
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
