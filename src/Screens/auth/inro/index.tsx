import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Intro = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const introData = [
    {
      title: "Welcome to My Homes",
      subtitle:
        "Explore a World of Tailored Properties – Designed to Fit Your Lifestyle with MyHomes",
      image: require("../../../assets/Images/bg1.png"),
    },
    {
      title: "Find Your Dream Home",
      subtitle:
        "Discover Properties That Match Your Unique Style and Budget Requirements",
      image: require("../../../assets/Images/bg1.png"),
    },
    {
      title: "Easy & Secure",
      subtitle:
        "Safe Transactions and Verified Properties for Your Peace of Mind",
      image: require("../../../assets/Images/bg1.png"),
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const pageIndex = Math.round(
      contentOffset.x / Dimensions.get("window").width,
    );
    setCurrentPage(pageIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {introData.map((item, index) => (
          <ImageBackground key={index} style={styles.slide} source={item.image}>
            <View style={styles.bottomSec}>
              <Text style={styles.welcomeText}>{item.title}</Text>
              <Text style={styles.subtitleText}>{item.subtitle}</Text>
              <View style={styles.pagination}>
                {introData.map((_, dotIndex) => {
                  return (
                    <View
                      key={dotIndex}
                      style={[
                        styles.dot,
                        dotIndex === currentPage ? styles.activeDot : null,
                      ]}
                    />
                  );
                })}
              </View>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: Dimensions.get("window").width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSec: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#292766",
    padding: 20,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitleText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    lineHeight: 20,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "white",
  },
});
