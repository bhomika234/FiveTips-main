import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import RNSpeedometer from "react-native-speedometer";
import { Images } from "../assets/Images";
import { Text } from "./Text";

const SpeedoMeterChart = ({ data }: { data: any }) => {
  // Prefer explicit confidence if provided; else derive from price difference
  let usingConfidence = false;
  let value: number;
  if (typeof data?.confidence === "number" && !isNaN(data.confidence)) {
    value = data.confidence;
    usingConfidence = true;
  } else if (
    typeof data?.buyTrigger === "number" &&
    typeof data?.currentPrice === "number" &&
    data.buyTrigger !== 0
  ) {
    const percentDiff = data.buyTrigger - data.currentPrice;
    value = (percentDiff / data.buyTrigger) * 100;
  } else {
    value = 0;
  }
  if (isNaN(value) || !isFinite(value)) value = 0;

  return (
    <View style={styles.container}>
      <View>
        <RNSpeedometer
          labels={[
            {
              label: "1",
              labelColor: "#D72626",
              activeBarColor: "#D72626",
            },
            {
              label: "2",
              labelColor: "#F26D24",
              activeBarColor: "#F26D24",
            },
            {
              label: "3",
              labelColor: "#F7B11E",
              activeBarColor: "#F7B11E",
            },
            {
              label: "4",
              labelColor: "#f2cf1f",
              activeBarColor: "#f2cf1f",
            },
            {
              label: "5",
              labelColor: "yellow",
              activeBarColor: "yellow",
            },
            {
              label: "6",
              labelColor: "#08C296",
              activeBarColor: "#08C296",
            },
            {
              label: "7",
              labelColor: "#00AB83",
              activeBarColor: "#00AB83",
            },
          ]}
          showValueLabel={false}
          value={value}
          labelStyle={{ color: "red", display: "none" }}
          size={250}
          maxValue={usingConfidence ? 100 : 500}
        />
      </View>
      <View style={styles._row}>
        <Text weight="bold" text="0%" style={styles.value_text} />
        <Text weight="bold" text="100%" style={styles.value_text} />
      </View>
      <Text
        weight="bold"
        text={`${value.toFixed(2)}%`}
        style={styles._value_text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: "black",
    height: 25,
    fontSize: 16,
    marginVertical: 50,
    marginHorizontal: 20,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  value_text: {
    fontSize: 12,
  },
  _value_text: {
    fontSize: 25,
    color: "#00AB83",
    alignSelf: "center",
  },
});

export default SpeedoMeterChart;
