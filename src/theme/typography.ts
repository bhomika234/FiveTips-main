// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native";

const fonts = {
  poppins: {
    light: "light",
    normal: "normal",
    medium: "medium",
    semiBold: "semiBold",
    bold: "bold",
  },
};

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.poppins,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({
    ios: fonts.poppins,
    android: fonts.poppins,
  }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.poppins, android: fonts.poppins }),
};
