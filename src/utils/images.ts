import fragrances from "../assets/img/main-banner/fragrances.jpg"
import sale from "../assets/img/main-banner/sale.jpg"
import womanBags from "../assets/img/main-banner/womanBags.jpg"
import cartEmpty from "../assets/img/cart/empty-cart.png"
import loader from "../assets/loading/loader.svg"

export const imagesForBanner = [fragrances, sale, womanBags]
export const images = {
  cartEmpty: {
    src: cartEmpty,
    alt: "Empty cart",
  },
  loading: {
    src: loader,
    alt: "loading",
  },
}
