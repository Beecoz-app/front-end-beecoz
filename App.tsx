import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { AppGenericButton } from "./components/AppComponents/Buttons/Generic";
import { AppSpecificButton } from "./components/AppComponents/Buttons/SpecificButton";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <Text>Hello</Text>
        <AppSpecificButton title="aaa" disabled={true}/>
        <StatusBar style="auto" />
      </ThemeProvider>
    </View>
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
