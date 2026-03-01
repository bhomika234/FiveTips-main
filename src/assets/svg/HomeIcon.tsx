import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function HomeIcon(props: any) {
  return (
    <Svg
      width={25}
      height={26}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M1.3 14.907c0-6.57.716-6.111 4.572-9.687 1.687-1.358 4.312-3.978 6.579-3.978 2.265 0 4.943 2.607 6.645 3.978 3.856 3.576 4.571 3.117 4.571 9.687 0 9.668-2.285 9.668-11.184 9.668-8.898 0-11.183 0-11.183-9.668z"
        stroke="url(#paint0_linear_59_1661)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.876 17.233l.1.01a.5.5 0 010 .98l-.1.01H9.092a.5.5 0 010-1h6.784z"
        stroke="url(#paint1_linear_59_1661)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_59_1661"
          x1={4.65099}
          y1={4.73771}
          x2={22.4979}
          y2={21.8457}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={props.color} />
          <Stop offset={1} stopColor={props.color} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_59_1661"
          x1={10.1082}
          y1={17.3246}
          x2={10.4066}
          y2={19.0596}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={props.color} />
          <Stop offset={1} stopColor={props.color} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default HomeIcon;
