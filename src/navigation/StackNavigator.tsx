import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IRoutes, AppStackParamList } from "../utils/interfaces";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors, spacing, typography } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../Components";
import { UserContext } from "../context/UserContext";

import {
  Splash,
  GettingStart,
  Terms,
  Trial,
  ForgotPassword,
  CreateAccount,
  LoginScreen,
  Payment,
  Home,
  History,
  Profile,
  Details,
  ContactSupport,
  PrivacyPolicy,
  TermsConditions,
  Subscription,
} from "../Screens";
import { HistoryIcon, HomeIcon, ProfileIcon } from "../assets/svg";

const Stack = createNativeStackNavigator<AppStackParamList>();
const Tab = createBottomTabNavigator<AppStackParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.white },
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontFamily: "bold",
          fontSize: 13,
          // color:"#9E9E9E"
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <View style={{ marginTop: 5 }}>
              <HomeIcon color={color} />
            </View>
          ),
        }}
      />
{/* 
      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <View style={{ marginTop: 5 }}>
              <HistoryIcon color={color} />
            </View>
          ),
        }}
      /> */}

      {/* Requests */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <View style={{ marginTop: 5 }}>
              <ProfileIcon color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const userRoutes: IRoutes[] = [
  {
    name: "Main",
    component: Tabs,
    showHeader: false,
  },
  {
    name: "Details",
    component: Details,
    showHeader: true,
    title: "Details",
  },
  {
    name: "ContactSupport",
    component: ContactSupport,
    showHeader: true,
    title: "Contact Support",
  },
  {
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    showHeader: true,
    title: "Privacy Policy",
  },
  {
    name: "TermsConditions",
    component: TermsConditions,
    showHeader: true,
    title: "Terms Conditions",
  },
  {
    name: "Subscription",
    component: Subscription,
    showHeader: true,
    title: "",
  },
];

const authRoutes: IRoutes[] = [
  {
    name: "GettingStart",
    component: GettingStart,
    showHeader: false,
    title: "Getting Start",
  },
  {
    name: "Login",
    component: LoginScreen,
    showHeader: false,
    title: "Login",
  },
  {
    name: "Splash",
    component: Splash,
    showHeader: false,
  },

  {
    name: "CreateAccount",
    component: CreateAccount,
    showHeader: false,
    title: "",
  },
  {
    name: "Terms",
    component: Terms,
    showHeader: false,
    title: "Terms",
  },
  {
    name: "Trial",
    component: Trial,
    showHeader: false,
    title: "Trial",
  },

  {
    name: "ForgotPassword",
    component: ForgotPassword,
    showHeader: false,
    title: "Forgot Password",
  },
  {
    name: "Payment",
    component: Payment,
    showHeader: true,
    title: "Payment",
  },
];

export const Navigation = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [initialRoute, setInitialRoute] =
    React.useState<keyof AppStackParamList>("Splash");
  const [isLoading, setIsLoading] = React.useState(true);

  AsyncStorage.removeItem("hasLaunched");
  // Check if it's the first app launch
  React.useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem("hasLaunched");

        if (hasLaunched === "true") {
          setInitialRoute("GettingStart");
        } else {
          setInitialRoute("Splash");
        }
      } catch (error) {
        console.error("Error checking first launch:", error);
        setInitialRoute("Splash");
      } finally {
        setIsLoading(false);
      }
    };

    checkFirstLaunch();
  }, []);
  // Determine which routes to use based on authentication state
  const routes = user ? userRoutes : authRoutes;
  // Show loading indicator while checking first launch
  if (isLoading) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      {routes?.map(({ name, component, showHeader, title }: any) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerStyle: { backgroundColor: colors.white },
            headerLeft: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.goBack()}
                >
                  <Ionicons name="arrow-back" size={24} />
                </TouchableOpacity>
                <Text weight="semiBold" text={title} style={styles._title} />
              </View>
            ),
            headerTitle: "",
            headerShown: showHeader,
            headerShadowVisible: false,
            // headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: typography.fonts.poppins.semiBold,
              fontSize: 18,
              color: colors.primary,
            },
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  _title: {
    fontSize: 20,
    paddingLeft: spacing.xs,
  },
});
