import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BottomTabNavigator } from "./navigation/BottomTabNavigator";
import { MainContextProvider } from "./contexts/MainContext";
import { StackLoginNavigator } from "./navigation/StackTabNavigation";
import { AuthStackNavigator } from "./navigation/Auth/AuthStackNavigator";
import { MainStack } from "./navigation/MainRoutes";

export default function App() {
  return (
    <MainContextProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          {/* <BottomTabNavigator/> */}
          {/* <StackLoginNavigator/> */}
          <MainStack/>
          <StatusBar style="light" />
        </ThemeProvider>
      </NavigationContainer>
    </MainContextProvider>
  );
}
