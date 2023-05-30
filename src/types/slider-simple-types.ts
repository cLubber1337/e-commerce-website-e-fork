import { ReactNode } from "react"

export type SliderSimplePropsType = {
  alt?: string
  arrows?: boolean
  className?: string
  dots?: boolean
  fade?: boolean
  height?: string
  width?: string
  images?: string[]
  infinite?: boolean
  nextArrow?: ReactNode
  prevArrow?: ReactNode
  slidesToScroll?: number
  slidesToShow?: number
  swipeToSlide?: boolean
  speed?: number
  autoplay?: boolean
  autoplaySpeed?: number
}
