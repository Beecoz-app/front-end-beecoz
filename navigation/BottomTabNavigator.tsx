import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import {
  StackChatNavigator,
  StackHomeNavigator,
  StackOrderNavigator,
  StackProfileNavigator,
  StackSettingsNavigator,
} from "./StackTabNavigation";

import IconIoni from "react-native-vector-icons/Ionicons";
import IconFontisto from "react-native-vector-icons/Fontisto";
import IconAwesome from "react-native-vector-icons/FontAwesome";



type BottomParamsList = {
  homeBottom: undefined;
  chatBottom: undefined;
  orderBottom: undefined;
  profileBottom: undefined;
  settingsBottom: undefined;
};

const Tab = createBottomTabNavigator<BottomParamsList>();

export const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: theme.colors.main,
          borderRadius: 15,
          height: 60,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="homeBottom"
        component={StackHomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconIoni
                style={{
                  fontSize: 20,
                  color: focused
                    ? theme.colors.yellow_p
                    : theme.colors.gray_100,
                }}
                name="home-sharp"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="chatBottom"
        component={StackChatNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconIoni
                style={{
                  fontSize: 20,
                  color: focused
                    ? theme.colors.yellow_p
                    : theme.colors.gray_100,
                }}
                name="chatbox"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="orderBottom"
        component={StackOrderNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <IconFontisto
                style={{
                  fontSize: 30,
                  color: "#fff",
                  alignSelf: "center",
                }}
                name="plus-a"
              />
            </View>
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                top: -30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: 60,
                  backgroundColor: theme.colors.background,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    backgroundColor: theme.colors.yellow_p,
                    alignSelf: "center",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  {props.children}
                </View>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="profileBottom"
        component={StackProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconAwesome
                style={{
                  fontSize: 20,
                  color: focused
                    ? theme.colors.yellow_p
                    : theme.colors.gray_100,
                }}
                name="user"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="settingsBottom"
        component={StackSettingsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <IconIoni
                style={{
                  fontSize: 20,
                  color: focused
                    ? theme.colors.yellow_p
                    : theme.colors.gray_100,
                }}
                name="settings-sharp"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
