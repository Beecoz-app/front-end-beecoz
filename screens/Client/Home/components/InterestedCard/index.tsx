import { Text, View, Image } from "react-native";
import { useTheme } from "styled-components";
import { IAutonomous } from "../../../../../interfaces/User/Autonomous/IAutonomous";
import { Container, InfoInterested, TextInfo, GoToChatButton } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { addNewChat } from "../../../../../services/firebase";
import { useContext } from "react";
import {
  AuthContext,
  IAuthContext,
} from "../../../../../contexts/Auth/AuthContext";
import {
  ChatContext,
  IChatContext,
} from "../../../../../contexts/Chat/ChatContext";

export const InterestedCard = ({ data }: { data: IAutonomous }) => {
  const { user } = useContext(AuthContext) as IAuthContext;
  const { chatId, setChatId } = useContext(ChatContext) as IChatContext;
  const theme = useTheme();

  const handleAddChat = () => {
    if (chatId) {
      return;
    }

    addNewChat(
      {
        id: String(user?.id),
        login: String(user?.login),
        name: String(user?.name),
        avatar: "",
      },
      {
        id: String(data.id),
        login: String(data.login),
        name: String(data.name),
        avatar: "",
      },
      setChatId
    );

    data.inChat = true;
  };

  return (
    <Container>
      {!data.inChat && (
        <>
          <InfoInterested>
            <Image
              style={{ width: 40, height: 40, borderRadius: 50 }}
              resizeMode="contain"
              source={{ uri: data.profileImage }}
            />
            <TextInfo>
              <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
                {data.name}
              </Text>
              <Text>ranking</Text>
            </TextInfo>
          </InfoInterested>
          <View>
            <GoToChatButton onPress={handleAddChat}>
              <Icon
                name="arrowright"
                style={{ fontSize: 16, color: theme.colors.white }}
              />
            </GoToChatButton>
          </View>
        </>
      )}
    </Container>
  );
};
