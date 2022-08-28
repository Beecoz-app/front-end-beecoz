import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "styled-components";
import { IClient } from "../../interfaces/User/CLient/IClient";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import IconMaterialIcon from "react-native-vector-icons/MaterialIcons";
import IconFont from "react-native-vector-icons/FontAwesome5";
import { OptionsCard } from "./components/OptionsCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "../../navigation/StackTabNavigation";
import { Container, Profile, ProfileContent, OptionsContainer,OptionsContent } from "./styles";

export type ProfileType = NativeStackScreenProps<StackParamsList, "profile">;

export const ProfileScreen = ({ navigation }: ProfileType) => {
  const user: IClient = {
    id: 1,
    name: "Thiago",
    lastName: "Silva",
    birthDate: "04-17-2005",
    sex: "Male",
    CPF: "000000",
    loginId: 1,
    profileId: 1,
    typeId: 1,
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb1jnC52Zm-Z92rKJuIXRc7ahmsH1mpTUow&usqp=CAU",
  };
  const theme = useTheme();

  return (
    <Container>
      <Profile>
        <Image
          style={{ width: 60, height: 60, borderRadius: 50 }}
          resizeMode="contain"
          source={{ uri: user.profileImage }}
        />
        <ProfileContent>
          <Text
            style={{
              color: theme.colors.white,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {user.name} {user.lastName}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              {user.typeId === 3 ? (
                <IconMaterial
                  style={{ fontSize: 30, color: "#FF81D0" }}
                  name="crown-circle"
                />
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
        </ProfileContent>
      </Profile>
      <OptionsContainer>
        <OptionsContent>
          <OptionsCard
            title="Minha conta"
            description="Editar"
            routeName="editProfile"
            navigation={navigation}
            IconCard={
              <IconFont
                style={{ fontSize: 16, color: theme.colors.yellow_p }}
                name="user"
              />
            }
          />
          <OptionsCard
            title="Segurança"
            description="Configurar segurança"
            routeName="securityProfile"
            navigation={navigation}
            IconCard={
              <IconFont
                style={{ fontSize: 16, color: theme.colors.yellow_p }}
                name="shield-alt"
              />
            }
          />
          <OptionsCard
            title="Suporte"
            description="Peça ajuda á equipe Beecoz"
            routeName="supportProfile"
            navigation={navigation}
            IconCard={
              <IconMaterial
                style={{ fontSize: 16, color: theme.colors.yellow_p }}
                name="help"
              />
            }
          />
          <OptionsCard
            title="Sobre a Beecoz"
            description="Entenda a filosofia de nossa equipe"
            routeName="aboutProfile"
            navigation={navigation}
            IconCard={
              <IconMaterial
                style={{ fontSize: 16, color: theme.colors.yellow_p }}
                name="heart"
              />
            }
          />
          <OptionsCard
            title="Sair"
            description="Sair da conta autal"
            routeName="logoutProfile"
            navigation={navigation}
            IconCard={
              <IconMaterialIcon
                style={{ fontSize: 16, color: theme.colors.yellow_p }}
                name="logout"
              />
            }
          />
        </OptionsContent>
      </OptionsContainer>
    </Container>
  );
};
