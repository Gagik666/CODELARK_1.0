import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const CheckIcone = (props) => {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.838 3.283l-12.02 12.02-5.656-5.657-.709.708 6.365 6.363L19.547 3.99l-.71-.707z"
        fill="#0F0"
        fillOpacity={1}
        stroke="none"
        strokeWidth={0}
      />
    </Svg>
  )
}