import React, { ComponentType } from "react";
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet, // Isay add kiya hai styles flatten karne ke liye
} from "react-native";
import { colors, spacing, typography } from "../theme";
import { Text, TextProps } from "./Text";
import { LinearGradient } from "expo-linear-gradient";

type Presets = keyof typeof $viewPresets;

export interface ButtonAccessoryProps {
  style: StyleProp<any>;
  pressableState: PressableStateCallbackType;
}

export interface ButtonProps extends PressableProps {
  gradient?: boolean;
  tx?: TextProps["tx"];
  text?: TextProps["text"];
  txOptions?: TextProps["txOptions"];
  style?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  pressedTextStyle?: StyleProp<TextStyle>;
  preset?: Presets;
  RightAccessory?: ComponentType<ButtonAccessoryProps>;
  LeftAccessory?: ComponentType<ButtonAccessoryProps>;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const {
    tx,
    text,
    txOptions,
    style: $viewStyleOverride,
    pressedStyle: $pressedViewStyleOverride,
    textStyle: $textStyleOverride,
    pressedTextStyle: $pressedTextStyleOverride,
    children,
    RightAccessory,
    LeftAccessory,
    gradient,
    ...rest
  } = props;

  const preset: Presets = $viewPresets[props.preset!] ? props.preset! : "default";

  // Web compatibility ke liye array ko flatten kiya hai
  function $viewStyle({ pressed }: { pressed: boolean }) {
    const styles = [
      $viewPresets[preset],
      $viewStyleOverride,
      !!pressed && [$pressedViewPresets[preset], $pressedViewStyleOverride],
    ];

    const flattened = StyleSheet.flatten(styles);

    if (gradient) {
      const { backgroundColor, ...restStyle } = flattened as any;
      return restStyle;
    }

    return flattened;
  }

  function $textStyle({ pressed }: { pressed: boolean }) {
    return StyleSheet.flatten([
      $textPresets[preset],
      $textStyleOverride,
      !!pressed && [$pressedTextPresets[preset], $pressedTextStyleOverride],
    ]);
  }

  const renderButtonContent = (state: any) => (
    <>
      {!!LeftAccessory && (
        <LeftAccessory style={$leftAccessoryStyle} pressableState={state} />
      )}

      <Text
        tx={tx}
        text={text}
        txOptions={txOptions}
        style={$textStyle(state)}
      >
        {children}
      </Text>

      {!!RightAccessory && (
        <RightAccessory style={$rightAccessoryStyle} pressableState={state} />
      )}
    </>
  );

  return gradient ? (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [
        $viewStyle({ pressed }),
        { width: "100%", backgroundColor: "transparent" },
      ]}
      {...rest}
    >
      {({ pressed }) => (
        <LinearGradient
          colors={["#009B77", "#01BA8F"]}
          style={[
            $baseViewStyle,
            { flex: 1, width: "100%", borderRadius: 100, backgroundColor: "transparent" },
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          {renderButtonContent({ pressed })}
        </LinearGradient>
      )}
    </Pressable>
  ) : (
    <Pressable 
      style={(state) => $viewStyle(state)} 
      accessibilityRole="button" 
      {...rest}
    >
      {({ pressed }) => renderButtonContent({ pressed })}
    </Pressable>
  );
}

const $baseViewStyle: ViewStyle = {
  minHeight: 58,
  borderRadius: 100,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.sm,
  overflow: "hidden",
  width: "100%",
};

const $baseTextStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: "semibold",
  textAlign: "center",
  flexShrink: 1,
  flexGrow: 0,
  zIndex: 2,
};

const $rightAccessoryStyle: ViewStyle = { marginStart: spacing.xs, zIndex: 1 };
const $leftAccessoryStyle: ViewStyle = { marginEnd: spacing.xs, zIndex: 1 };

// Yahan arrays ko objects mein convert kiya hai (Web fix)
const $viewPresets = {
  default: {
    ...$baseViewStyle,
    borderWidth: 1,
    borderColor: colors.palette.neutral400,
    backgroundColor: colors.palette.neutral100,
  } as ViewStyle,

  filled: {
    ...$baseViewStyle,
    backgroundColor: colors.palette.neutral300,
  } as ViewStyle,

  reversed: {
    ...$baseViewStyle,
    backgroundColor: colors.primary,
  } as ViewStyle,
};

const $textPresets: Record<Presets, StyleProp<TextStyle>> = {
  default: $baseTextStyle,
  filled: $baseTextStyle,
  reversed: { ...$baseTextStyle, color: colors.palette.neutral100 },
};

const $pressedViewPresets: Record<Presets, StyleProp<ViewStyle>> = {
  default: { backgroundColor: colors.palette.neutral200 },
  filled: { backgroundColor: colors.palette.neutral400 },
  reversed: { backgroundColor: colors.palette.neutral700 },
};

const $pressedTextPresets: Record<Presets, StyleProp<TextStyle>> = {
  default: { opacity: 0.9 },
  filled: { opacity: 0.9 },
  reversed: { opacity: 0.9 },
};