import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Text, Screen } from "../../Components";
import { AppStackScreenProps } from "../../utils/interfaces";
import { colors, spacing } from "../../theme";
import { UserContext } from "../../context/UserContext";
import { WithLocalSvg } from "react-native-svg/css";
import { Images } from "../../assets/Images";
export function ContactSupport(props: AppStackScreenProps<"ContactSupport">) {
  const { user } = React.useContext(UserContext);
  const listOptions = [
    {
      id: 0,
      title: "Customer Service",
      icon: Images.help,
      onPress: () => props.navigation.navigate("Subscription"),
    },
    {
      id: 1,
      title: "WhatsApp",
      icon: Images.whatsapp,
      onPress: () => props.navigation.navigate("TermsConditions"),
    },
    {
      id: 2,
      title: "Website",
      icon: Images.website,
      onPress: () => props.navigation.navigate("PrivacyPolicy"),
    },

    {
      id: 3,
      title: "Facebook",
      icon: Images.facebook,
      onPress: () => props.navigation.navigate("ContactSupport"),
    },
    {
      id: 4,
      title: "Twitter",
      icon: Images.twitter,
      onPress: () => {},
    },
    {
      id: 5,
      title: "Instagram",
      icon: Images.instagram,
      onPress: () => {},
    },
  ];

  return (
    <Screen preset="auto" contentContainerStyle={styles.screenContentContainer}>
      <View style={styles._bodysection}>
        <FlatList
          scrollEnabled={false}
          data={listOptions}
          contentContainerStyle={{
            gap: 15,
            paddingHorizontal: 5,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles._listitem]}
              activeOpacity={0.7}
              onPress={() => item.onPress()}
            >
              <View style={[styles._iconview]}>
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
    paddingTop: 20,
  },
  _topsection: {
    paddingHorizontal: spacing.sm,
    paddingTop: 50,
    flex: 1,
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
    paddingTop: 40,
  },
  _todaytitle: {
    fontSize: 18,
    lineHeight: 28,
    color: colors.white,
  },
  _date: {
    fontSize: 16,
    lineHeight: 20,
    color: colors.white,
  },
  _body_header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // marginBottom: 10,
  },
  tipstitle: {
    fontSize: 18,
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
    borderWidth: 1,
    height: 72,
    borderRadius: 20,
    borderColor: colors.border,
    padding: 10,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 1,
    backgroundColor: colors.white,
  },
  _listtext: {
    fontSize: 16,
    flex: 1,
  },
  _iconview: {},
});
