import { Image, Text, View } from "react-native";
import * as SecureStore from 'expo-secure-store'
import { useTheme } from "styled-components";
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import { AppSpecificButton } from "../../../components/AppComponents/Buttons/SpecificButton";
import { AppSpecificInput } from "../../../components/AppComponents/Inputs/SpecificInput";
import {
  Container,
  AuthenticationContainer,
  InputContainer,
  RegisterContainer,
  InputContent,
  MissPasswordContent,
  AuthButton
} from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../../navigation/Auth/AuthStackNavigator";
import { useEffect, useState } from "react";

export type LoginType = NativeStackScreenProps<AuthStackParams, 'login'>

export const LoginScreen = ({navigation}: LoginType) => {
  const theme = useTheme();

  return (
    <Container>
      <Image style={{height: 183, width: 360}} source={require('../../../assets/logo.png')}/>
      <InputContainer>
        <InputContent>
          <AppSpecificInput
            type="email"
            iconName="user-circle-o"
            placeholder="Seu Login"
          />
          <AppSpecificInput
            type="password"
            iconName="lock"
            placeholder="Sua Senha"
          />
        </InputContent>
        <MissPasswordContent>
          <View>
            <Text>Lembre de mim</Text>
          </View>
          <View>
            <Text style={{ color: theme.colors.blue_p, fontWeight: "bold" }}>
              Esqueceu a senha?
            </Text>
          </View>
        </MissPasswordContent>
      </InputContainer>
      <AppSpecificButton disabled={false} title={"Entrar"} />
      <AuthenticationContainer>
        <AuthButton>
          <IconFontisto name="facebook" style={{color: theme.colors.white}}/>
          <Text style={{color: theme.colors.white}}>Facebook</Text>
        </AuthButton>
        <AuthButton>
          <IconAnt name="google" style={{color: theme.colors.white}}/>
          <Text style={{color: theme.colors.white}} >Google</Text>
        </AuthButton>
      </AuthenticationContainer>
      <RegisterContainer>
        <Text style={{fontSize: 16, color: theme.colors.gray_100, fontWeight: '100'}}>
          Não tem uma conta?  <Text style={{color: theme.colors.blue_p, fontWeight: 'bold'}} onPress={() => navigation.navigate('register')}>Se cadastre!</Text>
        </Text>
      </RegisterContainer>
    </Container>
  );
};
