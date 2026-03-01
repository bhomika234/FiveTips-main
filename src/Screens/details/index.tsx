import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Screen } from "../../Components";
import { AppStackScreenProps } from "../../utils/interfaces";
import { colors, spacing } from "../../theme";
import { UserContext } from "../../context/UserContext";
import { LinearGradient } from "expo-linear-gradient";
import { WithLocalSvg } from "react-native-svg/css";
// import StockChart from "../../Components/StockChart";
import SpeedoMeterChart from "../../Components/SpeedoMeterChart";
import { Images } from "../../assets/Images";
import { IStocks } from "../../utils/data";
import { ITipDisplay } from "../../types/tips.types";
import { StockLogoEnhanced } from "../../Components/StockLogoEnhanced";
interface DetailsProps extends AppStackScreenProps<"Details"> {}

export function Details(props: DetailsProps) {
  const { user, setUser } = React.useContext(UserContext);

  const passedStock = props.route.params.stock as IStocks | undefined;
  const passedTip = props.route.params.tip as ITipDisplay | undefined;
  const data: IStocks | ITipDisplay | undefined = passedStock ?? passedTip;
  if (!data) return null; // nothing to show

  const isStock = (d: IStocks | ITipDisplay): d is IStocks =>
    (d as IStocks).currentPrice !== undefined;

  const currentPrice = isStock(data) ? data.currentPrice : undefined;
  const buyTrigger = isStock(data) ? data.buyTrigger : data.buyTrigger; // common field
  const targetSell = isStock(data) ? data.targetSell : undefined;
  const targetPrice = data.targetPrice;
  const status = data.status;
  const analysis = data.analysis;
  const note = isStock(data) ? data.note : undefined;
  const confidence = isStock(data) ? data.confidence : data.confidence; // from DB

  const filterOptions = ["24H", "1W", "1Y", "5Y", "All"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Screen preset="auto" contentContainerStyle={styles.screenContentContainer}>
      <View style={styles._header}>
        <View style={styles._iconview}>
          <View style={styles._circle}>
            {isStock(data) && data.image ? (
              <WithLocalSvg asset={data.image} />
            ) : (
              <StockLogoEnhanced
                symbol={data.symbol}
                size={40}
                fallbackText={data.companyName}
              />
            )}
          </View>
          <View>
            <Text text={data.companyName} weight="bold" style={styles._name} />
            {currentPrice !== undefined ? (
              <Text
                weight="bold"
                text={`$${currentPrice}`}
                style={styles.price}
              />
            ) : (
              <Text
                weight="bold"
                text={`$${buyTrigger}`}
                style={styles.price}
              />
            )}
          </View>
        </View>
        {status && (
          <LinearGradient
            colors={colors.gradient as any}
            style={{ borderRadius: 100 }}
          >
            <View style={styles._statusbtn}>
              <Text
                weight="bold"
                text={`${status}`}
                style={styles._statustext}
              />
            </View>
          </LinearGradient>
        )}
      </View>
      {/* STOCK CHART */}
      {/* <StockChart /> */}

      {/* <View style={styles._filterview}>
        {filterOptions.map((item, index) => {
          return (
            <LinearGradient
              key={index}
              start={[0, 1]}
              end={[1, 0]}
              colors={
                selectedIndex === index
                  ? ["#01B98F", "#019B77"]
                  : ["#ffffff", "#ffffff"]
              }
              style={{ borderRadius: 100, height: 40 }}
            >
              <TouchableOpacity
                onPress={() => setSelectedIndex(index)}
                style={[
                  styles._filteritem,
                  selectedIndex === index && styles._selectedfilteritem,
                ]}
              >
                <Text
                  text={item}
                  weight="bold"
                  style={[
                    styles._filtertext,
                    {
                      color:
                        selectedIndex === index ? colors.white : colors.grey,
                    },
                  ]}
                />
              </TouchableOpacity>
            </LinearGradient>
          );
        })}
      </View> */}

      <View style={[styles._card, { marginTop: 50 }]}>
        <Text
          weight="bold"
          text={`$${currentPrice !== undefined ? currentPrice : buyTrigger}`}
          style={styles.buyTrigger}
        />
        <Text
          weight="bold"
          text={currentPrice !== undefined ? "Current Price" : "Buy Trigger"}
          style={[styles._heading, { textAlign: "center" }]}
        />

        <View style={[styles._row, { gap: 10, marginTop: 10 }]}>
          <View
            style={[
              styles._card,
              {
                backgroundColor: colors.fill,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              },
            ]}
          >
            {buyTrigger !== undefined && (
              <Text
                text={`$${buyTrigger}`}
                weight="bold"
                style={[styles.price, { fontSize: 16, lineHeight: 16 }]}
              />
            )}
            <Text
              weight="bold"
              text={"Buy Trigger"}
              style={[styles._heading, { textAlign: "center", lineHeight: 14 }]}
            />
          </View>
          <View
            style={[
              styles._card,
              {
                backgroundColor: colors.fill,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              },
            ]}
          >
            {(targetSell ?? targetPrice) !== undefined && (
              <Text
                text={`$${targetSell ?? targetPrice}`}
                weight="bold"
                style={[
                  styles.price,
                  { fontSize: 16, lineHeight: 16, color: "#CA2940" },
                ]}
              />
            )}
            <Text
              weight="bold"
              text={targetSell !== undefined ? "Target Sell" : "Target"}
              style={[styles._heading, { textAlign: "center", lineHeight: 14 }]}
            />
          </View>
        </View>
      </View>
      <View style={styles._card}>
        <SpeedoMeterChart data={{ ...data, confidence }} />
        <Text
          weight="bold"
          text={"AI Confidence"}
          style={[styles._heading, { alignSelf: "center" }]}
        />
      </View>
      <View style={styles._card}>
        <Text weight="bold" text={"AI Analysis"} style={[styles._heading]} />
        {analysis && (
          <Text weight="medium" text={analysis} style={[styles._analysis]} />
        )}
      </View>
      {note && (
        <View style={[styles._card, { backgroundColor: "#FFEFEF" }]}>
          <WithLocalSvg
            asset={Images.warning}
            height={40}
            style={{ alignSelf: "center", marginVertical: 10 }}
          />
          <Text weight="bold" text={note} style={[styles._analysis]} />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContentContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingBottom: 50,
  },
  _header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: spacing.md,
  },
  _iconview: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  _circle: {
    backgroundColor: "#F6F6F6",
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 4,
  },
  _statusbtn: {
    height: 26,
    width: 67,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  _statustext: {
    color: colors.white,
    fontSize: 12,
  },
  _name: {
    fontSize: 18,
  },
  companyName: {
    color: colors.grey,
    fontSize: 16,
  },
  price: {
    color: colors.primary,
    fontSize: 18,
    marginTop: 3,
  },
  _filterview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: spacing.md,
    // paddingHorizontal: spacing.md,
  },
  _filteritem: {
    padding: spacing.sm,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    height: 40,
  },
  _selectedfilteritem: {
    backgroundColor: colors.primary,
  },
  _filtertext: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "bold",
    padding: 0,
    margin: 0,
    lineHeight: 14,
  },
  _card: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1.2,
    borderColor: colors.border,
  },
  buyTrigger: {
    fontSize: 24,
    color: colors.primary,
    alignSelf: "center",
  },
  _heading: {
    fontSize: 14,
    marginTop: 5,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
  },
  _analysis: {
    color: "#616161",
  },
});

export default Details;
