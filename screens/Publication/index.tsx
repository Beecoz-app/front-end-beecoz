import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { AppSpecificButton } from "../../components/AppComponents/Buttons/SpecificButton";
import { AppGeneticInput } from "../../components/AppComponents/Inputs/GenericInput";
import { AppTextArea } from "../../components/AppComponents/Inputs/TextAreaInput";
import { AppJobsList } from "../../components/AppComponents/JobsLIst";
import {
  IPublicationContext,
  PublicationContext,
} from "../../contexts/Publication/PublicationContext";
import { AuthContext, IAuthContext } from "../../contexts/Auth/AuthContext";
import { StackParamsList } from "../../navigation/Stack/StackTabNavigation";
import { theme } from "../../styles/theme";
import {
  Container,
  Content,
  AddImageContainer,
  AddImageContent,
} from "./styles";
import { AppGenericButton } from "../../components/AppComponents/Buttons/Generic";

export type PublicationType = NativeStackScreenProps<
  StackParamsList,
  "publication"
>;

export const PublicationScreen = ({ navigation }: PublicationType) => {
  const { setPublications, onAddPublication } = useContext(
    PublicationContext
  ) as IPublicationContext;
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [serviceTypeValue, setServiceTypeValue] = useState('');

  const handleAddPublication = async () => {
    await onAddPublication({title: titleText, description: descriptionText, servTypeId: serviceTypeValue})

    clearInputs();

    navigateToHome();
  };

  const clearInputs = () => {
    setTitleText("");
    setDescriptionText("");
  };

  const navigateToHome = () => {
    navigation.navigate("home");
  };

  console.log(serviceTypeValue)

  return (
    <Container>
      <Content>
        <View style={{ width: "100%" }}>
          <AppGeneticInput
            placeholder="Título do pedido"
            type="text"
            value={titleText}
            onChangeText={(text) => setTitleText(text)}
          />
        </View>
        <View style={{ width: "100%" }}>
          <AppTextArea
            placeholder="Descrição do pedido (opcional)"
            onChange={(text) => setDescriptionText(text)}
          />
        </View>
        <View style={{ width: "100%" }}>
          <AppJobsList getValue={(value: string) => setServiceTypeValue(value)}/>
        </View>
        <AddImageContainer>
          <AddImageContent>
            <Icon
              style={{ color: theme.colors.white, fontSize: 20 }}
              name="plus-a"
            />
            <Text
              style={{
                color: theme.colors.white,
                alignSelf: "center",
                fontWeight: "100",
                fontSize: 12,
              }}
            >
              Adicionar
            </Text>
            <Text
              style={{
                color: theme.colors.white,
                alignSelf: "center",
                fontWeight: "100",
                fontSize: 12,
              }}
            >
              Imagem
            </Text>
          </AddImageContent>
        </AddImageContainer>
        </Content>
        <AppGenericButton
          disabled={false}
          title="Criar pedido"
          onClick={handleAddPublication}
        />
    </Container>
  );
};
