import React, { useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Button, Screen, Text } from "../../Components";
import { AppStackScreenProps } from "../../utils/interfaces";
import { colors, spacing } from "../../theme";
import { WithLocalSvg } from "react-native-svg/css";
import { Images } from "../../assets/Images";

import Entypo from "@expo/vector-icons/Entypo";
interface SubscriptionProps extends AppStackScreenProps<"ForgotPassword"> {}

export function Subscription(props: SubscriptionProps) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Screen
        preset="fixed"
        contentContainerStyle={styles.screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <View style={styles._body}>
          <WithLocalSvg
            asset={Images.lock}
            style={{ alignSelf: "center", marginTop: 50 }}
          />
          <Text
            text="Subscription Required"
            weight="bold"
            style={styles._title}
          />
          <Text
            weight="medium"
            text="Please activate your subscription to continue accessing stock tips."
            style={styles._subtitle}
          />

          <View style={styles._subscriptioncard}>
            <WithLocalSvg
              asset={Images.historypremium}
              width={50}
              height={45}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                paddingTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textDecorationLine: "line-through",
                  color: colors.grey,
                }}
                weight="semiBold"
              >
                $29.99
              </Text>
              <Text style={{ fontSize: 22 }} weight="bold">
                $9.99
                <Text
                  text=" /month"
                  style={{
                    fontSize: 14,
                    paddingBottom: 15,
                    color: colors.grey,
                  }}
                  weight="semiBold"
                />
              </Text>
            </View>

            <View style={styles._row}>
              <Entypo name="check" size={24} color={colors.primary} />
              <Text
                weight="bold"
                text="AI-powered stock tips daily"
                style={styles.list_text}
              />
            </View>
            <View style={styles._row}>
              <Entypo name="check" size={24} color={colors.primary} />
              <Text
                weight="bold"
                text="Tips delivered before market opens"
                style={styles.list_text}
              />
            </View>
            <View style={styles._row}>
              <Entypo name="check" size={24} color={colors.primary} />
              <Text
                weight="bold"
                text="Confidence scores + rationale"
                style={styles.list_text}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 50 }}>
          <Button
            testID="forgot-button"
            text="Subscribe Now"
            style={[styles.tapButton]}
            gradient
            textStyle={{
              color: colors.white,
              fontFamily: "bold",
            }}
            RightAccessory={() =>
              loading ? (
                <ActivityIndicator
                  style={{ position: "absolute", right: 20 }}
                  color={colors.white}
                />
              ) : null
            }
          />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screenContentContainer: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  _subscriptioncard: {
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    borderWidth: 2,
    borderColor: colors.primary,
  },

  _row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    marginVertical: 4,
  },
  list_text: {
    fontSize: 16,
  },
  _title: {
    fontSize: 16,
    paddingVertical: 10,
    textAlign: "center",
  },

  _subtitle: {
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  _body: {
    flex: 1,
  },
  tapButton: {
    marginBottom: "15%",
  },
});
