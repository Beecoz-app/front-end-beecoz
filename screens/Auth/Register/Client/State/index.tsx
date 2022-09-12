import React, { useState } from "react";
import { Text, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic"
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import {useTheme} from 'styled-components'
import {ButtonContainer, Container, DataContainer, Title} from './styles'

type ClientRegisterStateScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerClientState"
>;

export const ClientRegisterStateScreen = ({
  navigation: { navigate },
}: ClientRegisterStateScreenType) => {
  const [name, setName] = useState("");
  const theme = useTheme();
  return (
    <Container>
      <DataContainer>
        <Title>Tela ainda em processo</Title>
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