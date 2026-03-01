import React from "react";
import { StyleSheet } from "react-native";
import { Text, Screen } from "../../Components";
import { AppStackScreenProps } from "../../utils/interfaces";
import { colors, spacing } from "../../theme";

interface HistoryProps extends AppStackScreenProps<"History"> {}

export function History(props: HistoryProps) {
  return (
    <Screen preset="fixed" contentContainerStyle={styles.screenContainer}>
      <Text preset="bold" text="History" style={styles.heading} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xxxl,
  },
  heading: {
    fontSize: 24,
    marginBottom: spacing.md,
    color: colors.text,
  },
  metricsContainer: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: spacing.md,
    color: colors.text,
  },
  metricsGrid: {
    gap: spacing.xs,
  },
  metricRow: {
    flexDirection: "row",
    gap: spacing.xs,
  },
  metricItem: {
    flex: 1,
  },
  searchContainer: {
    marginBottom: spacing.md,
  },
  filtersContainer: {
    marginBottom: spacing.md,
  },
  filterRow: {
    flexDirection: "row",
    paddingHorizontal: spacing.xs,
  },
  filterWrapper: {
    marginRight: spacing.sm,
  },
  filterButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    minWidth: 80,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  filterText: {
    fontSize: 14,
  },
  resultsCount: {
    fontSize: 14,
    color: colors.grey,
    marginBottom: spacing.sm,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.xl,
  },
  loadingFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  loadingText: {
    marginLeft: spacing.sm,
    color: colors.grey,
    fontSize: 14,
  },
  emptyContainer: {
    flexGrow: 1,
  },
});
