import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import { colors, typography } from "../theme";
import { UserContext } from "../context/UserContext";
import { Text } from "../Components";

// Screens
import { LoginScreen, Home, Profile, LogoScreen, SplashScreen } from "../Screens";

// Types for Stack and Tabs
type StackParamList = {
  Logo: undefined;    // Nayi Screen
  Splash: undefined;  // Nayi Screen
  Login: undefined;
  Main: undefined;
};

type TabParamList = {
  Home: undefined;
  Profile: undefined;
};

// Stack & Tab
const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Bottom Tabs
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.white },
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: { fontFamily: typography.fonts.poppins.bold, fontSize: 13 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

// Main Stack Navigation
export const Navigation = () => {
  const { user } = useContext(UserContext); // get user login state

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={user ? "Main" : "Login"}
    >
      {!user && <Stack.Screen name="Login" component={LoginScreen} />}
      <Stack.Screen name="Main" component={Tabs} />
    </Stack.Navigator>
  );
};