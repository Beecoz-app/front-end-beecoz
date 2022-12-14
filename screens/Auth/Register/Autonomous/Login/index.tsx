import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert, Text, View } from "react-native";
import { useTheme } from "styled-components";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AppCheckBox } from "../../../../../components/AppComponents/Inputs/CheckBoxInput";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import {
  AutonomousAuthRegisterContext,
  IAutonomousAuthRegister,
} from "../../../../../contexts/Auth/Register/Autonomous/AutonomousRegisterAuthContext";
import { IAutonomousRegister } from "../../../../../interfaces/User/Autonomous/IAutonomousRegister";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { api } from "../../../../../services/api";
import { Container, ButtonContainer, DataContainer, Title } from "./styles";

type ClientRegisterLoginType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousLogin"
>;

export const AutonomousRegisterLoginScreen = ({
  navigation: { navigate },
}: ClientRegisterLoginType) => {
  const { setNewAutonomous, newAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [email, setEmail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [check, setCheck] = useState(false);
  const theme = useTheme();

  const handleNavigateToNextStep = async () => {
    try {
      const {data} = await api.post<{message: string}>('/auth/autonomous/login/exists', {
        login: email ? email : cellPhone
      })
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) { 
        const errorMessage = {error: error.response?.data as {message: string}}

        console.log(errorMessage.error.message)

        Alert.alert(
          "Erro",
          errorMessage.error.message,
          [
            {
              text: 'Sair',
              style: 'cancel'
            }
          ],
          {
            cancelable: true,
          }
        )

        return
      }
    }


    setNewAutonomous((prev: any) => ({ ...prev, login: email ? email : cellPhone }));

    navigate("registerAutonomousPassword");
  };

  return (
    <Container>
      <DataContainer>
        <Title>
          Muito bem, {newAutonomous?.name}! Agora, informe seu melhor email, ou se preferir,
          seu n??mero de telefone-celular
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
            masked={false}
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
            masked={true}
            mask={"cel-phone"}
            value={cellPhone}
            onChangeText={(text) => {
              if (cellPhone !== "") setDisabled(false);

              setCellPhone(text);
            }}
          />
        )}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <AppCheckBox onChangeValue={() => setCheck(!check)}/>
          <Text style={{ color: theme.colors.white, fontWeight: "100" }}>
            Registrar com n??mero
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
