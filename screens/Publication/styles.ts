import styled from "../../styles/styledComponents";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`

export const Content = styled.View`
    width: 100%;
    height: 80%;

    justify-content: space-evenly;
    align-items: center;

    align-self: center;
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