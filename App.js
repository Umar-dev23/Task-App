// App.js
import React from "react";
import { useEffect } from "react";
import { AppState } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "./screens/ListScreen";

import ContactSupportScreen from "./screens/contactSupport";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ListScreen"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
