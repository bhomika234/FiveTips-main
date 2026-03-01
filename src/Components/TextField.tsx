import React, {
  ComponentType,
  forwardRef,
  Ref,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { isRTL, translate } from "../i18n";
import { colors, spacing, typography } from "../theme";
import { Text, TextProps } from "./Text";

export interface TextFieldAccessoryProps {
  style: StyleProp<any>;
  status: TextFieldProps["status"];
  multiline: boolean;
  editable: boolean;
}

export interface TextFieldProps extends Omit<TextInputProps, "ref"> {
  /**
   * A style modifier for different input states.
   */
  status?: "error" | "disabled";
  /**
   * The label text to display if not using `labelTx`.
   */
  label?: TextProps["text"];
  /**
   * Label text which is looked up via i18n.
   */
  labelTx?: TextProps["tx"];
  /**
   * Optional label options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  labelTxOptions?: TextProps["txOptions"];
  /**
   * Pass any additional props directly to the label Text component.
   */
  LabelTextProps?: TextProps;
  /**
   * The helper text to display if not using `helperTx`.
   */
  helper?: TextProps["text"];
  /**
   * Helper text which is looked up via i18n.
   */
  helperTx?: TextProps["tx"];
  /**
   * Optional helper options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  helperTxOptions?: TextProps["txOptions"];
  /**
   * Pass any additional props directly to the helper Text component.
   */
  HelperTextProps?: TextProps;
  /**
   * The placeholder text to display if not using `placeholderTx`.
   */
  placeholder?: TextProps["text"];
  /**
   * Placeholder text which is looked up via i18n.
   */
  placeholderTx?: TextProps["tx"];
  /**
   * Optional placeholder options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  placeholderTxOptions?: TextProps["txOptions"];
  /**
   * Optional input style override.
   */
  style?: StyleProp<TextStyle>;
  /**
   * Style overrides for the container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Style overrides for the input wrapper
   */
  inputWrapperStyle?: StyleProp<ViewStyle>;
  /**
   * An optional component to render on the right side of the input.
   * Example: `RightAccessory={(props) => <Icon icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  RightAccessory?: ComponentType<TextFieldAccessoryProps>;
  /**
   * An optional component to render on the left side of the input.
   * Example: `LeftAccessory={(props) => <Icon icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  LeftAccessory?: ComponentType<TextFieldAccessoryProps>;
}

/**
 * A component that allows for the entering and editing of text.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-TextField.md)
 */
export const TextField = forwardRef(function TextField(
  props: TextFieldProps,
  ref: Ref<TextInput>
) {
  const {
    labelTx,
    label,
    labelTxOptions,
    placeholderTx,
    placeholder,
    placeholderTxOptions,
    helper,
    helperTx,
    helperTxOptions,
    status,
    RightAccessory,
    LeftAccessory,
    HelperTextProps,
    LabelTextProps,
    style: $inputStyleOverride,
    containerStyle: $containerStyleOverride,
    inputWrapperStyle: $inputWrapperStyleOverride,
    ...TextInputProps
  } = props;
  const input = useRef<TextInput>();
  const [isFocused, setIsFocused] = React.useState(false);

  const disabled = TextInputProps.editable === false || status === "disabled";

  const placeholderContent = placeholderTx
    ? translate(placeholderTx, placeholderTxOptions)
    : placeholder;

  const $containerStyles = [$containerStyleOverride];

  const $labelStyles = [$labelStyle, LabelTextProps?.style];

  const $inputWrapperStyles = [
    $inputWrapperStyle,

    status === "error" && { borderColor: colors.error },
    TextInputProps.multiline,
    LeftAccessory && { paddingStart: 0 },
    RightAccessory && { paddingEnd: 0 },
    $inputWrapperStyleOverride,
    isFocused && { borderColor: colors.primary }, // Change border color when focused
  ];

  const $inputStyles = [
    $inputStyle,
    disabled && { color: colors.textDim },
    isRTL && { textAlign: "right" as TextStyle["textAlign"] },
    TextInputProps.multiline && { height: "auto" },
    $inputStyleOverride,
  ];

  const $helperStyles = [
    $helperStyle,
    status === "error" && { color: colors.error },
    HelperTextProps?.style,
  ];

  function focusInput() {
    if (disabled) return;
    input.current?.focus();
  }

  useImperativeHandle(ref, () => input.current as any);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  // left accessory should not reregister as a dependency

  // render left accessory using useMemo

  const renderLeftAccessory = useMemo(() => {
    if (!LeftAccessory) return null;

    return (
      <LeftAccessory
        style={$leftAccessoryStyle}
        status={status}
        editable={!disabled}
        multiline={TextInputProps.multiline || false}
      />
    );
  }, []);

  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableOpacity
        activeOpacity={1}
        style={[
          isFocused ? $focusedContainerStyle : $containerStyles,
          { borderWidth: 4, borderRadius: 20, borderColor: colors.white },
          { borderColor: isFocused ? "#DEF7F1" : colors.white },
          { marginBottom: 0 },
        ]}
        onPress={focusInput}
        accessibilityState={{ disabled }}
      >
        {/* {!!(label || labelTx) && (
        <Text
          preset="formLabel"
          text={label}
          tx={labelTx}
          weight="medium"
          txOptions={labelTxOptions}
          {...LabelTextProps}
          style={$labelStyles}
        />
      )} */}

        <View style={$inputWrapperStyles as any}>
          {!!LeftAccessory && renderLeftAccessory}

          <TextInput
            ref={input}
            underlineColorAndroid={colors.transparent}
            textAlignVertical="top"
            placeholder={placeholderContent}
            placeholderTextColor={"#9E9E9E"}
            {...TextInputProps}
            editable={!disabled}
            style={[$inputStyles]}
            onFocus={handleFocus} // Set focus state to true on focus
            onBlur={handleBlur} // Set focus state to false on blur
          />

          {!!RightAccessory && (
            <RightAccessory
              style={$rightAccessoryStyle}
              status={status}
              editable={!disabled}
              multiline={TextInputProps.multiline as any}
            />
          )}
        </View>
      </TouchableOpacity>

      {!!(helper || helperTx) && (
        <Text
          preset="formHelper"
          text={helper}
          tx={helperTx}
          txOptions={helperTxOptions}
          {...HelperTextProps}
          style={$helperStyles}
        />
      )}
    </View>
  );
});

const $labelStyle: TextStyle = {
  marginBottom: spacing.xxs,
  // fontSize:14
};

const $inputWrapperStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  // elevation: 0.2,
  borderRadius: 16,
  height: 60,
  // backgroundColor: colors.fill,
  // overflow: "hidden",
  borderWidth: 1,
  // backgroundColor: "red",
  borderColor: "#F0F0F0",
  backgroundColor: "#FAFAFA",

  // padding:10,
  // padding:10
};

const $inputStyle: TextStyle = {
  flex: 1,
  alignSelf: "center",
  fontFamily: "bold",
  color: colors.black,
  fontSize: 14,
  // height: 60,
  // width: "100%",

  // height: 52,
  // https://github.com/facebook/react-native/issues/21720#issuecomment-532642093
  // marginVertical: spacing.xs,
  marginHorizontal: spacing.sm,
};

const $helperStyle: TextStyle = {
  // marginTop: spacing.xs,
};

const $rightAccessoryStyle: ViewStyle = {
  marginEnd: spacing.xs,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
  marginRight: 15,
};
const $leftAccessoryStyle: ViewStyle = {
  marginStart: spacing.xs,
  height: 30,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 15,
  borderWidth: 2,
};

const $focusedContainerStyle: ViewStyle = {
  borderWidth: 4,
  // borderRadius: 10,
  // marginBottom: spacing.md,
};
