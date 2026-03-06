import i18n from "i18n-js"
import React from "react"
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native"

import { colors, typography } from "../theme"
import { translate, TxKeyPath } from "../i18n"

type Sizes = keyof typeof $sizeStyles
type Weights = keyof typeof typography.primary
type Presets =
  | "default"
  | "bold"
  | "heading"
  | "subheading"
  | "formLabel"
  | "formHelper"

export interface TextProps extends RNTextProps {
  tx?: TxKeyPath
  text?: string
  txOptions?: i18n.TranslateOptions
  style?: StyleProp<TextStyle>
  preset?: Presets
  weight?: Weights
  size?: Sizes
  children?: React.ReactNode
}

export function Text(props: TextProps) {
  const {
    weight,
    size,
    tx,
    txOptions,
    text,
    children,
    style,
    preset = "default",
    ...rest
  } = props

  const i18nText = tx ? translate(tx, txOptions) : undefined
  const content = i18nText ?? text ?? children

  const $styles: StyleProp<TextStyle> = [
    $presets[preset],
    weight && $fontWeightStyles[weight],
    size && $sizeStyles[size],
    style,
  ]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $sizeStyles = {
  xxxl: { fontSize: 34, lineHeight: 44 } as TextStyle,
  xxxii: { fontSize: 30, lineHeight: 40 } as TextStyle,
  xxl: { fontSize: 24, lineHeight: 40 } as TextStyle,
  xl: { fontSize: 22, lineHeight: 34 } as TextStyle,
  lg: { fontSize: 18, lineHeight: 32 } as TextStyle,
  md: { fontSize: 16, lineHeight: 26 } as TextStyle,
  sm: { fontSize: 14, lineHeight: 24 } as TextStyle,
  xs: { fontSize: 12, lineHeight: 21 } as TextStyle,
  xxs: { fontSize: 10, lineHeight: 18 } as TextStyle,
}

const $fontWeightStyles = Object.entries(typography.primary).reduce(
  (acc, [weight, fontFamily]) => {
    acc[weight as Weights] = { fontFamily }
    return acc
  },
  {} as Record<Weights, TextStyle>,
)

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text },
]

const $presets: Record<Presets, StyleProp<TextStyle>> = {
  default: $baseStyle,
  bold: [$baseStyle, $fontWeightStyles.bold],
  heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.bold],
  subheading: [$baseStyle, $sizeStyles.md, $fontWeightStyles.medium],
  formLabel: [$baseStyle, $fontWeightStyles.medium],
  formHelper: [$baseStyle, $sizeStyles.sm],
}