import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Button } from "react-native-paper";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const notificationScreen = () => {
  useEffect(() => {
    registerToShowNotification();
  }, []);

  async function registerToShowNotification() {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notifications...");
      return;
    }
  }

  //basic
  const handleBasicNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Basic Notification",
        body: "This is a basic Notifcation",
      },
      trigger: null,
    });
  };

  //intermediate
  const handleIntermediateNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Intermediate Notification",
        body: "This notification has additional options.",
        data: { extraData: "Some extra data" },
      },
      trigger: { seconds: 1 },
    });
  };

  const handleAdvancedNotifcation = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Advanced Notification",
        body: "This notification uses a custom sound and icon.",
        sound: "./../assets/notifications.wav", // change to a custom sound if set up
      },
      trigger: { seconds: 1 },
    });
  };
  return (
    <view>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.paragraph}>
        Demonstrate the Implementation of Notification in React Native
      </Text>
      <TouchableOpacity
        style={styles.Basicbutton}
        onPress={handleBasicNotification}
      >
        <Text style={styles.buttonText}>Basic Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.interbutton}
        onPress={handleIntermediateNotification}
      >
        <Text style={styles.buttonText}>Intermediate Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.AdvanceButton}
        onPress={handleAdvancedNotifcation}
      >
        <Text style={styles.buttonText}>Advanced Notification</Text>
      </TouchableOpacity>
    </view>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#FF7B7B",
    marginBottom: 10,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3939",
    marginBottom: 20,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  Basicbutton: {
    backgroundColor: "#FF7B7B",
    borderRadius: 8,
    padding: 18,
    alignItems: "center",
    marginTop: 10,
  },
  interbutton: {
    backgroundColor: "#4839",
    borderRadius: 8,
    padding: 18,
    alignItems: "center",
    marginTop: 10,
  },
  AdvanceButton: {
    backgroundColor: "#458",
    borderRadius: 8,
    padding: 18,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
export default notificationScreen;
