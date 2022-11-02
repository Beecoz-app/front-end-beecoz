import React, { useContext } from "react";
import { Container, Content, Flat } from "./styles";
import { AutonomousPostCard } from "../../components/AutonomousPostCard/";
import { AutonomousPublicationContext, IAutonomousPublicationContext } from "../../../../../contexts/Autonomous/Publication/AutonomousPublicationContext";

export const ProgressPosts = () => {
  const {publications} = useContext(AutonomousPublicationContext) as IAutonomousPublicationContext
  
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
