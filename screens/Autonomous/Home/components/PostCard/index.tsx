import { useContext, useState } from "react";
import { Text, View, Image, ListRenderItem, FlatList } from "react-native";
import { InterestedCard } from "../InterestedCard";
import { Container } from "./styles";
import { IPost } from "../../../../../interfaces/Post/IPost";
import { IAutonomous } from "../../../../../interfaces/User/Autonomous/IAutonomous";
import {
  IServiceContext,
  ServiceContext,
} from "../../../../../contexts/serviceContext/ServiceContext";
import { IAutonomousPost } from "../../../../../interfaces/Post/IAutonomousPost";
import { useTheme } from "styled-components";
import moment from "moment";
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from "react-native-gesture-handler";

export const PostCard = ({ data }: { data: IAutonomousPost }) => {
  const { serviceTypes } = useContext(ServiceContext) as IServiceContext;
  const [seeInterested, setSeeInterested] = useState(false);
  const theme = useTheme()

  return (
    <Container seeInterested={seeInterested}>
      <View style={{width: '100%', display: "flex", justifyContent: "space-between",alignContent: "center", flexDirection: "row"}}>
        <View>
          <Text style={{fontSize: 26, color: theme.colors.white}}>{data.title}</Text>
          <Text style={{color: theme.colors.blue_p}}>{data.region}</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, color: theme.colors.gray_100}}>{moment(`${data.createDate}`).format('D[/]MM[/]YY')}</Text>
        </View>
      </View>
      <View style={{width: '100%', marginTop: 30}}>
        <Text style={{fontSize: 18, width: '100%', color: theme.colors.white}}>{data.description}</Text>
      </View>
      <View style={{marginTop: 30, width: '100%'}}>
        <TouchableOpacity>
          <Icon name='like2' style={{fontSize: 16, color: theme.colors.white}}/>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
