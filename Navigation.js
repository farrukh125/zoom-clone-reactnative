import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import MeetingRoom from "./screens/MeetingRoom";

function Navigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer initialRouteName={Home}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Room"
          component={MeetingRoom}
          options={{
            title: "Start a Meeting",
            headerStyle: {
              backgroundColor: "#1c1c1c",
              shadowOpacity: 0,
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
