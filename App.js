import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "./screen/ListScreen";
import showTaskScreen from "./screen/showTaskScreen";
import ContactSupportScreen from "./screen/contactSupport";
import notificationScreen from "./screen/notificationScreen";
import { TaskProvider } from "./utils/TaskContext"; // Import TaskProvider

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ListScreen"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#fff" },
          }}
        >
          <Stack.Screen name="showTaskScreen" component={showTaskScreen} />
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen
            name="notificationScreen"
            component={notificationScreen}
          />
          <Stack.Screen
            name="ContactSupport"
            component={ContactSupportScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
