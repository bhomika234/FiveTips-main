import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Notification channels (Android)
const CHANNEL_ID = "bullwise-daily-alerts";

export const setupNotificationChannels = async () => {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
      name: "Bullwise Alerts",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
      sound: "default",
    });
  }
};

export const requestNotificationPermissions = async (): Promise<boolean> => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  return finalStatus === "granted";
};

export const scheduleDailyNotification = async (
  time: { hour: number; minute: number } = { hour: 9, minute: 0 }
) => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Set notification time to 9:00 AM ET (convert to local time if needed)
    const now = new Date();
    const notificationTime = new Date();
    notificationTime.setHours(time.hour, time.minute, 0, 0);

    // If it's already past 9 AM today, schedule for tomorrow
    if (now > notificationTime) {
      notificationTime.setDate(notificationTime.getDate() + 1);
    }

    // Schedule the notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "📈 New Stock Picks Available!",
        body: "Check out today's top stock picks and market insights.",
        data: { screen: "Home" },
        sound: "default",
      },
      trigger: {
        hour: time.hour,
        minute: time.minute,
        repeats: true,
      },
    });

    console.log("Daily notification scheduled for", notificationTime);
  } catch (error) {
    console.error("Error scheduling notification:", error);
  }
};

export const cancelAllScheduledNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};

// Handle notification response (when user taps on notification)
export const setNotificationHandler = (
  handler: (response: Notifications.NotificationResponse) => void
) => {
  const subscription =
    Notifications.addNotificationResponseReceivedListener(handler);
  return () => subscription.remove();
};
