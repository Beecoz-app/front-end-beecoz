import { useContext, useState } from "react";
import { Text, View, Image, ListRenderItem, FlatList } from "react-native";
import { InterestedCard } from "../InterestedCard";
import {
  Container,
  DateText,
  DescriptionContainer,
  DescriptionContainerText,
  JoinInterestContainer,
  RegionText,
  Title,
  TitleContainer,
} from "./styles";
import { IPost } from "../../../../../interfaces/Post/IPost";
import { IAutonomous } from "../../../../../interfaces/User/Autonomous/IAutonomous";
import {
  IServiceContext,
  ServiceContext,
} from "../../../../../contexts/serviceContext/ServiceContext";
import { IAutonomousPost } from "../../../../../interfaces/Post/IAutonomousPost";
import { useTheme } from "styled-components";
import moment from "moment";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

export const PostCard = ({ data }: { data: IAutonomousPost }) => {
  const { serviceTypes } = useContext(ServiceContext) as IServiceContext;
  const [seeInterested, setSeeInterested] = useState(false);
  const theme = useTheme();

  return (
    <Container seeInterested={seeInterested}>
      <TitleContainer>
        <View>
          <Title style={{ fontSize: 26, color: theme.colors.white }}>
            {data.title}
          </Title>
          <RegionText style={{ color: theme.colors.blue_p }}>
            {data.region}
          </RegionText>
        </View>
        <View>
          <DateText>
            {moment(`${data.createDate}`).format("D[/]MM[/]YY")}
          </DateText>
        </View>
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionContainerText>{data.description}</DescriptionContainerText>
      </DescriptionContainer>
      <JoinInterestContainer>
        <TouchableOpacity>
          <Icon
            name="like2"
            style={{ fontSize: 16, color: theme.colors.white }}
          />
        </TouchableOpacity>
      </JoinInterestContainer>
    </Container>
  );
};
