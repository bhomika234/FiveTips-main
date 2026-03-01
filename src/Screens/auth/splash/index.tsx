import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { Screen, Text } from "../../../Components";
import { AppStackScreenProps } from "../../../utils/interfaces";
import { colors, spacing } from "../../../theme";
import { Images } from "../../../assets/Images";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SplashScreenProps extends AppStackScreenProps<"ForgotPassword"> {}

export function Splash(props: SplashScreenProps) {
  useEffect(() => {
    const initializeApp = async () => {
      try {
        setTimeout(async () => {
          props.navigation.replace("GettingStart");
          await AsyncStorage.setItem("hasLaunched", "true");
        }, 2000);
      } catch (error) {
        console.error("Error initializing app:", error);
      }
    };

    initializeApp();

    return () => {
      // Cleanup if needed
    };
  }, [props.navigation]);
  return (
    <>
      <Screen
        preset="fixed"
        contentContainerStyle={styles.screenContentContainer}
        statusBarStyle="dark"
      >
        <LinearGradient colors={["#01B98F", "#019B77"]} style={styles._bg}>
          <Image source={Images.headerlogo2} style={styles.splashLogo} />
          <Text
            text="Smart Stock Tips. Simple Decisions"
            style={styles._subtitle}
            weight="semiBold"
          />
        </LinearGradient>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screenContentContainer: {
    flex: 1,
  },
  _bg: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  splashLogo: {
    height: 150,
    width: 250,
    resizeMode: "contain",
    marginBottom: spacing.sm,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  _title: {
    color: colors.white,
    fontSize: 40,
    lineHeight: 55,
  },
  _subtitle: {
    color: colors.white,
    fontSize: 25,
    lineHeight: 25,
    textAlign: "center",
    marginVertical: spacing.md,
  },
});
