import React, { useState } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { useTheme } from "styled-components";
import { ButtonContainer, Container, DataContainer, Title } from "./styles";
import { AppSelectInput } from "../../../../../components/AppComponents/Inputs/Select";

type ClientRegisterStateScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerClientState"
>;

export const ClientRegisterStateScreen = ({
  navigation: { navigate },
}: ClientRegisterStateScreenType) => {
  const [state, setState] = useState('');
  const theme = useTheme();
  const DATA = [
    {name: 'São Paulo', code: 'SP'},
    {name: 'Ceara', code: 'CE'},
    {name: 'Ro grande do Sul', code: 'RS'},
    {name: 'Bahia', code: 'BA'}
  ]
  

  return (
    <Container>
      <DataContainer>
        <Title>Tela ainda em processo</Title>
        <AppSelectInput placeholder="Estado" data={DATA}/>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={false}
          title={"Continuar"}
          onClick={() => navigate("registerClientCPF")}
        />
      </ButtonContainer>
    </Container>
  );
};
