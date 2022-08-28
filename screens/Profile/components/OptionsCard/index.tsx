import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ReactElement } from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useTheme } from "styled-components";
import { StackParamsList } from "../../../../navigation/StackTabNavigation";
import { ProfileType } from "../../../../screens/Profile";
import { Container } from "./styles";

type optionsScreenProp = NativeStackScreenProps<StackParamsList, 'home'>

interface OptionsCardProps {
  IconCard: ReactElement<any, any>;
  title: string;
  description: string;
  routeName: 'aboutProfile' | 'editProfile' | 'accessibilityProfile' | 'logoutProfile' | 'securityProfile' | 'supportProfile';
  navigation: ProfileType['navigation']
}

export const OptionsCard = ({
  title,
  IconCard,
  description,
  routeName,
  navigation
}: OptionsCardProps) => {
  const theme = useTheme();
  return (
    <Container onPress={() => navigation.navigate(routeName)}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            backgroundColor: '#5565',
          }}
        >
          {IconCard}
        </View>
        <View style={{marginLeft: 20, justifyContent: 'space-between'}}>
          <Text style={{color: theme.colors.white}}>{title}</Text>
          <Text style={{fontSize: 12, color: theme.colors.gray_100}}>{description}</Text>
        </View>
      </View>
      <Icon
        style={{ fontSize: 18, color: theme.colors.gray_100 }}
        name="arrowright"
      />
    </Container>
  );
};
