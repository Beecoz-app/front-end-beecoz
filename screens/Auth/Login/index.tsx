import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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

export const LoginScreen = () => {
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
          Não tem uma conta?  <Text style={{color: theme.colors.blue_p, fontWeight: 'bold'}}>Se cadastre!</Text>
        </Text>
      </RegisterContainer>
    </Container>
  );
};
