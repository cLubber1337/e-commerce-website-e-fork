import React, { CSSProperties, MouseEventHandler, useEffect, useRef } from "react"
import { SliderArrowEnum } from "components/SimpleSlider/SliderArrow/enums"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

type Props = {
  backgroundColor?: string
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  opacity?: number
  style?: CSSProperties
  styles?: CSSProperties
  type?: SliderArrowEnum
}

export const SliderArrow = ({
  backgroundColor = "#e8e8e8",
  className,
  styles,
  style,
  onClick,
  opacity = 1,
  type,
}: Props) => {
  const arrowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.style.setProperty("--slider-arrow-backgroundColor", backgroundColor)
      arrowRef.current.style.setProperty("--slider-arrow-opacity", opacity.toString())
    }
  }, [backgroundColor, opacity])

  return (
    <div
      className={clsx("slider-arrow", className)}
      onClick={onClick}
      style={{ ...style, ...styles }}
      ref={arrowRef}
    >
      <div
        className={clsx("slider-arrow__button", {
          "slider-arrow__button__left": type === SliderArrowEnum.previous,
          "slider-arrow__button__right": type === SliderArrowEnum.next,
        })}
      >
        <FontAwesomeIcon
          className="slider-arrow-custom"
          icon={type === SliderArrowEnum.next ? faArrowRight : faArrowLeft}
        />
      </div>
    </div>
  )
}
