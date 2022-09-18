import { useContext, useState } from "react";
import { Text, View, Image, ListRenderItem, FlatList } from "react-native";
import { InterestedCard } from "../InterestedCard";
import { Container, InteresedView, ResumeView, ListInterested } from "./styles";

import { IPost } from "../../../../interfaces/Post/IPost";
import { IInterest } from "../../../../interfaces/Job/IInterested";
import { IAutonomous } from "../../../../interfaces/User/Autonomous/IAutonomous";
import { IPublicationContext, PublicationContext } from "../../../../contexts/Publication/PublicationContext";

export const PostCard = ({ data }: { data: IPost }) => {
  const { interest, servicesTypes } = useContext(
    PublicationContext
  ) as IPublicationContext;
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
        profileImage:
          "data:image/jpeg;base64,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",
        loginId: 1,
        profileId: 2,
        typeId: 1,
      },
    ],
    post: data.id,
  };

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
                {data.tags.map((tag, index) => {
                  return servicesTypes?.map(
                    (service, index) =>
                      service.id === tag && (
                        <Text
                          style={{ fontSize: 14, color: "#9FE4F4" }}
                          key={service.id}
                        >
                          {service.service}, {""}
                        </Text>
                      )
                  );
                })}
              </View>
            </View>
          </ResumeView>
          <InteresedView onPress={() => setSeeInterested(true)}>
          {interest.map((interestId, index) => {
              return (
                interestId.post === data.id && (
                  <Text style={{ fontWeight: "bold", color: "#9FE4F4" }}>
                    {interestId.interest.length}
                    {' '}
                    <Text>{interestId.interest.length < 2 ? 'interessado' : 'interessados'}</Text>
                  </Text>
                )
              );
            })}
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
                {data.tags.map((tag, index) => {
                  return servicesTypes?.map(
                    (service, index) =>
                      service.id === tag && (
                        <Text
                          style={{ fontSize: 14, color: "#9FE4F4" }}
                          key={service.id}
                        >
                          {service.service}, {""}
                        </Text>
                      )
                  );
                })}
              </View>
            </View>
          </ResumeView>
          <InteresedView onPress={() => setSeeInterested(false)}>
            {interest.map((interestId, index) => {
              return (
                interestId.post === data.id && (
                  <Text style={{ fontWeight: "bold", color: "#9FE4F4" }}>
                    {interestId.interest.length}
                    {' '}
                    <Text>{interestId.interest.length < 2 ? 'interessado' : 'interessados'}</Text>
                  </Text>
                )
              );
            })}
          </InteresedView>
          <ListInterested>
            {interest.map((interestId, index) => {
              return (
                interestId.post === data.id && (
                  <FlatList<IAutonomous>
                    data={interestId.interest}
                    renderItem={({ item }) => (
                      <InterestedCard key={item.id} data={item} />
                    )}
                  />
                )
              );
            })}
          </ListInterested>
        </>
      )}
    </Container>
  );
};
