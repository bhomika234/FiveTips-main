import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HistoryIcon(props: any) {
  return (
    <Svg
      width={23}
      height={24}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.5.648A11.261 11.261 0 11.24 11.908a.847.847 0 011.693 0 9.556 9.556 0 102.774-6.716l-.12.12.165.046c.035.01.07.017.106.022l.008.001h2.847a.848.848 0 010 1.694h-2.84a2.74 2.74 0 01-2.74-2.74v-2.84a.848.848 0 011.693 0v2.187l.167-.15A11.234 11.234 0 0110.981.66L11.5.648z"
        fill={props.color}
        stroke="#fff"
        strokeWidth={0.2}
      />
    </Svg>
  )
}

export default HistoryIcon
