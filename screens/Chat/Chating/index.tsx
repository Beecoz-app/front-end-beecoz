import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRoute, RouteProp } from '@react-navigation/native';
import {
  Container,
  Content,
  MessagesContainer,
  SendMessageContainer,
  SendMessageIcons,
  SendMessageInput,
  ReceiverMessage,
  SenderMessage,
  SenderMessageText,
  ReceiverMessageText
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "styled-components";

type ChatingScreenParamsList = {
  Receiver: {
    receiver: {

      id: string;
      title: string;
      with: string;
      avatar: string;
    }
  }
}

export const ChatingScreen = () => {
  const route = useRoute<RouteProp<ChatingScreenParamsList, 'Receiver'>>()
  const theme = useTheme();

  console.log('oiiiiiiiiiiii', route.params.receiver.title)

  return (
    <Container>
      <Content>
        <MessagesContainer>
          <SenderMessage>
            <SenderMessageText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repudiandae libero fugiat consequuntur cupiditate vero.</SenderMessageText>
          </SenderMessage>
          <ReceiverMessage>
            <ReceiverMessageText>tendi...</ReceiverMessageText>
          </ReceiverMessage>
        </MessagesContainer>

        <SendMessageContainer>
          <SendMessageInput placeholder="Digite..." />
          <SendMessageIcons>
            <TouchableOpacity>
              <Icon
                name="camera"
                style={{ fontSize: 24, color: theme.colors.gray_100 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconAwesome
                name="microphone"
                style={{ fontSize: 24, color: theme.colors.gray_100 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="send"
                style={{ fontSize: 22, color: theme.colors.gray_100 }}
              />
            </TouchableOpacity>
          </SendMessageIcons>
        </SendMessageContainer>
      </Content>
    </Container>
  );
};
