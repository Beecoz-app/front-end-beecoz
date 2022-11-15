import React, { useContext, useEffect, useState } from "react";
import { privateApi } from "../../../../../services/privateApi";
import { OpenPublicationCard } from "../../components/OpenPublicationCard";
import { Container, Content, Flat } from "./styles";
import * as SecureStore from "expo-secure-store";
import { IWorkContext, Work, WorkContext } from "../../../../../contexts/Work/WorkContext";

export const OpenedPublication = () => {
  const {setWorks, works} = useContext(WorkContext) as IWorkContext

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
