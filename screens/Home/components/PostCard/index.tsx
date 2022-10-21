import { useContext, useState } from "react";
import { Text, View, Image, ListRenderItem, FlatList } from "react-native";
import { InterestedCard } from "../InterestedCard";
import { Container, InteresedView, ResumeView, ListInterested } from "./styles";
import { IPost } from "../../../../interfaces/Post/IPost";
import { IAutonomous } from "../../../../interfaces/User/Autonomous/IAutonomous";
import { IPublicationContext, PublicationContext } from "../../../../contexts/Publication/PublicationContext";

export const PostCard = ({ data }: { data: IPost }) => {
  const { publications } = useContext(
    PublicationContext
  ) as IPublicationContext;
  const [seeInterested, setSeeInterested] = useState(false);

  console.log(publications)

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
                {/* {data.tags.map((tag, index) => {
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
                })} */}
              </View>
            </View>
          </ResumeView>
          <InteresedView onPress={() => setSeeInterested(true)}>
          {publications.map((publication, index) => {
              return (
                publication.id === data.id && (
                  <Text style={{ fontWeight: "bold", color: "#9FE4F4" }}>
                    {publication.interest.length}
                    {' '}
                    <Text>{publication.interest.length < 2 ? 'interessado' : 'interessados'}</Text>
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
                {/* {data.tags.map((tag, index) => {
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
                })} */}
              </View>
            </View>
          </ResumeView>
          <InteresedView onPress={() => setSeeInterested(false)}>
            {publications.map((publication, index) => {
              return (
                publication.id === data.id && (
                  <Text style={{ fontWeight: "bold", color: "#9FE4F4" }}>
                    {publication.interest.length}
                    {' '}
                    <Text>{publication.interest.length < 2 ? 'interessado' : 'interessados'}</Text>
                  </Text>
                )
              );
            })}
          </InteresedView>
          <ListInterested>
            {publications.map((publication, index) => {
              return (
                publication.id === data.id && (
                  <FlatList<IAutonomous>
                    data={publication.interest}
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
