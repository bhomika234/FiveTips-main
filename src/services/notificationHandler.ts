import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { CommonActions, NavigationContainerRef } from '@react-navigation/native';
import { AppStackParamList } from '../utils/interfaces';

type NotificationData = {
  screen?: keyof AppStackParamList;
  params?: Record<string, unknown>;
  [key: string]: unknown;
};

type NavigationRefType = {
  current: NavigationContainerRef<AppStackParamList> | null;
};

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
} as any);

// Setup notification channels for Android
export const setupNotificationChannels = async (): Promise<void> => {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Default',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      sound: 'default',
    });
  }
};

// Request notification permissions
export const requestNotificationPermissions = async (): Promise<boolean> => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  
  return finalStatus === 'granted';
};

// Handle notification taps
export const setupNotificationTapHandler = (
  navigationRef: NavigationRefType
): Notifications.Subscription => {
  return Notifications.addNotificationResponseReceivedListener((response) => {
    const data = response.notification.request.content.data as NotificationData;
    
    if (data?.screen && navigationRef.current) {
      // Use requestNavigation to handle the navigation
      navigationRef.current.dispatch(
        CommonActions.navigate({
          name: data.screen,
          params: data.params,
        })
      );
    }
  });
};

// Handle incoming notifications when app is in foreground
export const setupForegroundNotificationHandler = (
  onNotification: (data: NotificationData) => void
): Notifications.Subscription => {
  return Notifications.addNotificationReceivedListener((notification) => {
    onNotification(notification.request.content.data as NotificationData);
  });
};

// Get the FCM token
export const getFcmToken = async (): Promise<string | null> => {
  try {
    const token = await Notifications.getExpoPushTokenAsync();
    return token.data;
  } catch (error) {
    console.error('Error getting FCM token:', error);
    return null;
  }
};
