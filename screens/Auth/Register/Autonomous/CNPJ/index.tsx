import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { ButtonContainer, Container, DataContainer, Title } from "./styles";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { useTheme } from "styled-components";

type ClientRegisterCPFScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousCNPJ"
>;

export const AutonomousRegisterCNPJScreen = ({
  navigation: { navigate },
}: ClientRegisterCPFScreenType) => {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const theme = useTheme();
  return (
    <Container>
      <DataContainer>
        <Title>Falta pouco!{'\n'}Informe seu CNPJ.</Title>
        <AppGeneticInput
          type="CPF"
          placeholder="000.000.000-00"
          onChange={(text) => {
            if (name !== "") setDisabled(false);

            setName(text);
          }}
        />
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={disabled}
          title={"Continuar"}
          onClick={() => navigate("registerAutonomousChooseServices")}
        />
      </ButtonContainer>
    </Container>
  );
};
