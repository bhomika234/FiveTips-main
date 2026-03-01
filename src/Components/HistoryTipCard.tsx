import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from './Text';
import { StockLogoEnhanced } from './StockLogoEnhanced';
import { colors, spacing } from '../theme';
import { ITipDisplay } from '../types/tips.types';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

interface HistoryTipCardProps {
  tip: ITipDisplay;
  onPress?: () => void;
}

export function HistoryTipCard({ tip, onPress }: HistoryTipCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'High':
        return ['#01B98F', '#019B77'];
      case 'Active':
        return ['#3B82F6', '#1D4ED8'];
      default:
        return ['#6B7280', '#4B5563'];
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const calculatePotentialReturn = () => {
    const potential = ((tip.targetPrice - tip.buyTrigger) / tip.buyTrigger) * 100;
    return potential.toFixed(1);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.companyInfo}>
          <StockLogoEnhanced 
            symbol={tip.symbol}
            size={45}
            fallbackText={tip.companyName}
          />
          <View style={styles.companyDetails}>
            <Text 
              text={tip.companyName}
              weight="bold"
              style={styles.companyName}
            />
            <Text 
              text={tip.symbol}
              style={styles.symbol}
            />
          </View>
        </View>
        
        <LinearGradient
          colors={getStatusColor(tip.status)}
          style={styles.statusBadge}
        >
          <Text 
            text={tip.status}
            weight="bold"
            style={styles.statusText}
          />
        </LinearGradient>
      </View>

      {/* Metrics Row */}
      <View style={styles.metricsRow}>
        <View style={styles.metric}>
          <Text text="Buy Price" style={styles.metricLabel} />
          <Text 
            text={`$${tip.buyTrigger.toFixed(2)}`}
            weight="bold"
            style={styles.metricValue}
          />
        </View>
        
        <View style={styles.metric}>
          <Text text="Target" style={styles.metricLabel} />
          <Text 
            text={`$${tip.targetPrice.toFixed(2)}`}
            weight="bold"
            style={styles.metricValue}
          />
        </View>
        
        <View style={styles.metric}>
          <Text text="Potential" style={styles.metricLabel} />
          <View style={styles.potentialContainer}>
            <Feather 
              name="trending-up" 
              size={14} 
              color={colors.primary} 
            />
            <Text 
              text={`+${calculatePotentialReturn()}%`}
              weight="bold"
              style={styles.potentialValue}
            />
          </View>
        </View>
      </View>

      {/* Footer Row */}
      <View style={styles.footerRow}>
        <View style={styles.confidenceContainer}>
          <View style={styles.confidenceBar}>
            <View 
              style={[
                styles.confidenceFill,
                { width: `${tip.confidence}%` }
              ]}
            />
          </View>
          <Text 
            text={`${tip.confidence}% confidence`}
            style={styles.confidenceText}
          />
        </View>
        
        <Text 
          text={formatDate(tip.date)}
          style={styles.dateText}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  companyDetails: {
    marginLeft: spacing.sm,
    flex: 1,
  },
  companyName: {
    fontSize: 16,
    color: colors.text,
  },
  symbol: {
    fontSize: 14,
    color: colors.grey,
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  statusText: {
    color: colors.white,
    fontSize: 12,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  metric: {
    alignItems: 'center',
    flex: 1,
  },
  metricLabel: {
    fontSize: 12,
    color: colors.grey,
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 16,
    color: colors.text,
  },
  potentialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  potentialValue: {
    fontSize: 16,
    color: colors.primary,
    marginLeft: 4,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  confidenceContainer: {
    flex: 1,
    marginRight: spacing.sm,
  },
  confidenceBar: {
    height: 4,
    backgroundColor: '#E5E5E5',
    borderRadius: 2,
    marginBottom: 4,
  },
  confidenceFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  confidenceText: {
    fontSize: 12,
    color: colors.grey,
  },
  dateText: {
    fontSize: 12,
    color: colors.grey,
  },
});