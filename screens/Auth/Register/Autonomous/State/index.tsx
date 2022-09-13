import React, { useState } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { useTheme } from "styled-components";
import { ButtonContainer, Container, DataContainer, Title, SelectContainer } from "./styles";
import { AppSelectInput } from "../../../../../components/AppComponents/Inputs/Select";

type ClientRegisterStateScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousState"
>;

export const AutonomousRegisterStateScreen = ({
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
        <Title>Agora, informe onde você mora, por gentileza!</Title>
        <View style={{width: '100%', marginTop: 40}}>

        <SelectContainer>
          <Text style={{color: theme.colors.white, fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>Seu estado</Text>
          <AppSelectInput placeholder="Estado" data={DATA}/>
        </SelectContainer>
        <SelectContainer>
          <Text style={{color: theme.colors.white, fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>Sua cidade ou município</Text>
          <AppSelectInput placeholder="Cidade ou Município" data={DATA}/>
        </SelectContainer>
        </View>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={false}
          title={"Continuar"}
          onClick={() => navigate("registerAutonomousCPF")}
        />
      </ButtonContainer>
    </Container>
  );
};
