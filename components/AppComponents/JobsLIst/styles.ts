import {FlatList} from 'react-native'
import styled from "../../../styles/styledComponents"

export const Flat = (styled.FlatList`
    max-height: 160px;
    width: 100%;

    padding: 10px 20px;

    border-radius: 10px;

    background-color: ${({theme}) => theme.colors.main};

` as unknown) as typeof FlatList