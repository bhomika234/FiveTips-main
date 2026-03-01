import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import { Text } from './Text';
import { colors } from '../theme';

interface StockLogoProps {
  symbol: string;
  size?: number;
  fallbackText?: string;
}

// Premium logo sources with better quality
const getLogoUrls = (symbol: string) => [
  // Try SVG first (best quality)
  `https://logo.stockanalysis.com/${symbol.toLowerCase()}.svg`,
  // High-res PNG from Parqet
  `https://assets.parqet.com/logos/symbol/${symbol.toUpperCase()}?format=png&size=300`,
  // Alternative high-quality sources
  `https://financialmodelingprep.com/image-stock/${symbol.toUpperCase()}.png`,
  // Yahoo Finance logos (often high quality)
  `https://logo.clearbit.com/${getCompanyDomain(symbol)}`,
];

// Map symbols to company domains for Clearbit
function getCompanyDomain(symbol: string): string {
  const domainMap: Record<string, string> = {
    'AAPL': 'apple.com',
    'GOOGL': 'google.com',
    'GOOG': 'google.com',
    'MSFT': 'microsoft.com',
    'AMZN': 'amazon.com',
    'TSLA': 'tesla.com',
    'NFLX': 'netflix.com',
    'META': 'meta.com',
    'NVDA': 'nvidia.com',
    'AMD': 'amd.com',
    'COST': 'costco.com',
    'ADBE': 'adobe.com',
    'CRM': 'salesforce.com',
    'ORCL': 'oracle.com',
    'UBER': 'uber.com',
    'SHOP': 'shopify.com',
  };
  
  return domainMap[symbol.toUpperCase()] || `${symbol.toLowerCase()}.com`;
}

export function StockLogoEnhanced({ symbol, size = 40, fallbackText }: StockLogoProps) {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  const logoUrls = getLogoUrls(symbol);
  const displayText = fallbackText
    ? fallbackText.slice(0, 2).toUpperCase()
    : symbol.toUpperCase().slice(0, 2);

  const containerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

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
      }, 2500); // Faster timeout for better UX

      return () => clearTimeout(timeout);
    }
  }, [currentUrlIndex, imageLoaded, allFailed]);

  const handleImageLoad = () => {
    console.log(`Enhanced logo loaded for ${symbol} from index ${currentUrlIndex}`);
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.log(`Enhanced logo failed for ${symbol} at index ${currentUrlIndex}`);
    
    if (currentUrlIndex < logoUrls.length - 1) {
      setCurrentUrlIndex(prev => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  // Enhanced fallback with gradient
  if (allFailed) {
    return (
      <View style={[styles.fallbackContainer, containerStyle]}>
        <View style={styles.gradientOverlay}>
          <Text
            text={displayText}
            weight="bold"
            style={[styles.fallbackText, { fontSize: size * 0.3 }]}
          />
        </View>
      </View>
    );
  }

  // Enhanced image display
  return (
    <View style={[styles.logoContainer, containerStyle]}>
      {/* Premium logo display */}
      <View style={styles.imageWrapper}>
        <Image
          key={`${symbol}-${currentUrlIndex}`}
          source={{ uri: logoUrls[currentUrlIndex] }}
          style={[
            styles.logoImage,
            {
              width: size * 0.8,
              height: size * 0.8,
              opacity: imageLoaded ? 1 : 0,
            }
          ]}
          onLoad={handleImageLoad}
          onError={handleImageError}
          resizeMode="contain"
          // Better image quality settings
          fadeDuration={200}
          {...(Platform.OS === 'android' && {
            resizeMethod: 'resize', // Better quality on Android
          })}
        />
      </View>
      
      {/* Loading fallback */}
      {!imageLoaded && (
        <View style={[styles.fallbackOverlay, containerStyle]}>
          <Text
            text={displayText}
            weight="bold"
            style={[styles.fallbackText, { fontSize: size * 0.3 }]}
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
    // Premium styling
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  logoImage: {
    // Enhanced image styling
    backgroundColor: "transparent",
  },
  fallbackContainer: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  gradientOverlay: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  fallbackText: {
    color: colors.white,
    textAlign: "center",
    includeFontPadding: false,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  fallbackOverlay: {
    position: "absolute",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});