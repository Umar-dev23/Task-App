import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "./screens/ListScreen";
import showTaskScreen from "./screens/showTaskScreen";
import ContactSupportScreen from "./screens/contactSupport";
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
            name="ContactSupport"
            component={ContactSupportScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
