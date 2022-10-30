import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext, IAuthContext } from "../contexts/Auth/AuthContext";
import { AuthStackNavigator, AuthStackParams } from "./Auth/AuthStackNavigator";
import {
  ClientBottomParamsList,
  ClientBottomTabNavigator,
} from "./Bottom/Client/ClientBottomTabNavigator";
import { ClientStackParamsList } from "./Stack/ClientStackTabNavigation";

export type MainStackParams = AuthStackParams &
  ClientStackParamsList &
  ClientBottomParamsList & {
    mainBottomStacks: undefined;
    mainStacks: undefined;
    mainAuthStack: undefined;
  };

const Tab = createNativeStackNavigator<MainStackParams>();

export const MainStack = () => {
  const { token } = useContext(AuthContext) as IAuthContext;

  return (
    <Tab.Navigator
      initialRouteName="mainAuthStack"
      screenOptions={{ headerShown: false }}
    >
      {token ? (
        <Tab.Group>
          <Tab.Screen name="mainBottomStacks" component={ClientBottomTabNavigator} />
        </Tab.Group>
      ) : (
        <Tab.Group>
          <Tab.Screen name="mainAuthStack" component={AuthStackNavigator} />
        </Tab.Group>
      )}
    </Tab.Navigator>
  );
};
