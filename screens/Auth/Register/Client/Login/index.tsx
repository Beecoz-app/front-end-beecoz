import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { useTheme } from "styled-components";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AppCheckBox } from "../../../../../components/AppComponents/Inputs/CheckBoxInput";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import {
  ClientAuthRegisterContext,
  IClientAuthRegister,
} from "../../../../../contexts/Auth/Register/Client/ClientRegisterAuthContext";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { Container, ButtonContainer, DataContainer, Title } from "./styles";

type ClientRegisterLoginType = NativeStackScreenProps<
  AuthStackParams,
  "registerClientLogin"
>;

export const ClientRegisterLoginScreen = ({
  navigation: { navigate },
}: ClientRegisterLoginType) => {
  const { setNewClient, newClient } = useContext(
    ClientAuthRegisterContext
  ) as IClientAuthRegister;
  const [email, setEmail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [check, setCheck] = useState(false);
  const theme = useTheme();

  const handleNavigateToNextStep = () => {
    setNewClient((prev: any) => ({ ...prev, login: email ? email : cellPhone }));

    navigate("registerClientPassword");
  };

  return (
    <Container>
      <DataContainer>
        <Title>
          Muito bem, {newClient?.name}! Agora, informe seu melhor email, ou se preferir,
          seu número de telefone-celular
        </Title>
        <Text
          style={{
            color: theme.colors.white,
            fontWeight: "100",
            width: "100%",
            textAlign: "left",
          }}
        >
          Lembre-se informe um e-mail ativo e profisssional ou um telefone ativo
        </Text>
        {!check ? (
          <AppGeneticInput
            type="email"
            placeholder="nome@dominio.com"
            value={email}
            onChangeText={(text) => {
              if (email !== "") setDisabled(false);

              setEmail(text);
            }}
          />
        ) : (
          <AppGeneticInput
            type="phone"
            placeholder="(00) 00000-0000"
            value={cellPhone}
            onChangeText={(text) => {
              if (cellPhone !== "") setDisabled(false);

              setCellPhone(text);
            }}
          />
        )}

        {/* <CheckContainer>
            <AppCheckBox/>
            <Text>Registrar com númeroaaaa</Text>
        </CheckContainer> */}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <AppCheckBox />
          <Text style={{ color: theme.colors.white, fontWeight: "100" }}>
            Registrar com número
          </Text>
        </View>
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
