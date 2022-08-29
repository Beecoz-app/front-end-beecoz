import { Text } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { AppSpecificButton } from "../../components/AppComponents/Buttons/SpecificButton";
import { AppGeneticInput } from "../../components/AppComponents/Inputs/GenericInput";
import { AppTextArea } from "../../components/AppComponents/Inputs/TextAreaInput";
import { AppJobsList } from "../../components/AppComponents/JobsLIst";
import { theme } from "../../styles/theme";
import { Container, Content, AddImageContainer, AddImageContent } from "./styles";

export const PublicationScreen = () => {
    const DATA = [
        {id: 1, name: 'Marcenaria'}
    ]
  return (
    <Container>
      <Content>
        <AppGeneticInput placeholder="Título do pedido" type="text" />
        <AppTextArea placeholder="Descrição do pedido (opcional)"/>
        <AppJobsList/>
        <AddImageContainer>
          <AddImageContent>
            <Icon style={{color: theme.colors.white, fontSize: 20}} name="plus-a"/>
            <Text style={{color: theme.colors.white, alignSelf: 'center', fontWeight: '100', fontSize: 12}}>Adicionar</Text>
            <Text style={{color: theme.colors.white, alignSelf: 'center', fontWeight: '100', fontSize: 12}}>Imagem</Text>
          </AddImageContent>
        </AddImageContainer>
        <AppSpecificButton disabled={false} title='Criar pedido'/>
      </Content>
    </Container>
  );
};
