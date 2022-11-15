import { useContext, useState } from "react";
import {
  Text,
  View,
  Image,
  ListRenderItem,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { InterestedCard } from "../InterestedCard";
import { Container, ResumeView } from "./styles";
import { IPost } from "../../../../../interfaces/Post/IPost";
import { IAutonomous } from "../../../../../interfaces/User/Autonomous/IAutonomous";
import {
  IServiceContext,
  ServiceContext,
} from "../../../../../contexts/Service/ServiceContext";
import { theme } from "../../../../../styles/theme";
import { AppTextArea } from "../../../../../components/AppComponents/Inputs/TextAreaInput";
import Icon from "react-native-vector-icons/AntDesign";

const RatingBar = ({
  maxRating,
  ratingValue,
  changeRating,
}: {
  maxRating: Array<number>;
  ratingValue: number;
  changeRating: (rating: number) => void;
}) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      {maxRating.map((item, index) => (
        <TouchableOpacity key={item} onPress={() => changeRating(item)}>
          <Icon
            name={item <= ratingValue ? "star" : "staro"}
            style={{ fontSize: 30, color: theme.colors.yellow_p }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const OpenPublicationCard = ({
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
  const { serviceTypes } = useContext(ServiceContext) as IServiceContext;
  const [seeInterested, setSeeInterested] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [rating, setRating] = useState(0);

  const handleClosePublication = () => {
    console.log("aaaaaaaaaa");

    setIsModal(true);
  };


  return (
    <Container seeInterested={seeInterested}>
      <Modal transparent={false} visible={isModal} animationType="fade">
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colors.background,
          }}
        >
          <View
            style={{
              width: "90%",
              height: "40%",
              backgroundColor: theme.colors.main,
              padding: 20,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              borderRadius: 10,
              position: "relative",
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                padding: 10,
                alignSelf: "flex-end",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
              onPress={() => setIsModal(false)}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: theme.colors.white,
                }}
              >
                X
              </Text>
            </TouchableOpacity>
            <View>
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    color: theme.colors.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  Avalie esse profissional
                </Text>
              </View>
              <View style={{ width: "100%", height: 100 }}>
                <RatingBar
                  maxRating={[1, 2, 3, 4, 5]}
                  ratingValue={rating}
                  changeRating={(rating) => setRating(rating)}
                />
              </View>
            </View>
            <AppTextArea
              placeholder="envie um comentario"
              onChange={() => null}
            />
            <TouchableOpacity
              style={{
                width: "100%",
                height: 60,
                backgroundColor: theme.colors.second,
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: theme.colors.yellow_p,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Botao
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
      <View
        style={{
          height: 40,
          width: "100%",
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: "90%",
            width: 100,
            backgroundColor: theme.colors.second,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",
          }}
          onPress={handleClosePublication}
        >
          <Text style={{ color: theme.colors.yellow_p }}>Concluir Pedido</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
