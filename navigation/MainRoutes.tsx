import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackNavigator, AuthStackParams } from "./Auth/AuthStackNavigator";
import { BottomParamsList, BottomTabNavigator } from "./Bottom/BottomTabNavigator";
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
  return (
    <Tab.Navigator initialRouteName="mainAuthStack" screenOptions={{headerShown: false}}>
      <Tab.Screen name="mainAuthStack" component={AuthStackNavigator} />
      <Tab.Screen name="mainBottomStacks" component={BottomTabNavigator} />
    </Tab.Navigator>
  );
};
