import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { ButtonContainer, Container, DataContainer, Title } from "./styles";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { useTheme } from "styled-components";
import { AppJobsList } from "../../../../../components/AppComponents/JobsLIst";

type ClientRegisterCPFScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousChooseServices"
>;

export const AutonomousRegisterChooseServicesScreen = ({
  navigation: { navigate },
}: ClientRegisterCPFScreenType) => {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const theme = useTheme();
  return (
    <Container>
      <DataContainer>
        <Title>Você está a procura de clientes não é mesmo? Para te ajudar, qual a sua área de atuação?</Title>
        <View style={{width: '100%'}}>
            <AppJobsList/>
        </View>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={false}
          title={"Continuar"}
          onClick={() => navigate("insertAutonomousRGPhoto")}
        />
      </ButtonContainer>
    </Container>
  );
};

