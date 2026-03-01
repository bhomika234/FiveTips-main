import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './Text';
import { colors } from '../theme';

interface StockLogoProps {
  symbol: string;
  size?: number;
  fallbackText?: string;
}

/**
 * Simple stock logo component that always shows a branded text fallback
 * This ensures we always have a visible logo while the API-based version loads
 */
export function StockLogoSimple({ symbol, size = 40, fallbackText }: StockLogoProps) {
  const displayText = fallbackText
    ? fallbackText.slice(0, 2).toUpperCase()
    : symbol.toUpperCase().slice(0, 2);

  const containerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        text={displayText}
        weight="bold"
        style={[styles.text, { fontSize: size * 0.35 }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    textAlign: "center",
    includeFontPadding: false,
  },
});