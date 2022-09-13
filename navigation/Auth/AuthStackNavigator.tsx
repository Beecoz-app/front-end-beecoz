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
import { InsertClientRGPhotoScreen } from "../../screens/Auth/Register/Client/InsertRGPhoto";
import { InsertClientProofPhotoScreen } from "../../screens/Auth/Register/Client/insertProofPhoto";
import { InsertClientPersonalPhotoScreen } from "../../screens/Auth/Register/Client/insertPersonalPhoto";
import { AutonomousRegisterNameScreen } from "../../screens/Auth/Register/Autonomous/Name";
import { AutonomousRegisterLoginScreen } from "../../screens/Auth/Register/Autonomous/Login";
import { AutonomousRegisterPasswordScreen } from "../../screens/Auth/Register/Autonomous/Password";
import { AutonomousRegisterCPFScreen } from "../../screens/Auth/Register/Autonomous/CPF";
import { InsertAutonomousRGPhotoScreen } from "../../screens/Auth/Register/Autonomous/InsertRGPhoto";
import { InsertAutonomousProofPhotoScreen } from "../../screens/Auth/Register/Autonomous/insertProofPhoto";
import { InsertAutonomousPersonalPhotoScreen } from "../../screens/Auth/Register/Autonomous/insertPersonalPhoto";
import { AutonomousRegisterCNPJScreen } from "../../screens/Auth/Register/Autonomous/CNPJ";
import { AutonomousRegisterChooseServicesScreen } from "../../screens/Auth/Register/Autonomous/ChooseServices";
import { AutonomousRegisterStateScreen } from "../../screens/Auth/Register/Autonomous/State";

export type AuthStackParams = {
  login: undefined;

  register: undefined;

  registerClientName: undefined;
  registerClientLogin: undefined;
  registerClientPassword: undefined;
  registerClientState: undefined;
  registerClientCPF: undefined;

  insertCLientRGPhoto: undefined;
  insertCLientProofPhoto: undefined;
  insertCLientPersonalPhoto: undefined;

  registerAutonomousName: undefined;
  registerAutonomousLogin: undefined;
  registerAutonomousPassword: undefined;
  registerAutonomousState: undefined;
  registerAutonomousCPF: undefined;
  registerAutonomousCNPJ: undefined;
  registerAutonomousChooseServices: undefined;

  insertAutonomousRGPhoto: undefined;
  insertAutonomousProofPhoto: undefined;
  insertAutonomousPersonalPhoto: undefined;
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
      <Tab.Screen
        name="register"
        component={RegisterScreen}
        options={{ headerTitle: (props) => <Header title="Perfil" /> }}
      />

      <Tab.Group>
        <Tab.Screen
          name="registerClientName"
          component={ClientRegisterNameScreen}
        />
        <Tab.Screen
          name="registerClientLogin"
          component={ClientRegisterLoginScreen}
        />
        <Tab.Screen
          name="registerClientPassword"
          component={ClientRegisterPasswordScreen}
        />
        <Tab.Screen
          name="registerClientState"
          component={ClientRegisterStateScreen}
        />
        <Tab.Screen
          name="registerClientCPF"
          component={ClientRegisterCPFScreen}
        />

        <Tab.Screen
          name="insertCLientRGPhoto"
          component={InsertClientRGPhotoScreen}
        />
        <Tab.Screen
          name="insertCLientProofPhoto"
          component={InsertClientProofPhotoScreen}
        />
        <Tab.Screen
          name="insertCLientPersonalPhoto"
          component={InsertClientPersonalPhotoScreen}
        />
      </Tab.Group>
      <Tab.Group>
        <Tab.Screen
          name="registerAutonomousName"
          component={AutonomousRegisterNameScreen}
        />
        <Tab.Screen
          name="registerAutonomousLogin"
          component={AutonomousRegisterLoginScreen}
        />
        <Tab.Screen
          name="registerAutonomousPassword"
          component={AutonomousRegisterPasswordScreen}
        />
        <Tab.Screen
          name="registerAutonomousCPF"
          component={AutonomousRegisterCPFScreen}
        />
        <Tab.Screen
          name="registerAutonomousCNPJ"
          component={AutonomousRegisterCNPJScreen}
        />
        <Tab.Screen
          name="registerAutonomousState"
          component={AutonomousRegisterStateScreen}
        />
        <Tab.Screen
          name="registerAutonomousChooseServices"
          component={AutonomousRegisterChooseServicesScreen}
        />

        <Tab.Screen
          name="insertAutonomousRGPhoto"
          component={InsertAutonomousRGPhotoScreen}
        />
        <Tab.Screen
          name="insertAutonomousProofPhoto"
          component={InsertAutonomousProofPhotoScreen}
        />
        <Tab.Screen
          name="insertAutonomousPersonalPhoto"
          component={InsertAutonomousPersonalPhotoScreen}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
