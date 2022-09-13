import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Text, View } from "react-native";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { Container, ButtonContainer, DataContainer, Title } from "./styles";

type ClientRegisterNameScreenType = NativeStackScreenProps<AuthStackParams, 'registerAutonomousName'>

export const AutonomousRegisterNameScreen = ({navigation: {navigate}}: ClientRegisterNameScreenType) => {
    const [name, setName] = useState('');
    const [disabled, setDisabled] = useState(true);
  return (
    <Container>
      <DataContainer>
        <Title >Bem-vindo á Beecoz! Para começar, qual seu nome?</Title>
        <AppGeneticInput type="text" placeholder="Seu nome" onChange={(text) => {
            if (name !== '') setDisabled(false)

            setName(text)
            }}/>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton disabled={disabled} title={"Continuar"} onClick={() => navigate('registerClientLogin')}/>
      </ButtonContainer>
    </Container>
  );
};
