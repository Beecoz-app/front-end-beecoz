import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";
import { AutonomousPostCard } from "../../components/AutonomousPostCard/";

import {
  IPublicationContext,
  PublicationContext,
} from "../../../../../contexts/Publication/PublicationContext";
import { IAutonomousPost } from "../../../../../interfaces/Post/IAutonomousPost";

export const ProgressPosts = () => {
  const { publications } = useContext(
    PublicationContext
  ) as IPublicationContext;

  const MOCK_AUTONOMOS_POST: IAutonomousPost[] = [
    {
      id: 1,
      title: 'teste',
      region: 'Santana de Parnaiba',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, veniam aut itaque exercitationem numquam voluptatum!',
      serviceTypeId: 1,
      createDate: new Date()
    }
  ]

  return (
    <Container>
      <Content>
        <Flat
          data={MOCK_AUTONOMOS_POST}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <AutonomousPostCard data={item} />}
        />
      </Content>
    </Container>
  );
};
