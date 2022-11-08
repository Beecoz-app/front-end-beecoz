import React, { useContext, useEffect, useState } from "react";
import { Container, Content, Flat } from "./styles";
import { AutonomousPostCard } from "../../components/AutonomousPostCard/";
import {
  AutonomousPublicationContext,
  IAutonomousPublicationContext,
} from "../../../../../contexts/Autonomous/Publication/AutonomousPublicationContext";
import { privateApi } from "../../../../../services/privateApi";
import { IAutonomousPost } from "../../../../../interfaces/Post/IAutonomousPost";
import * as SecureStore from "expo-secure-store";
import { Text, View } from "react-native";

export const ProgressPosts = () => {
  const { publications, setPublications } = useContext(
    AutonomousPublicationContext
  ) as IAutonomousPublicationContext;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const { data } = await privateApi.get<IAutonomousPost[]>(
        "/autonomous/publications",
        {
          headers: {
            authorization: (await SecureStore.getItemAsync("token")) as string,
          },
        }
      );

      setPublications(data);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      <Content>
        {isLoading ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : (
          <>
            <Flat
              data={publications}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <AutonomousPostCard data={item} />}
            />
          </>
        )}
      </Content>
    </Container>
  );
};
