import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text } from "./Text";
import { colors, spacing } from "../theme";
import { IStocks } from "../utils/data";
import { ITipDisplay } from "../types/tips.types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { StockLogoEnhanced } from "./StockLogoEnhanced";

interface Props {
  stock: IStocks | ITipDisplay;
}

export default function StockCard({ stock }: Props) {
  const navigation: any = useNavigation();

  return (
    <View
      //   onPress={() => navigation.navigate("UserProfile")}
      style={styles._card}
    >
      <View style={styles._row}>
        <View style={styles._iconview}>
          <StockLogoEnhanced
            symbol={stock.symbol}
            size={40}
            fallbackText={stock.companyName}
          />
          <View>
            <Text text={stock.companyName} weight="bold" style={styles._name} />
            <Text text={stock.symbol} style={styles.companyName} />
          </View>
        </View>
        <LinearGradient
          colors={colors.gradient as any}
          style={{ borderRadius: 8 }}
        >
          <View style={styles._statusbtn}>
            <Text
              weight="bold"
              text={`${stock.status}`}
              style={styles._statustext}
            />
          </View>
        </LinearGradient>
      </View>

      <View style={[styles._row, { marginTop: spacing.sm }]}>
        <View>
          <Text weight="bold" text="ENTRY SIGNAL" style={styles._label} />
          <Text
            weight="bold"
            text={`$${stock.buyTrigger}`}
            style={styles.price}
          />
        </View>
        <View>
          <Text weight="bold" text="UPSIDE SIGNAL" style={styles._label} />
          <Text
            weight="bold"
            text={`$${stock.targetPrice}`}
            style={styles.price}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Details", { stock })}
        >
          {/* <AntDesign name="arrowright" size={20} color="black" /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _card: {
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  _user_image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  _name: {
    fontSize: 16,
  },
  companyName: {
    color: colors.grey,
    fontSize: 14,
  },
  _details: {
    color: "#333333",
    fontSize: 14,
  },
  _tags_row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  _tag: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 100,
    marginBottom: 10,
  },
  _tag_title: {
    color: colors.white,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _iconview: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  _statusbtn: {
    height: 26,
    width: 52,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  _statustext: {
    color: colors.white,
    fontSize: 12,
  },
  _label: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  price: {
    color: colors.primary,
    fontSize: 16,
  },
});
