import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { colors } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "./Text";

const data = {
  labels: [],
  datasets: [
    {
      data: [300.23, 180.23, 550.23, 400.23, 750.34, 900.23, 600.23, 1080.23],
      color: (opacity = 1) => colors.primary, // Changed to blue
      strokeWidth: 2,
    },
  ],
};
const screenWidth = Dimensions.get("window").width;

const StockChart = () => {
  const [selectedIndex, setSelectedIndex] = useState(
    data.datasets[0].data.length - 1
  ); // Default to the last point
  const chartConfig: any = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 2,
    propsForBackgroundLines: {
      stroke: colors.border, // Color for grid lines (vertical & horizontal)
      strokeWidth: 1.22,
      strokeDasharray: [0, 0],
    },
    color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`,
    useShadowColorFromDataset: false,
    propsForDots: {
      r: (index: number) => (index === selectedIndex ? "6" : "0"), // Adjust dot size
      strokeWidth: "0",
      stroke: colors.primary,
      fill: colors.primary, // Fill the dot
    },
    strokeWidth: 2,
  };
  const handlePointPress = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles._chartview}>
      <LineChart
        data={data}
        width={screenWidth - 20}
        style={{
          alignSelf: "center",
          paddingRight: 0,
          width: "100%",
          //   marginTop: 18,
          borderColor: colors.border,
          paddingTop: 20,
          marginTop: 10,
        }}
        height={210}
        bezier
        segments={4}
        fromZero={true}
        withInnerLines={true} // hide the grid behind chart
        withHorizontalLabels={false} // hide horizontal label
        withOuterLines={true} // hide lines next to labels
        chartConfig={chartConfig}
        onDataPointClick={({ index }) => handlePointPress(index)}
        renderDotContent={({ x, y, index }) => {
          if (selectedIndex === index) {
            return (
              <View
                style={{
                  position: "absolute",
                  left: x - 40,
                  top: y - 35,
                  backgroundColor: "#00AB83",
                  padding: 5,
                  borderRadius: 100,
                  paddingHorizontal: 20,
                  //   marginRight: 20,
                }}
              >
                <Text weight="bold" style={{ color: "#fff" }}>
                  ${data.datasets[0].data[index]}
                </Text>
                <View
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#00AB83",
                    borderWidth: 2,
                    borderColor: colors.white,
                    borderRadius: 100,
                    left: 34,
                    bottom: -15,
                    zIndex: 1,
                    position: "absolute",
                  }}
                ></View>
                <LinearGradient
                  //   start={[3, 1]}
                  //   end={[2, 0]}
                  colors={[
                    "rgba(0, 171, 131,0.5)",
                    "rgba(0, 171, 131,0.4)",
                    "rgba(0, 171, 131,0.2)",
                    "rgba(0, 171, 131,0.1)",
                  ]}
                  style={{
                    position: "absolute",
                    top: 40, // Align to the bottom (y position will be dynamic)
                    width: 27, // Bar width`
                    height: 175 - y, // Dynamic height from baseline
                    left: 28,
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5,
                  }}
                  // style={styles.background}
                />
              </View>
            );
          }
          return null;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  _chartview: {
    backgroundColor: colors.white,
    width: screenWidth - 40,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    height: 210,
    overflow: "hidden",
    borderColor: colors.border,
  },
  _heading: {
    fontSize: 16,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default StockChart;
