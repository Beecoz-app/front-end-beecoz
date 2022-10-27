import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
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
  ReceiverMessageText,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { getAllMessagesOfCurrentChating } from "../../../services/firebase";
import { AuthContext, IAuthContext } from "../../../contexts/Auth/AuthContext";

type ChatingScreenParamsList = {
  Receiver: {
    receiver: {
      id: string;
      title: string;
      with: string;
      avatar: string;
    };
    chatId: string;
  };
};

export const ChatingScreen = () => {
  const route = useRoute<RouteProp<ChatingScreenParamsList, "Receiver">>();
  const { user } = useContext(AuthContext) as IAuthContext;
  const [messages, setMessages] = useState<
    Array<{
      id: string;
      chatId: string;
      userId: string;
      message: string;
      timestamp: string;
    }>
  >([]);
  const theme = useTheme();

  useEffect(() => {
    const fetch = async () => {
      getAllMessagesOfCurrentChating(
        route.params.chatId,
        String(user?.id),
        setMessages
      );
    };

    fetch();
  }, []);

  console.log("oiiiiiiiiiiii", route.params.receiver.title);

  return (
    <Container>
      <Content>
        <MessagesContainer>
          {messages.map((message) =>
            message.userId === String(user?.id) ? (
              <SenderMessage>
                <SenderMessageText>
                  {message.message}
                </SenderMessageText>
              </SenderMessage>
            ) : (
              <ReceiverMessage>
                <ReceiverMessageText>{message.message}</ReceiverMessageText>
              </ReceiverMessage>
            )
          )}
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
