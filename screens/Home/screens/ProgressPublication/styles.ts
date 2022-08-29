import { FlatList } from "react-native";
import styled from "../../../../styles/styledComponents";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`

export const Content = styled.View`
    width: 100%;

    justify-content: center;
    align-items: center;

    align-self: center;
`
export const Flat = (styled.FlatList`
    width: 90%;
    margin-bottom: 80px;
    margin-top: 20px;

` as unknown) as typeof FlatList
