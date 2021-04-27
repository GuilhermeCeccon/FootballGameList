import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitialPage from "./src/views/InitialPage";
import FasesPage from "./src/views/FasesPage";
import JogosPage from "./src/views/JogosPage";
import "react-native-gesture-handler";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialPage">
        <Stack.Screen
          name="InitialPage"
          component={InitialPage}
        />
       <Stack.Screen
          name="FasesPage"
          component={FasesPage}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="JogosPage"
          component={JogosPage}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});