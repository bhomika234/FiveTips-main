import React, { ComponentType } from "react";
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
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
  /**
   * Text which is looked up via i18n.
   */
  gradient?: boolean;
  tx?: TextProps["tx"];
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: TextProps["text"];
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TextProps["txOptions"];
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * An optional style override for the "pressed" state.
   */
  pressedStyle?: StyleProp<ViewStyle>;
  /**
   * An optional style override for the button text.
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * An optional style override for the button text when in the "pressed" state.
   */
  pressedTextStyle?: StyleProp<TextStyle>;
  /**
   * One of the different types of button presets.
   */
  preset?: Presets;
  /**
   * An optional component to render on the right side of the text.
   * Example: `RightAccessory={(props) => <View {...props} />}`
   */
  RightAccessory?: ComponentType<ButtonAccessoryProps>;
  /**
   * An optional component to render on the left side of the text.
   * Example: `LeftAccessory={(props) => <View {...props} />}`
   */
  LeftAccessory?: ComponentType<ButtonAccessoryProps>;
  /**
   * Children components.
   */
  children?: React.ReactNode;
}

/**
 * A component that allows users to take actions and make choices.
 * Wraps the Text component with a Pressable component.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Button.md)
 */
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

  const preset: Presets = $viewPresets[props.preset!]
    ? props.preset
    : "default";
  function $viewStyle({ pressed }) {
    const styles = [
      $viewPresets[preset],
      $viewStyleOverride,
      !!pressed && [$pressedViewPresets[preset], $pressedViewStyleOverride],
    ];

    // If gradient is true, remove the backgroundColor as it will be handled by LinearGradient
    if (gradient) {
      return styles.map((style) => {
        if (style && typeof style === "object") {
          const { backgroundColor, ...rest } = style as any;
          return rest;
        }
        return style;
      });
    }

    return styles;
  }
  function $textStyle({ pressed }) {
    return [
      $textPresets[preset],
      $textStyleOverride,
      !!pressed && [$pressedTextPresets[preset], $pressedTextStyleOverride],
    ];
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
        style={[$textStyle(state)]}
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
      style={({ pressed }) => {
        // Get the base styles without the backgroundColor
        const baseStyles = $viewStyle({ pressed });
        // Apply the gradient as a background
        return [
          baseStyles,
          {
            width: "100%",
            // Reset any background color as we're using gradient
            backgroundColor: "transparent",
            // overflow: 'hidden'
          },
        ];
      }}
      {...rest}
    >
      {({ pressed }) => (
        <LinearGradient
          colors={["#009B77", "#01BA8F"]}
          style={[
            $baseViewStyle,
            {
              flex: 1,
              width: "100%",
              // Ensure the gradient fills the entire button
              // margin: 0,
              borderRadius: 100,
              // Inherit border radius from base style
              // Reset any background color
              backgroundColor: "transparent",
              // minHeight:58
            },
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          {renderButtonContent({ pressed })}
        </LinearGradient>
      )}
    </Pressable>
  ) : (
    <Pressable style={$viewStyle} accessibilityRole="button" {...rest}>
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

const $viewPresets = {
  default: [
    $baseViewStyle,
    {
      borderWidth: 1,
      borderColor: colors.palette.neutral400,
      backgroundColor: colors.palette.neutral100,
    },
  ] as StyleProp<ViewStyle>,

  filled: [
    $baseViewStyle,
    { backgroundColor: colors.palette.neutral300 },
  ] as StyleProp<ViewStyle>,

  reversed: [
    $baseViewStyle,
    { backgroundColor: colors.primary },
  ] as StyleProp<ViewStyle>,
};

const $textPresets: Record<Presets, StyleProp<TextStyle>> = {
  default: $baseTextStyle,
  filled: $baseTextStyle,
  reversed: [$baseTextStyle, { color: colors.palette.neutral100 }],
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
