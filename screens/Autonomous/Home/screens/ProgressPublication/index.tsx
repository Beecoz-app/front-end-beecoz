import React, { useContext } from "react";
import { Container, Content, Flat } from "./styles";
import { AutonomousPostCard } from "../../components/AutonomousPostCard/";
import { IAutonomousPost } from "../../../../../interfaces/Post/IAutonomousPost";
import { AutonomousPublicationContext, IAutonomousPublicationContext } from "../../../../../contexts/Autonomous/Publication/AutonomousPublicationContext";

export const ProgressPosts = () => {
  const {publications} = useContext(AutonomousPublicationContext) as IAutonomousPublicationContext

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
  
  console.log('bbbbbbbbb', publications)

  return (
    <Container>
      <Content>
        <Flat
          data={publications}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <AutonomousPostCard data={item} />}
        />
      </Content>
    </Container>
  );
};
