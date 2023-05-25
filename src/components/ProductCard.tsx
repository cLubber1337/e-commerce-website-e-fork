import React from "react"
import { CustomButton } from "components/CustomButton"
import { Link } from "react-router-dom"

type Props = {
  title: string
  thumbnail?: string
  price: number
  brand: string
  category: string
  discountPercentage: number
}
export const ProductCard = ({
  title,
  category,
  brand,
  discountPercentage,
  thumbnail,
  price,
}: Props) => {
  const percent = Math.ceil(discountPercentage)
  const currentPrice = Math.ceil((price * (100 - percent)) / 100)
  const categoryTitle = category[0].toUpperCase() + category.slice(1)

  return (
    <div className="product-card">
      <div className="product-card__image">
        <Link to={""}>
          <img src={thumbnail} alt="title" />
        </Link>
      </div>
      <div className="product-card__info">
        <div className="product-card__info__category">
          <span className="product-card__info__category__text">{categoryTitle}</span>
        </div>
        <div className="product-card__info__name">
          <p>{brand}</p>
          <Link to="">{title}</Link>
        </div>
        <div className="product-card__price">
          <p className="product-card__price__percent">-{percent}%</p>
          <span className="product-card__price__curr">${currentPrice}</span>
          <span className="product-card__price__old">${price}</span>
        </div>
      </div>
      <div className="product-card__actions">
        <CustomButton
          title="Add to card"
          onClick={() => null}
          size="-small"
          color="-green"
          icon={["fas", "cart-plus"]}
          purpose="-cart"
        />
      </div>
    </div>
  )
}
