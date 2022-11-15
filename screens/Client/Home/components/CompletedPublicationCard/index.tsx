import {
  Text,
  View,
  Image,
} from "react-native";
import { Container, ResumeView } from "./styles";

export const CompletedPublicationCard = ({
  data,
}: {
  data: {
    id: 1;
    status: "Progress" | "Open" | "Completed";
    interest: {
      id: number;
      publicationId: number;
      autonomousId: number;
      publication: {
        id: number,
      title: string,
      description: string,
      region: string,
      data: string,
      servTypeId: 1,
      clientId: 1,
      status: "Open" | "Progress" | 'Completed'
    }
  };
  };
}) => {
  return (
    <Container>
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
            {data.interest.publication.title}
          </Text>
        </View>
      </ResumeView>
    </Container>
  );
};
