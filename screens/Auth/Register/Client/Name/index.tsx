import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import {
  ClientAuthRegisterContext,
  IClientAuthRegister,
} from "../../../../../contexts/Auth/Register/Client/ClientRegisterAuthContext";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { Container, ButtonContainer, DataContainer, Title } from "./styles";

type ClientRegisterNameScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerClientName"
>;

export const ClientRegisterNameScreen = ({
  navigation: { navigate },
}: ClientRegisterNameScreenType) => {
  const { setNewClient } = useContext(
    ClientAuthRegisterContext
  ) as IClientAuthRegister;
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleNavigateToNextStep = () => {
    setNewClient(prev => ({...prev, name, lastName}))

    navigate("registerClientLogin")
  }

  return (
    <Container>
      <DataContainer>
        <Title>Bem-vindo á Beecoz! Para começar, qual seu nome (completo)?</Title>
        <AppGeneticInput
          type="text"
          placeholder="Seu nome"
          value={name}
          onChangeText={(text) => {
            if (name !== "") setDisabled(false);

            setName(text);
          }}
        />
        <AppGeneticInput
          type="text"
          placeholder="Seu sobrenome"
          value={lastName}
          onChangeText={(text) => {
            if (lastName !== "") setDisabled(false);

            setLastName(text);
          }}
        />
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={disabled}
          title={"Continuar"}
          onClick={handleNavigateToNextStep}
        />
      </ButtonContainer>
    </Container>
  );
};
