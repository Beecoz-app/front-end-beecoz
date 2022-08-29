import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BottomTabNavigator } from "./navigation/BottomTabNavigator";
import { MainContextProvider } from "./contexts/MainContext";

export default function App() {
  return (
    <MainContextProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <BottomTabNavigator />
          <StatusBar style="inverted" />
        </ThemeProvider>
      </NavigationContainer>
    </MainContextProvider>
  );
}
