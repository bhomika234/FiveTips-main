import { Platform ,Dimensions} from "react-native";

export const timing = {
  /**
   * The duration (ms) for quick animations.
   */
  quick: 300,
};

export const adjustSize = (size: number) => {
  // Get the device's screen width
  const screenWidth = Dimensions.get("window").width;

  // Calculate the adjusted size
  const adjustedSize = (size * screenWidth) / baseScreenWidth;

  return adjustedSize;
};

export const defaultShadow = () => {
  return generateBoxShadowStyle(-2, 8, "#00000029", 20, 3, 5, "#171717");
};

export const generateBoxShadowStyle = (
  xOffset: number,
  yOffset: number,
  shadowColorIos: string,
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number,
  shadowColorAndroid: string
) => {
  if (Platform.OS === "ios") {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
      elevation,
    };
  } else if (Platform.OS === "android") {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};
