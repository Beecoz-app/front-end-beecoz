import React, { useContext, useState } from "react";
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
import { AuthContext, IAuthContext } from "../../../../../contexts/Auth/AuthContext";

export type InsertClientPersonalPhotoScreenType = NativeStackScreenProps<
  AuthStackParams,
  "insertCLientPersonalPhoto"
>;

export const InsertClientPersonalPhotoScreen = ({
  navigation: { navigate },
}: InsertClientPersonalPhotoScreenType) => {
  const { handleRegisterNewClient } = useContext(
    AuthContext
  ) as IAuthContext;
  const {newClient} = useContext(ClientAuthRegisterContext) as IClientAuthRegister
  const [disabled, setDisabled] = useState(true);
  const theme = useTheme();

  const onRegisterNewLogin = async () => {
    await handleRegisterNewClient({newClient})

    navigate('login')
  }

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
          onClick={onRegisterNewLogin}
        />
      </ButtonContainer>
    </Container>
  );
};
