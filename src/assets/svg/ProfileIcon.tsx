import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProfileIcon(props: any) {
  return (
    <Svg
      width={18}
      height={25}
      viewBox="0 0 18 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M8.819 24.18c-4.307 0-7.986-.67-7.986-3.354s3.655-5.162 7.986-5.162c4.307 0 7.985 2.454 7.985 5.138 0 2.683-3.655 3.379-7.985 3.379zM8.81 11.944a5.118 5.118 0 10-5.118-5.117 5.1 5.1 0 005.082 5.117h.036z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ProfileIcon
