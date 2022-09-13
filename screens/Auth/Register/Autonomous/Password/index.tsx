import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { ButtonContainer, Container, DataContainer, Title } from "./styles";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { useTheme } from "styled-components";

type ClientRegisterPasswordScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousPassword"
>;

export const AutonomousRegisterPasswordScreen = ({
  navigation: { navigate },
}: ClientRegisterPasswordScreenType) => {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const theme = useTheme();
  return (
    <Container>
      <DataContainer>
        <Title>Ok, quase lá! Agora, crie uma senha.</Title>
        <Text
          style={{
            color: theme.colors.white,
            fontWeight: "100",
            width: "100%",
            textAlign: "left",
          }}
        >
          Para sua segurança, crie uma senha com letras maiúsculas, minúsculas,
          símbolos, etc.
        </Text>
        <AppGeneticInput
          type="password"
          placeholder="********"
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
          onClick={() => navigate("registerAutonomousState")}
        />
      </ButtonContainer>
    </Container>
  );
};
