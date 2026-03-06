import React from "react";
import { View, TextInput, ViewStyle, TextStyle } from "react-native";
import { Text, Button, Screen } from "../../../Components";
import { colors, spacing } from "../../../theme";

export const ProfileScreen = () => {
  return (
    <Screen preset="scroll" contentContainerStyle={$container}>
      <View style={$logoContainer}>
        <View style={$logoCircle}>
          <Text style={$logoText}>M</Text>
        </View>
        <Text style={$brandName}>myhomesng.com</Text>
      </View>

      <View style={$headerSection}>
        <Text style={$loginTitle}>wow its working</Text>
        <Text style={$loginTitle}>Login To Your Account</Text>
        <Text style={$loginTitle}>Login To Your Account</Text>
        <Text style={$loginTitle}>Login To Your Account</Text>
        <Text style={$loginTitle}>Login To Your Account</Text>

        <Text style={$subtitle}>Don't have an account? Sign up</Text>
      </View>

      <View style={$form}>
        <TextInput placeholder="Enter your email address" style={$input} placeholderTextColor={colors.palette.neutral400} />
        <TextInput placeholder="Enter strong password" style={$input} secureTextEntry placeholderTextColor={colors.palette.neutral400} />
        <Button text="Login" preset="reversed" style={$loginBtn} />
      </View>
    </Screen>
  );
};


const $container: ViewStyle = { padding: spacing.lg };
const $logoContainer: ViewStyle = { alignItems: "center", marginTop: spacing.xl };
const $logoCircle: ViewStyle = { height: 60, width: 60, borderRadius: 30, backgroundColor: "#1A1C3D", justifyContent: "center", alignItems: "center" };
const $logoText: TextStyle = { color: "white", fontSize: 24, fontWeight: "bold" };
const $brandName: TextStyle = { marginTop: 10, fontWeight: "600", color: "#1A1C3D" };
const $headerSection: ViewStyle = { marginTop: 30, alignItems: "center" };
const $loginTitle: TextStyle = { fontSize: 22, fontWeight: "bold" };
const $subtitle: TextStyle = { color: colors.palette.neutral500 };
const $form: ViewStyle = { marginTop: 20 };
const $input: TextStyle = { height: 55, borderWidth: 1, borderColor: "#E0E0E0", borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, color: "#000" };
const $loginBtn: ViewStyle = { backgroundColor: "#1A1C3D", borderRadius: 8, minHeight: 55 };