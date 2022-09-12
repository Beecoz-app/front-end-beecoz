import React, { useState } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import { useTheme } from "styled-components";
import Dropdown from "react-native-input-select";
import { ButtonContainer, Container, DataContainer, Title } from "./styles";

type ClientRegisterStateScreenType = NativeStackScreenProps<
  AuthStackParams,
  "registerClientState"
>;

export const ClientRegisterStateScreen = ({
  navigation: { navigate },
}: ClientRegisterStateScreenType) => {
  const [state, setState] = useState('');
  const theme = useTheme();

  return (
    <Container>
      <DataContainer>
        <Title>Tela ainda em processo</Title>
        <Dropdown
          label="estados"
          placeholder="Estado"
          options={[{ name: "São Paulo", code: "SP" }]}
          optionLabel={"name"}
          optionValue={"code"}
          selectedValue={state}
          onValueChange={(value: string) => setState(value)}
          primaryColor={"green"}
          disabled={false}
          dropdownContainerStyle={{}}
          dropdownErrorStyle={{}}
          dropdownErrorTextStyle={{}}
          dropdownHelperTextStyle={{}}
          dropdownStyle={{}}
          error={'a'}
          helperText={'a'}
          isMultiple={false}
          isSearchable={false}
          labelStyle={'a'}
          modalBackgroundStyle={{}}
          modalOptionsContainer={{}}
          multipleSelectedItemStyle={{}}
          searchInputStyle={{}}
          selectedItemStyle={{}}
        />
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
