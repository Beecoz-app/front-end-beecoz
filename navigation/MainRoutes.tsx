import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecureStore from "expo-secure-store";
import { useContext } from "react";
import { AuthContext, IAuthContext } from "../contexts/Auth/AuthContext";
import { AuthStackNavigator, AuthStackParams } from "./Auth/AuthStackNavigator";
import {
  BottomParamsList,
  BottomTabNavigator,
} from "./Bottom/BottomTabNavigator";
import { StackParamsList } from "./Stack/StackTabNavigation";

export type MainStackParams = AuthStackParams &
  StackParamsList &
  BottomParamsList & {
    mainBottomStacks: undefined;
    mainStacks: undefined;
    mainAuthStack: undefined;
  };

const Tab = createNativeStackNavigator<MainStackParams>();

export const MainStack = () => {
    const {token} = useContext(AuthContext) as IAuthContext
  return (
    <Tab.Navigator
      initialRouteName="mainAuthStack"
      screenOptions={{ headerShown: false }}
    >
      {token ? (
        <Tab.Screen name="mainAuthStack" component={AuthStackNavigator} />
      ) : (
        <Tab.Screen name="mainBottomStacks" component={BottomTabNavigator} />
      )}
    </Tab.Navigator>
  );
};
