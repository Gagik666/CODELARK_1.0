import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const MobileDevIcone = (props) => {
  return (
    <Svg
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <Path
        className="st0"
        d="M19 23v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2"
      />
      <Path className="st0" d="M5 7L19 7" />
      <Path className="st0" d="M5 23L19 23" />
      <Path className="st0" d="M11 26L13 26" />
      <Path className="st0" d="M14 12L11 15 14 18" />
      <Path className="st0" d="M24 12L27 15 24 18" />
      <Path className="st0" d="M21 11L17 19" />
    </Svg>
  )
}