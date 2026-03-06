import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { colors, typography } from "../theme";
// import LoginScreen from './../Screens/'
import { LogoScreen } from "./../Screens/LogoScreen";
import {
  HomeScreen,
  Profile,
  ProfileScreen,
  Intro,
  LoginScreen} from "../Screens";

type StackParamList = {
  Login: undefined;
  Main: undefined;
};

type TabParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

/* -------------------- TABS -------------------- */

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.white },
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontFamily: typography.fonts.poppins.bold,
          fontSize: 13,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

/* -------------------- MAIN NAVIGATION -------------------- */

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro" // 👈 Auth screen first
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="LogoScreen" component={LogoScreen} />

      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Main" component={Tabs} />
    </Stack.Navigator>
  );
};
