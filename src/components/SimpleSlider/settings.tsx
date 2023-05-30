import { SliderSimplePropsType } from "types/slider-simple-types"
import { SliderArrow } from "components/SimpleSlider/SliderArrow/SliderArrow"
import { SliderArrowEnum } from "components/SimpleSlider/SliderArrow/enums"

export const SLIDER_SIMPLE_SETTINGS = ({
  arrows = false,
  dots = false,
  fade = false,
  infinite = false,
  nextArrow,
  prevArrow,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1,
  swipeToSlide = false,
  className,
  autoplay = true,
  autoplaySpeed = 3000,
}: SliderSimplePropsType) => {
  return {
    settings: {
      autoplay,
      autoplaySpeed,
      arrows,
      dots,
      className,
      fade,
      infinite,
      slidesToScroll,
      slidesToShow,
      swipeToSlide,
      speed,
      nextArrow: arrows ? (
        <SliderArrow styles={{ right: "5px" }} type={SliderArrowEnum.next} />
      ) : (
        nextArrow
      ),
      prevArrow: arrows ? (
        <SliderArrow styles={{ left: "5px" }} type={SliderArrowEnum.previous} />
      ) : (
        prevArrow
      ),
    },
  }
}
