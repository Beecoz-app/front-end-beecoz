import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useTheme } from "styled-components";
import { LoginScreen } from "../../screens/Auth/Login";
import { RegisterScreen } from "../../screens/Auth/Register";
import { Header } from "../../components/AppComponents/Header";
import { ClientRegisterNameScreen } from "../../screens/Auth/Register/Client/Name";
import { ClientRegisterLoginScreen } from "../../screens/Auth/Register/Client/Login";
import { ClientRegisterPasswordScreen } from "../../screens/Auth/Register/Client/Password";
import { ClientRegisterStateScreen } from "../../screens/Auth/Register/Client/State";
import { ClientRegisterCPFScreen } from "../../screens/Auth/Register/Client/CPF";

export type AuthStackParams = {
  login: undefined;

  register: undefined;

  registerClientName: undefined;
  registerClientLogin: undefined;
  registerClientPassword: undefined;
  registerClientState: undefined;
  registerClientCPF: undefined;


};

const Tab = createNativeStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="login"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.main },
      }}
    >
      <Tab.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="register" component={RegisterScreen} options={{ headerTitle: (props) => <Header title="Perfil" /> }}/>

      <Tab.Group >
        <Tab.Screen name="registerClientName" component={ClientRegisterNameScreen}/>
        <Tab.Screen name="registerClientLogin" component={ClientRegisterLoginScreen}/>
        <Tab.Screen name="registerClientPassword" component={ClientRegisterPasswordScreen}/>
        <Tab.Screen name="registerClientState" component={ClientRegisterStateScreen}/>
        <Tab.Screen name="registerClientCPF" component={ClientRegisterCPFScreen}/>
      </Tab.Group>
    </Tab.Navigator>
  );
};
