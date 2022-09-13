import React, { useContext } from "react";
import { Container, Content, Flat } from "./styles";
import { PostCard } from "../../components/PostCard";

import { IPublicationContext, PublicationContext } from "../../../../contexts/Publication/PublicationContext";

export const ProgressPosts = () => {
  const {publications} = useContext(PublicationContext) as IPublicationContext

  return (
    <Container>
      <Content>
        <Flat
          data={publications}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PostCard data={item} />}
        />
      </Content>
    </Container>
  );
};
