import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { useTheme } from "styled-components";
import { ConcludedPublication } from "../screens/Home/ConcludedPublication";
import { OpenedPublication } from "../screens/Home/OpenedPublication";
import { ProgressPublication } from "../screens/Home/ProgressPublication";

const Tab = createMaterialTopTabNavigator();

export const TopTabHomeNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.white,
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.yellow_p,
        },
        tabBarLabelStyle: { fontSize: 16 },
        tabBarItemStyle: {
          flex: 1,
          height: 58,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarContentContainerStyle: {
          flex: 1,
          height: 58,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: theme.colors.main,
        },
        tabBarInactiveTintColor: theme.colors.gray_100,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="progress posts"
        component={ProgressPublication}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{alignSelf: 'center', width: 100,height: 30 , justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: focused ? theme.colors.white : theme.colors.gray_100,
                  fontWeight: focused ? "bold" : "normal",
                  alignSelf: 'center'
                }}
              >
                Em andamento
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="opened posts" component={OpenedPublication} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{alignSelf: 'center', width: 100,height: 30 , justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: focused ? theme.colors.white : theme.colors.gray_100,
                  fontWeight: focused ? "bold" : "normal",
                  alignSelf: 'center'
                }}
              >
                Abertos
              </Text>
            </View>
          ),
        }}/>
      <Tab.Screen name="conluded posts" component={ConcludedPublication} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{alignSelf: 'center', width: 100,height: 30 , justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: focused ? theme.colors.white : theme.colors.gray_100,
                  fontWeight: focused ? "bold" : "normal",
                  alignSelf: 'center'
                }}
              >
                Concluídos
              </Text>
            </View>
          ),
        }}/>
    </Tab.Navigator>
  );
};
