// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#FAFAFA",
  neutral300: "#D7CEC9",
  neutral400: "#EEEEEE",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary: "#037FFE",
  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",
  grey100: "#9E9E9E",
  grey200: "#EEEEEE",
  grey300: "#B8B9C0",
  grey700: "#616161",
  grey: "#8C949F",
  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,

  diabled: "#D4D4D4",
  gradient: ["#01B98F", "#019B77"],
  primary: "#01B98F",
  secnodary: "#6DC8C2",
  black: "#212121",
  fill: "#FAFAFA",
  white: "#FFFFFF",
  greylight: "#8C949F",
  grey: "#9E9E9E",
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: "rgba(12, 34, 45, 1)",
  /**
   * The default border color.
   */
  border: "#F0F0F0",
  /**
   * The main tinting color.
   */
  tint: palette.primary,
  /**
   * A subtle color used for lines.
   */
  separator: "#28323C",
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
};
