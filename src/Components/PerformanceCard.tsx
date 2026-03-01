import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './Text';
import { colors, spacing } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';

interface PerformanceCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
  gradient?: string[];
  icon?: React.ReactNode;
}

export function PerformanceCard({ 
  title, 
  value, 
  subtitle, 
  color = colors.primary,
  gradient,
  icon 
}: PerformanceCardProps) {
  const content = (
    <View style={styles.content}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      
      <View style={styles.textContainer}>
        <Text 
          text={title}
          style={styles.title}
          weight="medium"
        />
        
        <Text 
          text={value.toString()}
          style={styles.value}
          weight="bold"
        />
        
        {subtitle && (
          <Text 
            text={subtitle}
            style={styles.subtitle}
            weight="medium"
          />
        )}
      </View>
    </View>
  );

  return gradient ? (
    <LinearGradient 
      colors={gradient as [string, string, ...string[]]} 
      start={[0, 0]} 
      end={[1, 1]} 
      style={styles.card}
    >
      {content}
    </LinearGradient>
  ) : (
    <View style={[styles.card, { backgroundColor: color }]}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minHeight: 80,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: spacing.sm,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 4,
  },
  value: {
    color: colors.white,
    fontSize: 24,
    lineHeight: 28,
  },
  subtitle: {
    color: colors.white,
    fontSize: 12,
    opacity: 0.8,
    marginTop: 2,
  },
});