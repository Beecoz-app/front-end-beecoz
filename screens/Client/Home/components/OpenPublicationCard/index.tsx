import { useContext, useState } from "react";
import { Text, View, Image, ListRenderItem, FlatList } from "react-native";
import { InterestedCard } from "../InterestedCard";
import { Container, ResumeView } from "./styles";
import { IPost } from "../../../../../interfaces/Post/IPost";
import { IAutonomous } from "../../../../../interfaces/User/Autonomous/IAutonomous";
import {
  IServiceContext,
  ServiceContext,
} from "../../../../../contexts/Service/ServiceContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../../../../styles/theme";

export const OpenPublicationCard = ({ data }: { data: IPost }) => {
  const { serviceTypes } = useContext(ServiceContext) as IServiceContext;
  const [seeInterested, setSeeInterested] = useState(false);

  return (
    <Container seeInterested={seeInterested}>
      <ResumeView>
        <Image
          source={require("../../../../../assets/user.png")}
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
      <View style={{height:40, width: '100%', paddingLeft: 20, paddingRight: 20}}>
        <TouchableOpacity style={{height: '90%', width: 100, backgroundColor: theme.colors.second, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end'}}>
          <Text style={{color: theme.colors.yellow_p}}>Concluir Pedido</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
