import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "features/store"
import { getSingleProduct, selectSingleProduct } from "features/products"
import { CustomButton } from "components/CustomButton"

const ProductInfoCard = () => {
  const dispatch = useAppDispatch()
  const { title, description, thumbnail, rating, category, price, discountPercentage, brand } =
    useAppSelector(selectSingleProduct)
  const percent = Math.ceil(discountPercentage)
  const currentPrice = Math.ceil((price * (100 - percent)) / 100)

  useEffect(() => {
    dispatch(getSingleProduct(7))
  }, [dispatch])

  return (
    <section className="product-info-section">
      <div className="product-info-section__grid">
        {/*---------------IMAGES-------------------*/}
        <div className="product-info__images">
          <img src={thumbnail} alt={thumbnail} />
        </div>
        {/*---------------DESCRIPTION-------------------*/}
        <div className="product-info">
          <h1 className="product-info__title">{title}</h1>
          <p className="product-info__description">{description}</p>
          <div className={"product-info__rbc"}>
            <span className="product-info__rbc__item">
              <span>Rating</span>: {rating}
            </span>

            <span className="product-info__rbc__item">
              <span>Brand</span>: {brand}
            </span>

            <span className="product-info__rbc__item">
              <span>Category</span>: {category}
            </span>
          </div>
          {/*----------------PRICE-------------------*/}
          <div className="product-info__price">
            <span className={"product-info__price__old"}>${price}</span>
            <p>
              <span className="product-info__price__new">${currentPrice} </span>
              <span className="product-info__price__discount">-{percent}%</span>
            </p>
          </div>
          {/*----------------QUANTITY-------------------*/}
          <div className="product-info__quantity">
            <span className="product-info__quantity__label">Quantity:</span>
            <button className="product-info__quantity__btn">-</button>
            <span className="product-info__quantity__qty">1</span>
            <button className="product-info__quantity__btn">+</button>
          </div>
          {/*----------------ACTIONS-------------------*/}
          <div className="product-info__actions">
            <CustomButton
              title="Add to cart"
              onClick={() => null}
              size="-large"
              color="-grey"
              icon={["fas", "cart-plus"]}
            ></CustomButton>
            <CustomButton
              title="Buy now"
              onClick={() => null}
              size="-large"
              color="-green"
            ></CustomButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfoCard
