import React, { memo } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { SliderSimplePropsType } from "types/slider-simple-types"
import { useMediaQuery } from "react-responsive"
import { SLIDER_SIMPLE_SETTINGS } from "components/SimpleSlider/settings"
import clsx from "clsx"
import { isNil } from "lodash"

export const SliderSimple = memo((props: SliderSimplePropsType) => {
  const { images, alt = "", height, width } = props
  const settings = SLIDER_SIMPLE_SETTINGS(props).settings
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" })

  return (
    <Slider {...settings}>
      {!isNil(images) &&
        images.map((image, index) => (
          <div className="slider-simple__item" key={index}>
            <img
              className={clsx("slider-simple__item__image", {
                "slider-simple__item__image--mobile": isMobileScreen,
              })}
              src={image}
              alt={alt}
              height={height}
              width={width}
            />
          </div>
        ))}
    </Slider>
  )
})
