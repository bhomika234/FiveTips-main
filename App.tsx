// App.tsx
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/context/UserContext";
import { Navigation } from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <UserProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </UserProvider>
  );
}