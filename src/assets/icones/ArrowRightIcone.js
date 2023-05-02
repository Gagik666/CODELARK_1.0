import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const ArrowRightIcone = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="-4.5 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 000-2.827l-8.625-8.325a1.063 1.063 0 00-1.454-.01.976.976 0 00-.011 1.425l7.894 7.617a.975.975 0 010 1.414l-7.831 7.557a.974.974 0 000 1.413"
        transform="translate(-305 -6679) translate(56 160)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  )
}