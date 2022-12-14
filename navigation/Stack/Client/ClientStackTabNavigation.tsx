import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TopTabHomeNavigator } from "./Top/TopTabNavigation";
import { useTheme } from "styled-components";

import { Header } from "../../../components/AppComponents/Header";
import { ChatScreen } from "../../../screens/Client/Chat";
import { ProfileScreen } from "../../../screens/Client/Profile/";
import { PublicationScreen } from "../../../screens/Client/Publication/";
import { SettingsScreen } from "../../../screens/Client/Settings";
import { EditProfileScreen } from "../../../screens/Client/Profile/screens/Edit";
import { SecurityProfileScreen } from "../../../screens/Client/Profile/screens/Security";
import { LogoutProfileScreen } from "../../../screens/Client/Profile/screens/Logout";
import { SupportProfileScreen } from "../../../screens/Client/Profile/screens/Support";
import { AboutProfileScreen } from "../../../screens/Client/Profile/screens/About";
import { ChatingScreen } from "../../../screens/Client/Chat/Chating";
import { LoginScreen } from "../../../screens/Auth/Login";

export type ClientStackParamsList = {
  home: undefined;

  chat: undefined;
  chating: {
    receiver: {id: string, title: string, with: string, avatar: string, interestId: string};
    chatId: string
  };

  publication: undefined;
  settings: undefined;

  profile: undefined;

  editProfile: undefined;
  securityProfile: undefined;
  logoutProfile: undefined;
  supportProfile: undefined;
  aboutProfile: undefined;

  login: undefined;
};

const Tab = createNativeStackNavigator<ClientStackParamsList>();

export const ClientStackHomeNavigator = () => {
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
      <Tab.Screen
        name="chating"
        component={ChatingScreen}
        options={({navigation, route}) => ({
          headerTitle: (props) => <Header title={route.params.receiver.title} backable={true}/>,
          headerBackVisible: false
        })}
      />
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
        name="publication"
        component={PublicationScreen}
        options={{
          headerTitle: (props) => (
            <Header title="Pedido" backable={true} {...props} />
          ),
        }}
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
        <Tab.Screen name="editProfile" component={EditProfileScreen} options={{headerTitle: (props) => <Header title="Minha Conta" backable={true}/>, headerBackVisible: false}}/>

        <Tab.Screen name="securityProfile" component={SecurityProfileScreen}/>
        <Tab.Screen name="logoutProfile" component={LogoutProfileScreen} />
        <Tab.Screen name="supportProfile" component={SupportProfileScreen} />
        <Tab.Screen name="aboutProfile" component={AboutProfileScreen} options={{headerTitle: (props) => <Header title="Sobre A Beecoz" backable={true}/>, headerBackVisible: false}}/>
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
        options={{headerTitle: (props) => <Header title="Configura????es"/>, headerBackVisible: false}}
      />
    </Tab.Navigator>
  );
};

export const StackLoginNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTransparent: true }}>
      <Tab.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
