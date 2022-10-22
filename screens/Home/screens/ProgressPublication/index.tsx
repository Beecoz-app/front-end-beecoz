import React, { useContext } from "react";
import {Text} from 'react-native'
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";
import { PostCard } from "../../components/PostCard";

import { IPublicationContext, PublicationContext } from "../../../../contexts/Publication/PublicationContext";

export const ProgressPosts = () => {
  const {publications} = useContext(PublicationContext) as IPublicationContext

  console.log(publications)

  return (
    <Container>
      <Content>
        {publications.length > 0 ? (

          <Flat
          data={publications}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PostCard data={item} />}
          />
          ): (
            <NoPublicationsMessage>
              <Text>
                AAaaasaaa
              </Text>
            </NoPublicationsMessage>
          )}
      </Content>
    </Container>
  );
};
