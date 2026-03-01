import { StyleSheet } from "react-native";

const AppBarStyle = StyleSheet.create({
  AppBarMain: {
    backgroundColor: "#fff",
    height: 86,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 0,
    zIndex: 999,
  },
  AppView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Home: {
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
  },
  Center: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
  },
  sec: {
    backgroundColor: "#15206f",
    borderRadius: 50,
  },
  Big: {
    width: 20,
    height: 20,
    margin: 20,
  },
  HomeIcon: {
    width: 20,
    height: 20,

    paddingHorizontal: 10,
  },
  HomeText: {
    color: "#15206f",
    fontWeight: "600",
  },
  Histry: {
    color: "gray",
  },
});

export default AppBarStyle;
