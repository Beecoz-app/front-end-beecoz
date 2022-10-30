import React, { useContext } from "react";
import { View } from "react-native";
import {
  IPublicationContext,
  PublicationContext,
} from "../../../../../contexts/Publication/PublicationContext";
import { PostCard } from "../../components/PostCard";
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";

export const OpenedPublication = () => {
  const { publications } = useContext(
    PublicationContext
  ) as IPublicationContext;

  return (
    <Container>
      <Content>
        {publications.length > 0 ? (
          <Flat
            data={publications}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <PostCard data={item} />}
          />
        ) : (
          <View style={{ width: "90%", height: "100%", marginTop: 40 }}>
            <NoPublicationsMessage>
              Não há pedidos em andamento
            </NoPublicationsMessage>
          </View>
        )}
      </Content>
    </Container>
  );
};