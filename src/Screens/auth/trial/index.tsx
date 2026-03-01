import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Screen, Text } from "../../../Components";
import { AppStackScreenProps } from "../../../utils/interfaces";
import { colors, spacing } from "../../../theme";
import { WithLocalSvg } from "react-native-svg/css";
import { Images } from "../../../assets/Images";
import { LinearGradient } from "expo-linear-gradient";
interface TrialProps extends AppStackScreenProps<"Trial"> {}

export function Trial(props: TrialProps) {
  return (
    <>
      <Screen
        preset="fixed"
        contentContainerStyle={styles.screenContentContainer}
        safeAreaEdges={["top", "bottom"]}
      >
        <View style={styles._logoContainer}>
          <Image source={Images.logo2} style={{ height: 150, width: 200 }} />
        </View>

        <Text
          text="Start Your 7-Day Free Trial"
          style={styles._title}
          weight="semiBold"
        />

        <Text
          weight="semiBold"
          text="No Commitment. Cancel anytime.."
          style={styles._subtitle}
        />
        <View style={styles._body}>
          <View style={styles._trialcard}>
            <LinearGradient
              colors={colors.gradient as any}
              style={styles._chip}
            >
              <Text
                text="Start Trial"
                onPress={() => props.navigation.goBack()}
                disabled
                style={styles._chip_text}
              />
            </LinearGradient>
            <Text
              weight="bold"
              text="Start 7-day free Trial"
              style={styles._trialtitle}
            />
            <Text weight="bold" text="$0.00" style={styles._trialprice} />
          </View>
          <View style={styles._divider} />
          <View style={styles._row}>
            <Text
              weight="bold"
              text="Total Due Today"
              style={styles._duetext}
            />
            <Text weight="bold" text="$0.00" style={styles._dueprice} />
          </View>
          <Text weight="semiBold" style={styles._trialtext}>
            7 days free, then billed monthly at
            <Text
              weight="bold"
              text=" 4.99"
              style={{ color: colors.primary }}
            />
            /month
          </Text>
        </View>

        <Button
          text="Proceed"
          onPress={() => {
            props.navigation.navigate("Payment");
          }}
          gradient={true}
          style={styles._button}
          textStyle={styles.btn_text}
        />
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
    fontSize: 25,
    lineHeight: 30,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  _logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
    paddingVertical: spacing.md,
  },

  _button: {
    marginBottom: 50,
  },
  btn_text: {
    fontFamily: "bold",
    color: colors.white,
  },
  _subtitle: {
    textAlign: "center",
    fontSize: 16,
  },
  _body: {
    flex: 1,
  },
  _trialcard: {
    backgroundColor: colors.fill,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    borderRadius: 10,
    shadowColor: colors.border,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.5,
    elevation: 0.5,
    marginTop: 40,
  },
  _chip: {
    height: 31,
    borderRadius: 8,
    width: 102,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
    top: -15,
  },

  _chip_text: {
    fontFamily: "bold",
    color: colors.white,
    fontSize: 12,
  },
  _trialtitle: {
    fontSize: 16,
  },
  _trialprice: {
    fontSize: 14,
  },
  _divider: {
    borderWidth: 1,
    marginTop: spacing.lg,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _duetext: {
    fontSize: 16,
  },
  _dueprice: {
    fontSize: 14,
  },
  _trialtext: {
    fontSize: 12,
    lineHeight: 20,
  },
});
