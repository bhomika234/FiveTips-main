import { useFonts } from "@expo-google-fonts/poppins";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import * as Notifications from "expo-notifications";
import React from "react";
import { LogBox, Platform, StatusBar, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import Toast, { BaseToastProps } from "react-native-toast-message";
import { HistoryProvider } from "./src/context/HistoryContext";
import { TipsProvider } from "./src/context/TipsContext";
import { UserProvider } from "./src/context/UserContext";
import { Navigation } from "./src/navigation/StackNavigator";
import { ErrorBoundary } from "./src/Screens/error/ErrorBoundary";
import { colors, typography } from "./src/theme";

// Define our custom toast types
type ToastType = "success" | "error" | "info";

// Extend the BaseToastProps to include our custom props
interface CustomToastProps extends BaseToastProps {
  type: ToastType;
}

// Custom Toast Component
const CustomToast = (props: CustomToastProps) => {
  const getBackgroundColor = () => {
    switch (props.type) {
      case "success":
        return colors.palette.primary;
      case "error":
        return colors.error;
      case "info":
      default:
        return colors.palette.neutral800;
    }
  };

  const getIcon = () => {
    switch (props.type) {
      case "success":
        return <Feather name="check-circle" size={20} color={colors.white} />;
      case "error":
        return <Feather name="alert-circle" size={20} color={colors.white} />;
      case "info":
      default:
        return <Feather name="info" size={20} color={colors.white} />;
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: getBackgroundColor(),
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 16,
        marginTop: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        minHeight: 60,
      }}
    >
      <View style={{ marginRight: 12 }}>{getIcon()}</View>
      <View style={{ flex: 1 }}>
        {props.text1 && (
          <Text
            style={{
              color: colors.white,
              fontFamily: typography.fonts.poppins.bold,
              fontSize: 14,
              marginBottom: 4,
            }}
          >
            {props.text1}
          </Text>
        )}
        {props.text2 && (
          <Text
            style={{
              color: colors.white,
              fontFamily: typography.fonts.poppins.medium,
              fontSize: 13,
              opacity: 0.9,
            }}
          >
            {props.text2}
          </Text>
        )}
      </View>
    </View>
  );
};

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();
const App = () => {
  let [fontsLoaded] = useFonts({
    light: require("./assets/fonts/Urbanist-Light.ttf"),
    normal: require("./assets/fonts/Urbanist-Regular.ttf"),
    medium: require("./assets/fonts/Urbanist-Medium.ttf"),
    semiBold: require("./assets/fonts/Urbanist-SemiBold.ttf"),
    bold: require("./assets/fonts/Urbanist-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const linking = {
    prefixes: ["bullwise://"],
    config: {
      screens: {
        Details: "Details/:stockId",
      },
    },
    async getInitialURL() {
      // First, you may want to do the default deep link handling
      // Check if app was opened from a deep link
      const url = await Linking.getInitialURL();

      if (url != null) {
        return url;
      }

      // Handle URL from expo push notifications
      const response = await Notifications.getLastNotificationResponseAsync();

      if (response?.notification.request.content.data.stockId) {
        return `bullwise://Details/${response.notification.request.content.data.stockId}`;
      }
      return null;
    },
    subscribe(listener: (url: string) => void) {
      const onReceiveURL = ({ url }: { url: string }) => listener(url);

      // Listen to incoming links from deep linking
      const subscription = Linking.addEventListener("url", onReceiveURL);

      // Listen to expo push notifications
      const notificationSubscription =
        Notifications.addNotificationResponseReceivedListener((response) => {
          // Handle stock details from notification
          if (response.notification.request.content.data.stockId) {
            const stockId = response.notification.request.content.data.stockId;
            const url = `bullwise://Details/${stockId}`;
            listener(url);
          }
        });

      return () => {
        // Clean up the event listeners
        subscription.remove();
        notificationSubscription.remove();
      };
    },
  };

  return (
    <UserProvider>
      <TipsProvider>
        <HistoryProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar
              barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
              backgroundColor="#FFFFFF"
              translucent={false}
            />
            <SafeAreaProvider
              initialMetrics={initialWindowMetrics}
              style={{ flex: 1 }}
            >
              <ErrorBoundary catchErrors="dev">
                <NavigationContainer
                  theme={{
                    dark: false,
                    colors: {
                      primary: colors.palette.primary,
                      background: colors.background,
                      card: colors.background,
                      text: colors.text,
                      border: colors.border,
                      notification: colors.palette.primary,
                    },
                  }}
                >
                  <GestureHandlerRootView style={{ flex: 1 }}>
                    <Navigation />
                  </GestureHandlerRootView>
                </NavigationContainer>
              </ErrorBoundary>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </HistoryProvider>
      </TipsProvider>
      <Toast
        config={{
          success: (props) => {
            const { text1, text2, ...rest } = props;
            return (
              <CustomToast
                {...rest}
                type="success"
                text1={text1}
                text2={text2}
              />
            );
          },
          error: (props) => {
            const { text1, text2, ...rest } = props;
            return (
              <CustomToast {...rest} type="error" text1={text1} text2={text2} />
            );
          },
          info: (props) => {
            const { text1, text2, ...rest } = props;
            return (
              <CustomToast {...rest} type="info" text1={text1} text2={text2} />
            );
          },
        }}
        topOffset={50}
        autoHide={true}
        visibilityTime={4000}
      />
    </UserProvider>
  );
};

export default App;
