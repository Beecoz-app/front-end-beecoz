import React, { useCallback, useContext, useState } from "react";
import { Image, Text } from "react-native";
import {
  Container,
  ButtonContainer,
  DataContainer,
  Title,
  PhotoContainer,
} from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { useTheme } from "styled-components";
import {
  ClientAuthRegisterContext,
  IClientAuthRegister,
} from "../../../../../contexts/Auth/Register/Client/ClientRegisterAuthContext";
import axios from "axios";
import { api } from "../../../../../services/api";
import { IClient } from "../../../../../interfaces/User/CLient/IClient";
import { AuthContext, IAuthContext } from "../../../../../contexts/Auth/AuthContext";
import * as SecureStore from 'expo-secure-store'

export type InsertClientPersonalPhotoScreenType = NativeStackScreenProps<
  AuthStackParams,
  "insertCLientPersonalPhoto"
>;

export const InsertClientPersonalPhotoScreen = ({
  navigation: { navigate },
}: InsertClientPersonalPhotoScreenType) => {
  const { newClient, setNewClient } = useContext(
    ClientAuthRegisterContext
  ) as IClientAuthRegister;
  const {setUser, setToken} = useContext(AuthContext) as IAuthContext
  const [disabled, setDisabled] = useState(true);
  const theme = useTheme();

  const handleRegisterNewClient = async () => {
    try {
      const {data: {client, token}} = await api.post<{client: IClient, token: string}>("/auth/clients/register", {
        name: newClient?.name,
        login: newClient?.login,
        password: newClient?.password,
        lastName: newClient?.lastName,
        gender: newClient?.gender,
        bornDate: "2005-04-17",
        cpf: newClient?.cpf,
        biography: '',
      });

      console.log(client, token)


      setUser(client)
      setToken(token)

      await SecureStore.setItemAsync("user", JSON.stringify(client));
      await SecureStore.setItemAsync("token", `Bearer ${token}`);

      navigate('login')

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
      }
    }
  };

  return (
    <Container>
      <DataContainer>
        <Title>Insira uma foto sua, atual, nítida</Title>
        <PhotoContainer onPress={() => setDisabled(false)}>
          <Image
            style={{ width: 90, height: 90 }}
            source={require("../../../../../assets/user.png")}
          />
          <Text style={{ color: theme.colors.gray_100, fontWeight: "100" }}>
            Adicione uma foto sua
          </Text>
        </PhotoContainer>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={disabled}
          title={"Continuar"}
          onClick={handleRegisterNewClient}
        />
      </ButtonContainer>
    </Container>
  );
};
