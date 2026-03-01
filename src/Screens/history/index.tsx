import React, { useState, useCallback, useMemo } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { Text, Screen, TextField, EmptyState } from "../../Components";
import { PerformanceCard } from "../../Components/PerformanceCard";
import { HistoryTipCard } from "../../Components/HistoryTipCard";
import { AppStackScreenProps } from "../../utils/interfaces";
import { colors, spacing } from "../../theme";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useHistory } from "../../context/HistoryContext";
import { HistoryFilters } from "../../types/history.types";

interface HistoryProps extends AppStackScreenProps<"History"> {}

export function History(props: HistoryProps) {
  const {
    displayTips,
    filters,
    metrics = null,
    loading,
    error,
    hasMore,
    updateFilters,
    searchTips,
    loadMore,
    refreshMetrics,
    fetchHistory,
  } = useHistory();

  const [refreshing, setRefreshing] = useState(false);

  const filterOptions = [];

  const dateRangeOptions = [
    { label: "All Time", value: "all" as const },
    { label: "This Week", value: "thisWeek" as const },
    { label: "This Month", value: "thisMonth" as const },
    { label: "This Year", value: "thisYear" as const },
  ];

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await Promise.all([fetchHistory(true), refreshMetrics()]);
    } finally {
      setRefreshing(false);
    }
  };

  const handleFilterChange = useCallback((type: "status" | "dateRange", value: string) => {
    updateFilters({ [type]: value });
  }, [updateFilters]);

  const handleSearch = useCallback((searchTerm: string) => {
    updateFilters({ search: searchTerm });
  }, [updateFilters]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      loadMore();
    }
  };

  const handleTipPress = (tip: any) => {
    // Navigate to tip details
    props.navigation.navigate("Details", { tip });
  };

  const headerElement = useMemo(() => (
    <View>
      {metrics && (
        <View style={styles.metricsContainer}>
          <Text text="Performance Overview" weight="bold" style={styles.sectionTitle} />
          <View style={styles.metricsGrid}>
            <View style={styles.metricRow}>
              <View style={styles.metricItem}>
                <PerformanceCard title="Total Tips" value={metrics.totalTips} gradient={["#01B98F", "#019B77"]} icon={<Feather name="trending-up" size={20} color={colors.white} />} />
              </View>
              <View style={styles.metricItem}>
                <PerformanceCard title="Approved" value={metrics.approvedTips} subtitle={`${metrics.approvalRate}% rate`} gradient={["#3B82F6", "#1D4ED8"]} icon={<Feather name="check-circle" size={20} color={colors.white} />} />
              </View>
            </View>
            <View style={styles.metricRow}>
              <View style={styles.metricItem}>
                <PerformanceCard title="Live Tips" value={metrics.liveTips} gradient={["#F59E0B", "#D97706"]} icon={<Feather name="activity" size={20} color={colors.white} />} />
              </View>
              <View style={styles.metricItem}>
                <PerformanceCard title="Avg Confidence" value={`${metrics.avgConfidence}%`} gradient={["#8B5CF6", "#7C3AED"]} icon={<Feather name="target" size={20} color={colors.white} />} />
              </View>
            </View>
          </View>
        </View>
      )}
      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterRow}>
            {dateRangeOptions.map((option) => (
              <TouchableOpacity key={option.value} onPress={() => handleFilterChange("dateRange", option.value)} style={styles.filterWrapper}>
                <LinearGradient colors={filters.dateRange === option.value ? ["#3B82F6", "#1D4ED8"] : ["#ffffff", "#ffffff"]} style={styles.filterButton}>
                  <Text text={option.label} weight="bold" style={[styles.filterText, { color: filters.dateRange === option.value ? colors.white : colors.grey }]} />
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      {displayTips.length > 0 && (
        <Text text={`${displayTips.length} tips found`} style={styles.resultsCount} />
      )}
    </View>
  ), [metrics, filters.dateRange, displayTips.length, handleFilterChange, filters.dateRange]);

  const renderFooter = () => null; // pagination removed

  const renderEmptyState = () => {
    if (loading && displayTips.length === 0) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text text="Loading history..." style={styles.loadingText} />
        </View>
      );
    }

    if (error) {
      return (
        <EmptyState
          heading="Failed to load history"
          content={error}
          button="Try Again"
          buttonOnPress={() => fetchHistory(true)}
        />
      );
    }

    if (displayTips.length === 0) {
      return (
        <EmptyState
          heading="No tips found"
          content={
            filters.search ||
            filters.status !== "all" ||
            filters.dateRange !== "all"
              ? "Try adjusting your filters to see more results"
              : "No tips available in your history"
          }
          button="Reset Filters"
          buttonOnPress={() =>
            updateFilters({ search: "", status: "all", dateRange: "all" })
          }
        />
      );
    }

    return null;
  };

  return (
    <Screen preset="fixed" contentContainerStyle={styles.screenContainer}>
      <Text preset="bold" text="History" style={styles.heading} />

      {/* Search bar kept outside FlatList to preserve focus */}
      <View style={styles.searchContainer}>
        <TextField
          value={filters.search}
          onChangeText={handleSearch}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search tips by symbol or company"
          LeftAccessory={() => (
            <Feather
              name="search"
              size={20}
              color={colors.grey}
              style={{ marginLeft: spacing.sm }}
            />
          )}
        />
      </View>
      <FlatList
        data={displayTips}
        renderItem={({ item }) => (
          <HistoryTipCard tip={item} onPress={() => handleTipPress(item)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={headerElement}
        ListEmptyComponent={renderEmptyState}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          displayTips.length === 0 ? styles.emptyContainer : undefined
        }
      />
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
