import Icon from "react-native-vector-icons/Ionicons";
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack'
import { StackParamsList } from "../../../navigation/Stack/StackTabNavigation";
import {useNavigation} from '@react-navigation/native'
import { BackButton, Title } from "./styles";

type HeaderNavigationProps = NativeStackNavigationProp<StackParamsList, 'home'>;

interface HeaderProps {
  backable?: boolean;
  title: string;
}


export const Header = ({ title, backable,...rest }: HeaderProps) => {
  const {navigate} = useNavigation<HeaderNavigationProps>()


  return (
    <>
      {backable ? (
        <>
          <BackButton>
            <Icon name="arrow-back" size={20} style={{ color: "#fff" }} onPress={() => navigate('home')}/>
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
