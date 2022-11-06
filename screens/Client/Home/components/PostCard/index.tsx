import { useContext, useState } from "react";
import { Text, View, Image, ListRenderItem, FlatList } from "react-native";
import { InterestedCard } from "../InterestedCard";
import { Container, InteresedView, ResumeView, ListInterested } from "./styles";
import { IPost } from "../../../../../interfaces/Post/IPost";
import { IAutonomous } from "../../../../../interfaces/User/Autonomous/IAutonomous";
import {
  IServiceContext,
  ServiceContext,
} from "../../../../../contexts/Service/ServiceContext";

export const PostCard = ({ data }: { data: IPost }) => {
  const { serviceTypes } = useContext(ServiceContext) as IServiceContext;
  const [seeInterested, setSeeInterested] = useState(false);

  return (
    <Container seeInterested={seeInterested}>
      {!seeInterested ? (
        <>
          <ResumeView>
            <Image
              source={{ uri: data.photo }}
              resizeMode={"contain"}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 30,
              }}
            />
            <View
              style={{ width: 200, height: 60, justifyContent: "space-around" }}
            >
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
                {data.title}
              </Text>
              <View style={{ flexDirection: "row" }}>
                {serviceTypes.map((serviceType) =>
                  serviceType.id === data.tags ? (
                    <Text
                      style={{ fontSize: 14, color: "#9FE4F4" }}
                      key={serviceType.id}
                    >
                      {serviceType.service}, {""}
                    </Text>
                  ) : (
                    <></>
                  )
                )}
              </View>
            </View>
          </ResumeView>
          <InteresedView onPress={() => setSeeInterested(true)}>
            {data.interest.filter(
              (interest) => interest.autonomous.inChat === false
            ) && (
              <Text style={{ fontWeight: "bold", color: "#9FE4F4" }}>
                {data.interest.filter(interest => interest.autonomous.inChat === false).length}{" "}
                <Text>
                  {data.interest.filter(interest => interest.autonomous.inChat === false).length > 1 ? "interessados" : "interessado"}
                </Text>
              </Text>
            )}
          </InteresedView>
        </>
      ) : (
        <>
          <ResumeView>
            <Image
              source={{ uri: data.photo }}
              resizeMode={"contain"}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 30,
              }}
            />
            <View
              style={{ width: 200, height: 60, justifyContent: "space-around" }}
            >
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
                {data.title}
              </Text>
              <View style={{ flexDirection: "row" }}></View>
            </View>
          </ResumeView>
          <InteresedView onPress={() => setSeeInterested(false)}>
            {data.interest.filter(
              (interest) => interest.autonomous.inChat === false
            ) && (
              <Text style={{ fontWeight: "bold", color: "#9FE4F4" }}>
                {data.interest.filter(interest => interest.autonomous.inChat === false).length}{" "}
                <Text>
                  {data.interest.filter(interest => interest.autonomous.inChat === false).length > 1 ? "interessados" : "interessado"}
                </Text>
              </Text>
            )}
          </InteresedView>
          <ListInterested>
            <FlatList<{
              id: number;
              publicationId: number;
              autonomousId: number;
              autonomous: {
                id: number;
                name: string;
                login: string;
                inChat: boolean;
              };
            }>
              data={data.interest.filter(
                (interest) => interest.autonomous.inChat === false
              )}
              renderItem={({ item }) => (
                <InterestedCard key={item.id} data={item} />
              )}
            />
          </ListInterested>
        </>
      )}
    </Container>
  );
};
