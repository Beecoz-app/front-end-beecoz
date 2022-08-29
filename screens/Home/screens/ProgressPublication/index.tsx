import React from "react";
import { ListRenderItem } from "react-native";
import { Container, Content, Flat } from "./styles";
import { PostCard } from "../../components/PostCard";

import { IPost } from "../../../../interfaces/Post/IPost";

export const ProgressPosts = () => {
  const DATA: IPost[] = [
    {
      id: 1,
      title: "Fazer armário",
      description: "blah",
      photo: "",
      region: "Santana de Parnaíba",
      date: "17-04-2005",
      clientId: 1,
      serviceType: 1,
      tags: [1, 2],
    },
  ];

  const renderItem: ListRenderItem<IPost> = ({ item }) => (
    <PostCard data={item} key={item.id} />
  );
  return (
    <Container>
      <Content>
        <Flat
          data={DATA}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PostCard data={item} />}
        />
      </Content>
    </Container>
  );
};
