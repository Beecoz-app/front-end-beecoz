import Icon from "react-native-vector-icons/Ionicons";
import { BackButton, Title } from "./styles";

interface HeaderProps {
  backable?: boolean;
  title: string;
}

export const Header = ({ title, backable, ...rest }: HeaderProps) => {
  return (
    <>
      {backable ? (
        <>
          <BackButton>
            <Icon name="arrow-back" size={20} style={{ color: "#fff" }} />
          </BackButton>
          <Title>{title}</Title>
        </>
      ) : (
        <>
          <Title>{title}</Title>
        </>
      )}
    </>
  );
};
