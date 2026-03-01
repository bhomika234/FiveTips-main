import { StyleSheet, Dimensions, Platform } from "react-native";
const baseScreenWidth = 320;

export const adjustSize = (size: number) => {
  // Get the device's screen width
  const screenWidth = Dimensions.get("window").width;

  // Calculate the adjusted size
  const adjustedSize = (size * screenWidth) / baseScreenWidth;

  return adjustedSize;
};
