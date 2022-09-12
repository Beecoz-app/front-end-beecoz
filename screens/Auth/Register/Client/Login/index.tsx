import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useTheme } from "styled-components";
import { AppGenericButton } from "../../../../../components/AppComponents/Buttons/Generic";
import { AppCheckBox } from "../../../../../components/AppComponents/Inputs/CheckBoxInput";
import { AppGeneticInput } from "../../../../../components/AppComponents/Inputs/GenericInput";
import { AuthStackParams } from "../../../../../navigation/Auth/AuthStackNavigator";
import {Container, ButtonContainer, DataContainer, Title} from './styles'

type ClientRegisterLoginType = NativeStackScreenProps<AuthStackParams, 'registerClientLogin'>

export const ClientRegisterLoginScreen = ({navigation: {navigate}}: ClientRegisterLoginType) => {
    const [name, setName] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [check, setCheck] = useState(false);
    const theme = useTheme()
  return (
    <Container>
      <DataContainer>
        <Title >Muito bem, Thiago!  Agora, informe seu melhor email, ou se preferir, seu número de telefone-celular</Title>
        {!check ? (
          <AppGeneticInput type="email" placeholder="nome@dominio.com" onChange={(text) => {
            if (name !== '') setDisabled(false)

            setName(text)
            }}/>
        ) : (
          <AppGeneticInput type="phone" placeholder="(00) 00000-0000" onChange={(text) => {
            if (name !== '') setDisabled(false)

            setName(text)
            }}/>
        )}
        
        {/* <CheckContainer>
            <AppCheckBox/>
            <Text>Registrar com númeroaaaa</Text>
        </CheckContainer> */}
        <View style={{width: '100%', alignItems: 'center', flexDirection: 'row', marginTop: 5}}>
          <AppCheckBox onCheck={() => setCheck(!check)}/>
          <Text style={{color: theme.colors.white, fontWeight: '100'}}>Registrar com número</Text>
        </View>
      </DataContainer>
      <ButtonContainer>
        <AppGenericButton disabled={disabled} title={"Continuar"} onClick={() => navigate('registerClientLogin')}/>
      </ButtonContainer>
    </Container>
  );
};