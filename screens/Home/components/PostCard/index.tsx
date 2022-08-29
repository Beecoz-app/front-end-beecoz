import { useState } from "react";
import { Text, View, Image, ListRenderItem, FlatList } from "react-native";
import { InterestedCard } from "../InterestedCard";
import { Container, InteresedView, ResumeView, ListInterested } from "./styles";

import { IPost } from "../../../../interfaces/Post/IPost";
import { IInterest } from "../../../../interfaces/Job/IInterested";
import { IAutonomous } from "../../../../interfaces/User/Autonomous/IAutonomous";

export const PostCard = ({ data }: { data: IPost }) => {
  const [seeInterested, setSeeInterested] = useState(false);

  const DATA: IInterest = {
    id: 1,
    interest: [
      {
        id: 1,
        name: "Thaigo",
        lasName: "Silva",
        sex: "Male",
        birthDate: "17-04-2005",
        CPF: "000000",
        profileImage: "",
        loginId: 1,
        profileId: 2,
        typeId: 1,
      },
    ],
    post: data.id
  };

  const renderItem: ListRenderItem<IAutonomous> = ({ item }) => (
    <InterestedCard data={item} />
  );

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
                {data.tags.map((tag, index) => (
                  <Text style={{ fontSize: 14, color: "#9FE4F4" }} key={index}>
                    {tag},{" "}
                  </Text>
                ))}
              </View>
            </View>
          </ResumeView>
          <InteresedView onPress={() => setSeeInterested(true)}>
            <Text>
              <Text style={{ fontWeight: "bold", color: "#9FE4F4" }}>
                numero de interessados (fazer)
              </Text>{" "}
            </Text>
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
              <View style={{ flexDirection: "row" }}>
                {data.tags.map((tag, index) => (
                  <Text style={{ fontSize: 14, color: "#9FE4F4" }} key={index}>
                    {tag},{" "}
                  </Text>
                ))}
              </View>
            </View>
          </ResumeView>
          <InteresedView onPress={() => setSeeInterested(false)}>
            <Text style={{ fontSize: 12, color: "#fff" }}>
              <Text style={{ fontWeight: "bold", color: "#9FE4F4" }}>
                numero de interessados (fazer)
              </Text>{" "}
            </Text>
          </InteresedView>

          <ListInterested>
            <FlatList<IAutonomous>
              data={DATA.interest}
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
