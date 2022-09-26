import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { useTheme } from "styled-components";
import { ButtonContainer, Container, DataContainer, Title, SelectContainer } from "./styles";
import { AppSelectInput } from "../../../../../components/AppComponents/Inputs/Select";
import { AutonomousAuthRegisterContext, IAutonomousAuthRegister } from "../../../../../contexts/Auth/Register/Autonomous/AutonomousRegisterAuthContext";

type ClientRegisterStateScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerAutonomousState"
>;

export const AutonomousRegisterStateScreen = ({
  navigation: { navigate },
}: ClientRegisterStateScreenType) => {
  const { setNewAutonomous } = useContext(
    AutonomousAuthRegisterContext
  ) as IAutonomousAuthRegister;
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const theme = useTheme();
  const DATA = [
    { name: "São Paulo", code: "SP" },
    { name: "Ceara", code: "CE" },
    { name: "Ro grande do Sul", code: "RS" },
    { name: "Bahia", code: "BA" },
  ];

  const handleNavigateToNextStep = () => {
    setNewAutonomous((prev) => ({ ...prev, country, city }));

    navigate("registerAutonomousCPF");
  };

  const getValueCountry = (value: string) => {
    setCountry(value);
  };
  const getValueCity = (value: string) => {
    setCity(value);
  };
  

  return (
    <Container>
      <DataContainer>
        <Title>Agora, informe onde você mora, por gentileza!</Title>
        <View style={{ width: "100%", marginTop: 40 }}>
          <SelectContainer>
            <Text
              style={{
                color: theme.colors.white,
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              Seu estado
            </Text>
            <AppSelectInput
              placeholder="Estado"
              data={DATA}
              getValue={(value) => getValueCountry(value)}
            />
          </SelectContainer>
          <SelectContainer>
            <Text
              style={{
                color: theme.colors.white,
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              Sua cidade ou município
            </Text>
            <AppSelectInput
              placeholder="Cidade ou Município"
              data={DATA}
              getValue={(value) => getValueCity(value)}
            />
          </SelectContainer>
        </View>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton
          disabled={false}
          title={"Continuar"}
          onClick={handleNavigateToNextStep}
        />
      </ButtonContainer>
    </Container>
  );
};
