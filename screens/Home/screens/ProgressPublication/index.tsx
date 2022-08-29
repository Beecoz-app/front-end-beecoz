import React, { useContext } from "react";
import { ListRenderItem } from "react-native";
import { Container, Content, Flat } from "./styles";
import { PostCard } from "../../components/PostCard";

import { IPost } from "../../../../interfaces/Post/IPost";
import { IPublicationContext, PublicationContext } from "../../../../contexts/MainContext";

export const ProgressPosts = () => {
  const {publications} = useContext(PublicationContext) as IPublicationContext

  const renderItem: ListRenderItem<IPost> = ({ item }) => (
    <PostCard data={item} key={item.id} />
  );
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
