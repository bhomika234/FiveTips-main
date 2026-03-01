import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Text, Screen } from "../../Components";
import { AppStackScreenProps } from "../../utils/interfaces";
import { colors, spacing } from "../../theme";
import { UserContext } from "../../context/UserContext";
import { LinearGradient } from "expo-linear-gradient";
import { WithLocalSvg } from "react-native-svg/css";
import { Images } from "../../assets/Images";
import StockCard from "../../Components/StockCard";
// import { LinearGradient } from "react-native-svg";
export function Home(props: AppStackScreenProps<"Home">) {
  const { user } = React.useContext(UserContext);

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={styles.screenContentContainer}
    >
      <LinearGradient
        colors={["#01B98F", "#019B77"]}
        style={styles._topsection}
        start={{ x: 3, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles._header}>
          {/* Left spacer to balance the Premium button and allow true center for logo */}
          <View style={styles._headerSpacer} />
          <View style={styles.logoview}>
            <Image
              source={Images.headerlogo2}
              // Slightly larger logo for better visibility
              style={{ height: 110, width: 190, resizeMode: "contain" }}
            />
          </View>
          <LinearGradient
            colors={["#FACC15", "#FFE580"]}
            start={[1, 1]}
            end={[2, 0]}
            style={{ borderRadius: 9 }}
          >
            <TouchableOpacity
              style={styles._premiumbtn}
              activeOpacity={0.6}
              onPress={() => props.navigation.navigate("Subscription")}
            >
              <WithLocalSvg asset={Images.premiumicon} />
              <Text text="Premium" weight="bold" style={styles._premiumtext} />
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles._todaysection}>
          <Text
            text="Today's Stock Tips"
            weight="bold"
            style={styles._todaytitle}
          />
          <Text
            weight="bold"
            // replace iwth today date in format
            text={new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            style={styles._date}
          />
        </View>
      </LinearGradient>
      <View style={styles._bodysection}></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContentContainer: {
    flex: 1,
  },
  _topsection: {
    paddingHorizontal: spacing.sm,
    // Increased top padding & height so centered larger logo clears status/dynamic island
    paddingTop: 60,
    height: 240,
  },
  _bodysection: {
    flex: 2,
    paddingHorizontal: spacing.md,
    padding: spacing.md,
    borderTopLeftRadius: 20,
    marginTop: -20,
    backgroundColor: colors.white,
  },
  _header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  _headertitle: {
    color: colors.white,
    fontSize: 28,
    lineHeight: 30,
  },
  logoview: {
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: "center",
    gap: 10,
  },
  _headerSpacer: {
    width: 90, // matches premium button width so logo stays centered
  },
  _premiumbtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 8,
    padding: 4,
    height: 32,
    width: 90,
    overflow: "hidden",
  },
  _premiumtext: {
    fontSize: 13,
  },
  _todaysection: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
  },
  _todaytitle: {
    fontSize: 20,
    lineHeight: 24,
    color: colors.white,
  },
  _date: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.white,
    opacity: 0.9,
  },
  _body_header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // marginBottom: 10,
  },
  tipstitle: {
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.xl,
  },
  loadingText: {
    marginTop: spacing.sm,
    color: colors.text,
    fontSize: 16,
  },
});
