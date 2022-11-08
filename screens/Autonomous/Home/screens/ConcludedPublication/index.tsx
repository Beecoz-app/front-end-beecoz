import React, { useContext } from "react";
import { Text, View } from "react-native";
import { IClientPublicationContext, ClientPublicationContext } from "../../../../../contexts/Client/Publication/ClientPublicationContext";
import { PostCard } from "../../components/PostCard";
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";

export const ConcludedPublication = () => {
  const { publications } = useContext(
    ClientPublicationContext
  ) as IClientPublicationContext;

  return (
    <Container>
      <Content>
          <View style={{ width: "90%", height: "100%", marginTop: 40 }}>
            <NoPublicationsMessage>
            Não deu tempo de fazer :)
            </NoPublicationsMessage>
          </View>
      </Content>
    </Container>
  );
};
