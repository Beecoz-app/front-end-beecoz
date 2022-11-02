import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
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
import { IAutonomousPost } from "../../../../../interfaces/Post/IAutonomousPost";
import { useTheme } from "styled-components";
import moment from "moment";
import Icon from "react-native-vector-icons/AntDesign";

export const AutonomousPostCard = ({ data }: { data: IAutonomousPost }) => {
  const [inInterest, setInInterest] = useState(false);
  const theme = useTheme();

  const handleEnterOrExitToInterest = () => {

    setInInterest((prev: any) => !prev);
  };

  return (
    <Container>
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
        <TouchableOpacity onPress={handleEnterOrExitToInterest}>
          {inInterest ? (
            <Icon
              name="like1"
              style={{ fontSize: 16, color: theme.colors.white }}
            />
          ) : (
            <Icon
              name="like2"
              style={{ fontSize: 16, color: theme.colors.white }}
            />
          )}
        </TouchableOpacity>
      </JoinInterestContainer>
    </Container>
  );
};
