import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import {
  IClientPublicationContext,
  ClientPublicationContext,
} from "../../../../../contexts/Client/Publication/ClientPublicationContext";
import { privateApi } from "../../../../../services/privateApi";
import { OpenPublicationCard } from "../../components/OpenPublicationCard";
import { PostCard } from "../../components/PostCard";
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";
import * as SecureStore from "expo-secure-store";

export const OpenedPublication = () => {
  const [works, setWorks] = useState<
    {
      id: 1;
      status: "Progress" | "Open" | "Completed";
      interest: {
        id: number;
        publicationId: number;
        autonomousId: number;
        publication: {
          id: number;
          title: string;
          description: string;
          region: string;
          data: string;
          servTypeId: 1;
          clientId: 1;
          status: "Open" | "Progress" | "Completed";
        };
      };
    }[]
  >([]);

  useEffect(() => {
    const getAllWorks = async () => {
      const { data } = await privateApi.get("/work/works", {
        headers: {
          authorization: (await SecureStore.getItemAsync("token")) as string,
        },
      });

      console.log("bbbbbbbbbbbbbbbb", data.works[0].publication);

      setWorks(data.works);
    };

    getAllWorks();
  }, []);

  console.log("ccccccccccccc", works);

  return (
    <Container>
      <Content>
        <Flat
          data={works.filter((work) => work.status === "Progress")}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <OpenPublicationCard data={item} />}
        />
      </Content>
    </Container>
  );
};
