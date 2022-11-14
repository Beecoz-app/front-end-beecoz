import React, { useContext } from "react";
import { View } from "react-native";
import { IClientPublicationContext, ClientPublicationContext } from "../../../../../contexts/Client/Publication/ClientPublicationContext";
import { OpenPublicationCard } from "../../components/OpenPublicationCard";
import { PostCard } from "../../components/PostCard";
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";

export const OpenedPublication = () => {
  const { publications } = useContext(
    ClientPublicationContext
  ) as IClientPublicationContext;

  return (
    <Container>
      <Content>
          {publications.length > 0 ? (
              <Flat
                data={publications.filter(publication => publication.status === 'Open')}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <OpenPublicationCard data={item} />}
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
