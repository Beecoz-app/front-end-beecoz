import React, { useEffect, useState } from "react";
import { privateApi } from "../../../../../services/privateApi";
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";
import * as SecureStore from "expo-secure-store";
import { CompletedPublicationCard } from "../../components/CompletedPublicationCard";

export const ConcludedPublication = () => {
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

      setWorks(data.works);
    };

    getAllWorks();
  }, []);

  return (
    <Container>
      <Content>
        <Flat
          data={works.filter((work) => work.status === "Completed")}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CompletedPublicationCard data={item} />}
        />
      </Content>
    </Container>
  );
};
