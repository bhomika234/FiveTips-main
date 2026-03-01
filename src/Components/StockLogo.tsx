import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "./Text";
import { colors } from "../theme";

interface StockLogoProps {
  symbol: string;
  size?: number;
  fallbackText?: string;
}

// Multiple reliable APIs for stock logos (ordered by quality and reliability)
const getLogoUrls = (symbol: string) => [
  `https://assets.parqet.com/logos/symbol/${symbol.toUpperCase()}?format=png&size=240`, // Higher resolution
  `https://logo.stockanalysis.com/${symbol.toLowerCase()}.svg`, // Vector format
  `https://financialmodelingprep.com/image-stock/${symbol.toUpperCase()}.png`,
  `https://eodhistoricaldata.com/img/logos/US/${symbol.toUpperCase()}.png`,
];

export function StockLogo({ symbol, size = 40, fallbackText }: StockLogoProps) {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  const logoUrls = getLogoUrls(symbol);
  console.log(`Logo URLs for ${symbol}:`, logoUrls);
  const displayText = fallbackText
    ? fallbackText.slice(0, 2).toUpperCase()
    : symbol.toUpperCase().slice(0, 2);

  const containerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  console.log(
    `Trying logo for ${symbol} from URL: ${logoUrls[currentUrlIndex]}`
  );

  // Reset when symbol changes
  useEffect(() => {
    setCurrentUrlIndex(0);
    setImageLoaded(false);
    setAllFailed(false);
  }, [symbol]);

  // Timeout for each URL attempt
  useEffect(() => {
    if (!imageLoaded && !allFailed) {
      const timeout = setTimeout(() => {
        handleImageError();
      }, 3000); // 3 second timeout per URL

      return () => clearTimeout(timeout);
    }
  }, [currentUrlIndex, imageLoaded, allFailed]);

  const handleImageLoad = () => {
    console.log(
      `Logo loaded successfully for ${symbol} from index ${currentUrlIndex}`
    );
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.log(`Logo failed for ${symbol} at index ${currentUrlIndex}`);

    // Try next URL
    if (currentUrlIndex < logoUrls.length - 1) {
      setCurrentUrlIndex((prev) => prev + 1);
    } else {
      // All URLs failed
      console.log(`All logo URLs failed for ${symbol}, showing fallback`);
      setAllFailed(true);
    }
  };

  // Show fallback if all URLs failed
  if (allFailed) {
    return (
      <View style={[styles.fallbackContainer, containerStyle]}>
        <Text
          text={displayText}
          weight="bold"
          style={[styles.fallbackText, { fontSize: size * 0.32 }]}
        />
      </View>
    );
  }

  // Show image with enhanced styling
  return (
    <View style={[styles.logoContainer, containerStyle]}>
      {/* Logo image with enhanced styling */}
      <Image
        key={`${symbol}-${currentUrlIndex}`}
        source={{ uri: logoUrls[currentUrlIndex] }}
        style={[
          styles.logoImage,
          {
            width: size * 0.75, // Slightly smaller for padding
            height: size * 0.75,
            opacity: imageLoaded ? 1 : 0,
          }
        ]}
        onLoad={handleImageLoad}
        onError={handleImageError}
        resizeMode="contain"
      />
      
      {/* Enhanced fallback while loading */}
      {!imageLoaded && (
        <View style={[styles.fallbackOverlay, containerStyle]}>
          <Text
            text={displayText}
            weight="bold"
            style={[styles.fallbackText, { fontSize: size * 0.32 }]}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    // Enhanced shadow and styling
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
    borderWidth: 0.5,
    borderColor: "#E5E5E5",
  },
  logoImage: {
    // Better image rendering
    borderRadius: 4,
  },
  fallbackContainer: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  fallbackText: {
    color: colors.white,
    textAlign: "center",
    includeFontPadding: false,
    fontWeight: '600',
  },
  fallbackOverlay: {
    position: "absolute",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
