import Icon from "react-native-vector-icons/Ionicons";
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack'
import { StackParamsList } from "../../../navigation/Stack/ClientStackTabNavigation";
import {useNavigation} from '@react-navigation/native'
import { BackButton, Title } from "./styles";

type HeaderNavigationProps = NativeStackNavigationProp<StackParamsList>;

interface HeaderProps {
  backable?: boolean;
  title: string;
}


export const Header = ({ title, backable,...rest }: HeaderProps) => {
  const {goBack} = useNavigation<HeaderNavigationProps>()


  return (
    <>
      {backable ? (
        <>
          <BackButton>
            <Icon name="arrow-back" size={20} style={{ color: "#fff" }} onPress={() => goBack()}/>
          </BackButton>
          <Title>{title}</Title>
        </>
      ) : (
        <>
          <Title>{title}</Title>
        </>
      )}
    </>
  );
};
