import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { AppOtherInput } from "../../../../components/AppComponents/Inputs/OtherInput";
import {
  AuthContext,
  IAuthContext,
} from "../../../../contexts/Auth/AuthContext";
import { Container, Content } from "./styles";

export const EditProfileScreen = () => {
  const { user } = useContext(AuthContext) as IAuthContext;

  const [newNameText, setNewNameText] = useState("");
  const [newBioText, setNewBioText] = useState("");

  return (
    <Container>
      <Content>
          <View style={{ width: "100%" }}>
            <AppOtherInput
              placeholder={String(user?.name)}
              value={newNameText}
              changeValue={(text) => setNewNameText(text)}
            />
          </View>
      </Content>
    </Container>
  );
};
