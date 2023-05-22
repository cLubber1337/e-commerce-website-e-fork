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

  return (
    <div className={"product"}>
      <Link to={""}>
        <img className={"product__image"} src={thumbnail} alt="title" />
      </Link>
      <div className="product__info">
        <div className="product__info__category">
          <span className="product__info__category__text">{category}</span>
        </div>
        <div className="product__info__name">
          <p>{brand}</p>
          <Link to="">{title}</Link>
        </div>
        <div className="product__price">
          <p className="product__price__percent">-{percent}%</p>
          <span className="product__price__curr">${currentPrice}</span>
          <span className="product__price__old">${price}</span>
        </div>

        <div className="product_actions">
          <CustomButton
            title={"Add to card"}
            onClick={() => null}
            size={"-medium"}
            color={"-green"}
            purpose={"-cart"}
          />
        </div>
      </div>
    </div>
  )
}
