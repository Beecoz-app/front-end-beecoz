import { Text, TouchableOpacity, View } from "react-native";
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
  OpenWorkButtonContainer,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "styled-components";
import { useContext, useEffect, useState } from "react";
import {
  getAllMessagesOfCurrentChating,
  sendNewMessage,
} from "../../../../services/firebase";
import {
  AuthContext,
  IAuthContext,
} from "../../../../contexts/Auth/AuthContext";
import MateIcon from "react-native-vector-icons/MaterialIcons";
import { privateApi } from "../../../../services/privateApi";

type ChatingScreenParamsList = {
  Receiver: {
    receiver: {
      id: string;
      title: string;
      with: string;
      avatar: string;
      interestId: string;
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
      typeUser: "Client" | "Autonomous";
    }>
  >([]);
  const [messageText, setMessageText] = useState("");
  const [isOpenedWork, setIsOpenedWork] = useState(false);
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

  const handleSendNewMessage = async () => {
    await sendNewMessage(
      route.params.chatId,
      String(user?.id),
      messageText,
      "Client"
    );

    clearMessageTextInput();
  };

  const clearMessageTextInput = () => {
    setMessageText("");
  };

  const handleOpenWork = async () => {
    const { data } = await privateApi.post(
      `/work/open/${route.params.receiver.interestId}`
    );

    console.log(data);

    setIsOpenedWork(true);
  };

  return (
    <Container>
      <Content>
        <MessagesContainer>
          {messages.map((message) =>
            message.typeUser === "Client" &&
            message.userId === String(user?.id) ? (
              <SenderMessage>
                <SenderMessageText>{message.message}</SenderMessageText>
              </SenderMessage>
            ) : (
              <ReceiverMessage>
                <ReceiverMessageText>{message.message}</ReceiverMessageText>
              </ReceiverMessage>
            )
          )}
        </MessagesContainer>

        <View
          style={{
            width: "90%",
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <SendMessageContainer>
            <SendMessageInput
              placeholder="Digite..."
              value={messageText}
              onChangeText={(text) => setMessageText(text)}
            />
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
                  onPress={handleSendNewMessage}
                />
              </TouchableOpacity>
            </SendMessageIcons>
          </SendMessageContainer>
          {!isOpenedWork && (
            <OpenWorkButtonContainer onPress={handleOpenWork}>
              <MateIcon
                name="work"
                style={{ fontSize: 20, color: theme.colors.gray_100 }}
              />
            </OpenWorkButtonContainer>
          )}
        </View>
      </Content>
    </Container>
  );
};
