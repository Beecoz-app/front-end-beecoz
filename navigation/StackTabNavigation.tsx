import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TopTabHomeNavigator } from "./TopTabNavigation";
import { useTheme } from "styled-components";

import { Header } from "../components/AppComponents/Header";
import { ChatScreen } from "../screens/Chat";
import { ProfileScreen } from "../screens/Profile";
import { PublicationScreen } from "../screens/Publication";
import { SettingsScreen } from "../screens/Settings";
import { EditProfileScreen } from "../screens/Profile/screens/Edit";
import { SecurityProfileScreen } from "../screens/Profile/screens/Security";
import { LogoutProfileScreen } from "../screens/Profile/screens/Logout";
import { SupportProfileScreen } from "../screens/Profile/screens/Support";
import { AboutProfileScreen } from "../screens/Profile/screens/About";
import { ChatingScreen } from "../screens/Chat/Chating";
import { IAutonomous } from "../interfaces/User/Autonomous/IAutonomous";

export type StackParamsList = {
  home: undefined;

  chat: undefined;
  chating: {
    interested: IAutonomous
  }

  order: undefined;
  settings: undefined;

  profile: undefined;

  editProfile: undefined;
  securityProfile: undefined;
  logoutProfile: undefined;
  supportProfile: undefined;
  aboutProfile: undefined;
};

const Tab = createNativeStackNavigator<StackParamsList>();

export const StackHomeNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.main },
      }}
    >
      <Tab.Screen
        name="home"
        component={TopTabHomeNavigator}
        options={{
          headerTitle: (props) => <Header title="Home" />,
        }}
      />
    </Tab.Navigator>
  );
};

export const StackChatNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.main },
      }}
    >
      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{ headerTitle: (props) => <Header title="Chat" /> }}
      />
      <Tab.Screen name="chating" component={ChatingScreen} options={{headerTitle: (props) => <Header title='COlocar o nome da pessoa' /> }}/>
    </Tab.Navigator>
  );
};

export const StackPublicationNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.main },
      }}
    >
      <Tab.Screen
        name="order"
        component={PublicationScreen}
        options={{ headerTitle: (props) => <Header title="Pedido" /> }}
      />
    </Tab.Navigator>
  );
};

export const StackProfileNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.main },
      }}
    >
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{ headerTitle: (props) => <Header title="Perfil" /> }}
      />
      <Tab.Group>
        <Tab.Screen name="editProfile" component={EditProfileScreen} />

        <Tab.Screen name="securityProfile" component={SecurityProfileScreen} />
        <Tab.Screen name="logoutProfile" component={LogoutProfileScreen} />
        <Tab.Screen name="supportProfile" component={SupportProfileScreen} />
        <Tab.Screen name="aboutProfile" component={AboutProfileScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export const StackSettingsNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.main },
      }}
    >
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{ headerTitle: (props) => <Header title="Configurações" /> }}
      />
    </Tab.Navigator>
  );
};
