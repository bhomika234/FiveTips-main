import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "./Text";
import { colors } from "../theme";

interface StockLogoProps {
  symbol: string;
  size?: number;
  fallbackText?: string;
}

// Multiple logo sources to try
const getLogoUrls = (symbol: string) => [
  `https://api.elbstream.com/logos/symbol/${symbol.toUpperCase()}`,
  `https://financialmodelingprep.com/image-stock/${symbol.toUpperCase()}.png`,
  `https://logo.clearbit.com/${getCompanyDomain(symbol)}`,
];

// Map symbols to known company domains for Clearbit API
function getCompanyDomain(symbol: string): string {
  const domainMap: Record<string, string> = {
    AAPL: "apple.com",
    GOOGL: "google.com",
    GOOG: "google.com",
    MSFT: "microsoft.com",
    AMZN: "amazon.com",
    TSLA: "tesla.com",
    NFLX: "netflix.com",
    META: "meta.com",
    NVDA: "nvidia.com",
    AMD: "amd.com",
  };

  return domainMap[symbol.toUpperCase()] || `${symbol.toLowerCase()}.com`;
}

export function StockLogoAdvanced({
  symbol,
  size = 40,
  fallbackText,
}: StockLogoProps) {
  const [loading, setLoading] = useState(true);
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  const logoUrls = getLogoUrls(symbol);
  const displayText = fallbackText
    ? fallbackText.slice(0, 2).toUpperCase()
    : symbol.toUpperCase().slice(0, 2);

  const containerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  // Reset state when symbol changes
  useEffect(() => {
    setLoading(true);
    setCurrentUrlIndex(0);
    setShowFallback(false);
  }, [symbol]);

  // Timeout fallback
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        console.log(`Logo loading timeout for ${symbol}, showing fallback`);
        setShowFallback(true);
        setLoading(false);
      }
    }, 4000);

    return () => clearTimeout(timeout);
  }, [loading, symbol]);

  const handleImageLoad = () => {
    console.log(
      `Logo loaded successfully for ${symbol} from URL index ${currentUrlIndex}`
    );
    setLoading(false);
    setShowFallback(false);
  };

  const handleImageError = () => {
    console.log(`Logo failed from URL index ${currentUrlIndex} for ${symbol}`);

    // Try next URL
    if (currentUrlIndex < logoUrls.length - 1) {
      setCurrentUrlIndex(currentUrlIndex + 1);
    } else {
      // All URLs failed, show fallback
      setLoading(false);
      setShowFallback(true);
    }
  };

  // Show fallback
  if (showFallback) {
    return (
      <View style={[styles.fallbackContainer, containerStyle]}>
        <Text
          text={displayText}
          weight="bold"
          style={[styles.fallbackText, { fontSize: size * 0.35 }]}
        />
      </View>
    );
  }

  // Show loading
  if (loading && currentUrlIndex === 0) {
    return (
      <View style={[styles.loadingContainer, containerStyle]}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  // Show image
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        key={`${symbol}-${currentUrlIndex}`} // Force re-render on URL change
        source={{ uri: logoUrls[currentUrlIndex] }}
        style={[styles.image, containerStyle]}
        onLoad={handleImageLoad}
        onError={handleImageError}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackContainer: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    color: colors.white,
    textAlign: "center",
    includeFontPadding: false,
  },
});
