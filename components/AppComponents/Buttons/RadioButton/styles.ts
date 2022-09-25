import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "../../../../styles/styledComponents";

export const FormContainer = styled.View`

`

export const CheckContainer = (styled.TouchableOpacity`
  height: 16px;
  width: 16px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #000;
  align-items: center;
  justify-content: center;
` as unknown) as typeof TouchableOpacity

export const Check = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 6px;
  background-color: #000;
`;
