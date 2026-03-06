import React from "react"
import { KeyboardAvoidingView, Platform, ScrollView, View, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface ScreenProps {
  children?: React.ReactNode
  preset?: "fixed" | "scroll"
  contentContainerStyle?: ViewStyle
}

export const Screen = (props: ScreenProps) => {
  const { children, preset = "fixed", contentContainerStyle } = props
  const insets = useSafeAreaInsets()

  const containerStyle: ViewStyle = {
    flex: 1,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  }

  if (preset === "scroll") {
    return (
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : undefined} 
        style={containerStyle}
      >
        <ScrollView contentContainerStyle={contentContainerStyle}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  return <View style={[containerStyle, contentContainerStyle]}>{children}</View>
}