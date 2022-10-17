import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { MainContextProvider } from "./contexts/MainContext";
import { MainStack } from "./navigation/MainRoutes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./services/firebase";
import { db } from "./services/firebase";


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
