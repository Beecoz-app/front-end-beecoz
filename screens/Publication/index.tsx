import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { AppTextArea } from "../../components/AppComponents/Inputs/TextAreaInput";
import { AppJobsList } from "../../components/AppComponents/JobsLIst";
import {
  IPublicationContext,
  PublicationContext,
} from "../../contexts/Publication/PublicationContext";
import { StackParamsList } from "../../navigation/Stack/StackTabNavigation";
import { theme } from "../../styles/theme";
import {
  Container,
  Content,
  AddImageContainer,
  AddImageContent,
  AddPublicationInputText,
  DateTimePickerContainer,
  DateContainer
} from "./styles";
import { AppGenericButton } from "../../components/AppComponents/Buttons/Generic";
import DateTimePicker from "@react-native-community/datetimepicker";
import {useTheme} from 'styled-components'

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
  const [serviceTypeValue, setServiceTypeValue] = useState("");
  const [dateText, setDateText] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const theme = useTheme()

    const handleChangeDate = (event: any, date: any) => {
      const selectedDate = date || dateText
      
      setDateText(selectedDate)

      setIsDatePickerOpen(false)
    }

  const handleAddPublication = async () => {
    await onAddPublication({
      title: titleText,
      description: descriptionText,
      servTypeId: serviceTypeValue,
    });

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

  console.log(serviceTypeValue);

  return (
    <Container>
      <Content>
        {/* TITLE */}
        <View style={{ width: "100%" }}>
          <AddPublicationInputText
            placeholder="Título do pedido"
            keyboardType="default"
            value={titleText}
            onChangeText={(text) => setTitleText(text)}
          />
        </View>

        {/* DESC */}
        <View style={{ width: "100%" }}>
          <AppTextArea
            placeholder="Descrição do pedido (opcional)"
            onChange={(text) => setDescriptionText(text)}
          />
        </View>

        {/* DATE */}
        <DateTimePickerContainer onPress={() => setIsDatePickerOpen(true)}>
          <Text style={{color: theme.colors.gray_100, fontSize: 16}}>Previsão de finalização</Text>

          <DateContainer>
            <Text style={{color: theme.colors.yellow_p}}>
              {String(dateText)}
            </Text>
          </DateContainer>

          {isDatePickerOpen ? (
            <DateTimePicker mode="date" display="default" value={dateText} onChange={handleChangeDate}/>
          ) : (
            <>
            </>
          )}

        </DateTimePickerContainer>

        {/* JOBS LIST */}
        <View style={{ width: "100%" }}>
          <AppJobsList
            getValue={(value: string) => setServiceTypeValue(value)}
          />
        </View>

        {/* ADD PHOTOS */}
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
        {/* ... */}
      </Content>

      {/* ADD BUTTON */}
      <AppGenericButton
        disabled={false}
        title="Criar pedido"
        onClick={handleAddPublication}
      />
    </Container>
  );
};
