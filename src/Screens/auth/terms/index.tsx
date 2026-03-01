import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Screen, Text } from "../../../Components";
import { AppStackScreenProps } from "../../../utils/interfaces";
import { colors, spacing } from "../../../theme";
import { WithLocalSvg } from "react-native-svg/css";
import { Images } from "../../../assets/Images";
import { Entypo } from "@expo/vector-icons";

interface TermsScreenProps extends AppStackScreenProps<"Terms"> {}

export function Terms(props: TermsScreenProps) {
  const [selectedItems, setSelectedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const list = [
    "This is not financial advice",
    "Past performance doesn't guarantee results",
    "I understand investment risks",
  ];

  const toggleItem = (index: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Screen
        preset="fixed"
        contentContainerStyle={styles.screenContentContainer}
        safeAreaEdges={["top", "bottom"]}
      >
        <View style={styles._logoContainer}>
          <WithLocalSvg stroke={"#fff"} asset={Images.warning} />
        </View>

        <Text
          text="Please acknowledge the following important disclosures before proceeding. Investment in financial markets carries inherent risks."
          style={styles._title}
          weight="semiBold"
        />

        <View style={styles._listview}>
          {list.map((item, index) => (
            <View key={index} style={styles._list}>
              <TouchableOpacity
                onPress={() => toggleItem(index)}
                style={[
                  styles._checkbox,
                  {
                    backgroundColor: selectedItems[index]
                      ? colors.primary
                      : colors.white,
                  },
                ]}
              >
                {selectedItems[index] && (
                  <Entypo name="check" size={18} color={colors.white} />
                )}
              </TouchableOpacity>

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
          text="Continue"
          onPress={() => {
            const allSelected = list.every((_, index) => selectedItems[index]);
            if (allSelected) {
              props.navigation.goBack();
            } else {
              alert("Please accept all terms to continue");
            }
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
    fontSize: 19,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 50,
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
  },
  _listitem: {
    fontSize: 16,
  },
  _checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: colors.primary,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
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
  },
  _footerText: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    color: colors.grey,
  },
});
