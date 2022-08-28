import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BottomTabNavigator } from "./navigation/BottomTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <BottomTabNavigator/>
        <StatusBar style="auto" />
      </ThemeProvider>
    </NavigationContainer>
  );
}
