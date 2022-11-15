import React, { useContext, useEffect, useState } from "react";
import { privateApi } from "../../../../../services/privateApi";
import { Container, Content, Flat, NoPublicationsMessage } from "./styles";
import * as SecureStore from "expo-secure-store";
import { CompletedPublicationCard } from "../../components/CompletedPublicationCard";
import { IWorkContext, Work, WorkContext } from "../../../../../contexts/Work/WorkContext";

export const ConcludedPublication = () => {
  const {setWorks,works} = useContext(WorkContext) as IWorkContext

  useEffect(() => {
    const getAllWorks = async () => {
      const { data } = await privateApi.get<{works: Work[]}>("/work/works", {
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
