import React from "react";
import { View, TextInput, ViewStyle, TextStyle, Image } from "react-native";
import { Text, Button, Screen } from "../Components";
import { colors, spacing } from "../theme";

export const LogoScreen = () => {
  return (
    <Screen preset="fixed" contentContainerStyle={$container}>
      <View style={$logoContainer}>
        <View style={$logoCircle}>
          <Image
            source={require("../assets/Images/logo_2.png")}
            style={{ width: 160, height: 30 }}
          />
        </View>
        <Text style={$brandName}>myhomesng.com</Text>
      </View>
    </Screen>
  );
};

const $container: ViewStyle = {
  padding: spacing.lg,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor:"#292766"
};
const $logoContainer: ViewStyle = {
  alignItems: "center",
  marginTop: spacing.xl,
};
const $logoCircle: ViewStyle = {
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",
};
const $logoText: TextStyle = {
  color: "white",
  fontSize: 24,
  fontWeight: "bold",
};
const $brandName: TextStyle = {
  marginTop: 10,
  fontWeight: "600",
  color: "#FFFFFF",
};
const $headerSection: ViewStyle = { marginTop: 30, alignItems: "center" };
const $loginTitle: TextStyle = { fontSize: 22, fontWeight: "bold" };
const $subtitle: TextStyle = { color: colors.palette.neutral500 };
const $form: ViewStyle = { marginTop: 20 };
const $input: TextStyle = {
  height: 55,
  borderWidth: 1,
  borderColor: "#E0E0E0",
  borderRadius: 8,
  paddingHorizontal: 15,
  marginBottom: 15,
  color: "#000",
};
const $loginBtn: ViewStyle = {
  backgroundColor: "#1A1C3D",
  borderRadius: 8,
  minHeight: 55,
};
