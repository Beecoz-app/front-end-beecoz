import React, { useEffect, useState } from "react";
import { privateApi } from "../../../../../services/privateApi";
import { OpenPublicationCard } from "../../components/OpenPublicationCard";
import { Container, Content, Flat } from "./styles";
import * as SecureStore from "expo-secure-store";

export const OpenedPublication = () => {
  const [works, setWorks] = useState<
    {
      id: number;
      status: "Progress" | "Open" | "Completed";
      interest: {
        id: number;
        publicationId: number;
        autonomousId: number;
        autonomous: {
          id: number;
          login: string;
        };
        publication: {
          id: number;
          title: string;
          description: string;
          region: string;
          data: string;
          servTypeId: 1;
          clientId: 1;
          status: "Open" | "Progress" | "Completed";
          client: {
            id: number;
            login: string;
          };
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
          data={works.filter((work) => work.status === "Progress")}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <OpenPublicationCard data={item} />}
        />
      </Content>
    </Container>
  );
};
