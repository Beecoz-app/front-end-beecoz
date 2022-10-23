import { TextInput } from "react-native-gesture-handler";
import styled from "../../styles/styledComponents";
import { theme } from "../../styles/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    justify-content: space-between;
`

export const Content = styled.View`
    width: 90%;
    flex: 1;

    justify-content: space-evenly;
    align-items: center;

    align-self: center;

    overflow-y: scroll;
`

export const AddImageContainer = styled.TouchableOpacity`
    width: 90%;
    height: 100px;

    justify-content: center;
    align-items: center;
`

export const AddImageContent = styled.View`
    height: 80px;
    width: 80px;

    justify-content: center;
    align-items: center;

    border-radius: 50px;

    background-color: ${({theme}) => theme.colors.main};

`

export const AddPublicationInputText = (styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.colors.gray_100,
}))`
    width: 100%;
    height: 60px;

    padding: 20px;

    border-radius: 10px;


    background-color: ${({theme}) => theme.colors.main};

` as unknown) as TextInput