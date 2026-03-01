import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Screen, Text } from "../../../Components";
import { AppStackScreenProps } from "../../../utils/interfaces";
import { colors, spacing } from "../../../theme";
import { WithLocalSvg } from "react-native-svg/css";
import { Images } from "../../../assets/Images";
import { LinearGradient } from "expo-linear-gradient";
interface GettingStartScreenProps
  extends AppStackScreenProps<"ForgotPassword"> {}

export function GettingStart(props: GettingStartScreenProps) {
  const list = [
    "Curated by smart algorithms",
    "Updated daily before market opens",
    "High confidence entry points",
  ];

  return (
    <>
      <Screen
        preset="fixed"
        contentContainerStyle={styles.screenContentContainer}
        safeAreaEdges={["top", "bottom"]}
      >
        <View style={styles._logoContainer}>
          <Image source={Images.logo2} style={{ height: 200, width: 253 }} />
        </View>

        <Text
          text={`Daily stock picks.\nBuilt for better ROI.\nReady for you`}
          style={styles._title}
          weight="semiBold"
        />

        <View style={styles._listview}>
          {list.map((item, index) => (
            <View key={index} style={styles._list}>
              {index < 2 && <View style={styles._line} />}
              <LinearGradient
                colors={colors.gradient as any}
                style={styles._numberview}
              >
                <Text
                  text={(index + 1).toString()}
                  style={styles._numbertext}
                  weight="bold"
                />
              </LinearGradient>
              <Text
                key={index}
                text={item}
                style={styles._listitem}
                weight="semiBold"
              />
            </View>
          ))}
        </View>
        <Button
          text="Let's Get Started"
          onPress={() => props.navigation.navigate("Login")}
          gradient={true}
          style={styles._button}
          textStyle={styles.btn_text}
        />
        <View style={styles._footer}>
          <Text
            text="Already have an account?"
            weight="medium"
            style={styles._footerText}
          />
          <Text
            text="Login"
            style={{ color: colors.primary, marginLeft: 5 }}
            onPress={() => props.navigation.navigate("Login")}
            weight="bold"
          />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screenContentContainer: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    flex: 1,
  },

  _title: {
    fontSize: 28,
    lineHeight: 32,
    textAlign: "center",
    marginBottom: spacing.lg,
  },
  _logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
    paddingVertical: spacing.md,
  },
  _listview: {
    flexDirection: "column",
    gap: 15,
    flex: 1,
  },
  _list: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  _listitem: {
    fontSize: 18,
  },
  _numberview: {
    height: 45,
    width: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  _numbertext: {
    color: colors.white,
  },
  _button: {
    marginBottom: 50,
  },
  btn_text: {
    fontFamily: "bold",
    color: colors.white,
  },
  _footer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: spacing.md,
  },
  _footerText: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    color: colors.grey,
  },
  _line: {
    height: 60,
    borderWidth: 1,
    position: "absolute",
    top: 10,
    left: 20,
    borderStyle: "dashed",
    width: 2,
    borderColor: colors.primary,
  },
});
