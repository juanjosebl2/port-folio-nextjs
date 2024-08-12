"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { WorkSliderButtonProps } from "./WorkSliderButton.types"

export function WorkSliderButton( props : WorkSliderButtonProps) {
  const swiper = useSwiper()
  const { constainerStyles, btnStyles, iconsStyles } = props
  return (
    <div className={constainerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  )
}
