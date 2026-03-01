import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Text, Screen } from "../../Components";
import { AppStackScreenProps } from "../../utils/interfaces";
import { colors, spacing } from "../../theme";
import { UserContext } from "../../context/UserContext";
import { LinearGradient } from "expo-linear-gradient";
import { WithLocalSvg } from "react-native-svg/css";
import { Images } from "../../assets/Images";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export function Profile(props: AppStackScreenProps<"Profile">) {
  const { user, logout } = React.useContext(UserContext);

  const listOptions = [
    {
      id: 0,
      title: "Subscription",
      icon: Images.subscription,
      onPress: () => props.navigation.navigate("Subscription"),
    },
    {
      id: 1,
      title: "Terms & Conditions",
      icon: Images.terms,
      onPress: () => props.navigation.navigate("TermsConditions"),
    },
    {
      id: 2,
      title: "Privacy Policy",
      icon: Images.privacy,
      onPress: () => props.navigation.navigate("PrivacyPolicy"),
    },

    // {
    //   id: 3,
    //   title: "Contact Support",
    //   icon: Images.contact,
    //   onPress: () => props.navigation.navigate("ContactSupport"),
    // },
    {
      id: 4,
      title: "Logout",
      icon: Images.logout,
      onPress: () => {
        logout();
      },
    },
  ];

  // Format member since date (Month YYYY)
  const memberSince = React.useMemo(() => {
    const created = user?.created_at;
    if (!created) return null;
    const date = new Date(created);
    if (isNaN(date.getTime())) return null;
    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  }, [user?.created_at]);

  return (
    <Screen preset="auto" contentContainerStyle={styles.screenContentContainer}>
      <LinearGradient
        colors={["#01B98F", "#019B77"]}
        style={styles._topsection}
        start={{ x: 3, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles._header}>
          <View style={styles.logoview}>
            <Text text="Profile" weight="bold" style={styles._headertitle} />
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
          <View style={styles._logoContainer}>
            <Image
              source={Images.headerlogo2}
              style={styles._headerLogo}
              resizeMode="contain"
            />
          </View>
          <View style={styles._userInfoSection}>
            <Text text={user?.email} weight="bold" style={styles._userEmail} />
            {memberSince && (
              <Text
                text={`Member Since: ${memberSince}`}
                weight="medium"
                style={styles._memberSince}
              />
            )}
          </View>
        </View>

        {/* <View style={styles._card}>
          <View style={styles._col}>
            <Text text="200" weight="bold" style={styles.price} />
            <Text text="Tips Received" weight="bold" style={styles._received} />
          </View>
          <View style={styles._col}>
            <Text text="98%" weight="bold" style={styles.price} />
            <Text text="Win Rate" weight="bold" style={styles._received} />
          </View>
        </View> */}
      </LinearGradient>
      <View style={styles._bodysection}>
        <FlatList
          scrollEnabled={false}
          data={listOptions}
          contentContainerStyle={{
            gap: 15,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles._listitem]}
              activeOpacity={0.7}
              onPress={() => item.onPress()}
            >
              <View
                style={[
                  styles._iconview,
                  {
                    backgroundColor:
                      item.title === "Logout"
                        ? "rgba(255, 90, 95,0.15)"
                        : "#E9F5F2",
                  },
                ]}
              >
                <WithLocalSvg asset={item.icon} />
              </View>
              <Text
                text={item.title}
                weight="bold"
                style={[
                  styles._listtext,
                  {
                    color: item.title === "Logout" ? "#FF6F79" : "#212121",
                  },
                ]}
              />
              {item.title !== "Logout" && (
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={28}
                  color="212121"
                />
              )}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContentContainer: {
    flex: 1,
  },
  _topsection: {
    paddingHorizontal: spacing.sm,
    paddingTop: 30,
    paddingBottom: 25,
  },
  _bodysection: {
    flex: 1,
    paddingHorizontal: spacing.md,
    padding: spacing.md,
    borderTopLeftRadius: 20,
    marginTop: -20,
    backgroundColor: colors.white,
  },
  _header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _headertitle: {
    color: colors.white,
    lineHeight: 30,
    marginVertical: spacing.xxs,
    fontSize: 20,
    paddingVertical: 10,
  },
  logoview: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  _premiumbtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 9,
    padding: 5,
    height: 39,
    width: 110,
    overflow: "hidden",
  },
  _premiumtext: {
    fontSize: 16,
  },
  _todaysection: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10,
  },
  _logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  _headerLogo: {
    height: 120,
    width: 200,
  },
  _userInfoSection: {
    alignItems: "center",
    gap: 6,
  },
  _userEmail: {
    fontSize: 20,
    lineHeight: 28,
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
  },
  _memberSince: {
    fontSize: 16,
    lineHeight: 22,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  _todaytitle: {
    fontSize: 18,
    lineHeight: 28,
    color: colors.white,
  },

  _card: {
    flexDirection: "row",
    height: 70,
    backgroundColor: colors.fill,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  _col: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    color: colors.primary,
    fontSize: 16,
  },
  _received: {
    color: "#9E9E9E",
    fontSize: 14,
  },
  _listitem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  _listtext: {
    fontSize: 16,
    flex: 1,
  },
  _iconview: {
    height: 48,
    width: 48,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9F5F2",
  },
});
