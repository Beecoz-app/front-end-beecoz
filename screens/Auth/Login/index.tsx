import { Image, Text, View } from "react-native";
import { useTheme } from "styled-components";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFontisto from "react-native-vector-icons/Fontisto";
import { AppSpecificButton } from "../../../components/AppComponents/Buttons/SpecificButton";
import { AppSpecificInput } from "../../../components/AppComponents/Inputs/SpecificInput";
import {
  Container,
  AuthenticationContainer,
  InputContainer,
  RegisterContainer,
  InputContent,
  MissPasswordContent,
  AuthButton,
} from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import { AuthContext, IAuthContext } from "../../../contexts/Auth/AuthContext";
import { MainStackParams } from "../../../navigation/MainRoutes";
import { AppRadioButton } from "../../../components/AppComponents/Buttons/RadioButton";

export type LoginType = NativeStackScreenProps<
  MainStackParams,
  "mainAuthStack"
>;

export const LoginScreen = ({ navigation }: LoginType) => {
  const { handleLogin } = useContext(AuthContext) as IAuthContext;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setvalues] = useState([
    { name: "Client", value: "Client" },
    { name: "Autonomo", value: "Autonomous" },
  ]);
  const [type, setType] = useState("");
  const theme = useTheme();

  const onLogin = async () => {
    try {
      await handleLogin({ email, password, type });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Image
        style={{ height: 183, width: 360 }}
        source={require("../../../assets/logo.png")}
      />
      <InputContainer>
        <InputContent>
          <AppSpecificInput
            type="email"
            iconName="user-circle-o"
            placeholder="Seu Login"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <AppSpecificInput
            type="password"
            iconName="lock"
            placeholder="Sua Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </InputContent>
        <View style={{ width: "100%", height: 40 }}>
          <AppRadioButton
            values={values}
            getValue={(value) => setType(value)}
          />
        </View>
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
      <AppSpecificButton disabled={false} title={"Entrar"} onClick={onLogin} />
      <AuthenticationContainer>
        <AuthButton>
          <IconFontisto name="facebook" style={{ color: theme.colors.white }} />
          <Text style={{ color: theme.colors.white }}>Facebook</Text>
        </AuthButton>
        <AuthButton>
          <IconAnt name="google" style={{ color: theme.colors.white }} />
          <Text style={{ color: theme.colors.white }}>Google</Text>
        </AuthButton>
      </AuthenticationContainer>
      <RegisterContainer>
        <Text
          style={{
            fontSize: 16,
            color: theme.colors.gray_100,
            fontWeight: "100",
          }}
        >
          Não tem uma conta?{" "}
          <Text
            style={{ color: theme.colors.blue_p, fontWeight: "bold" }}
            onPress={() => navigation.navigate("register")}
          >
            Se cadastre!
          </Text>
        </Text>
      </RegisterContainer>
    </Container>
  );
};
