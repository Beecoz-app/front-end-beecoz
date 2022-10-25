import styled from "../../../../styles/styledComponents";

export const Container = styled.View`
    flex: 1;
    width: 100%;

    background-color: ${({theme}) => theme.colors.background};
`

export const Content = styled.View`
    height: 100%;
    width: 90%;

    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: column;
`