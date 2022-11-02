import React, { useContext } from "react";
import { Container, Content, Flat } from "./styles";
import { AutonomousPostCard } from "../../components/AutonomousPostCard/";
import { IAutonomousPost } from "../../../../../interfaces/Post/IAutonomousPost";

export const ProgressPosts = () => {

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
