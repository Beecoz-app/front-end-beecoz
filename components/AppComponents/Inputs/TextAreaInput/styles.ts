import styled from "../../../../styles/styledComponents";

export const Container = styled.TextInput.attrs((props) => ({
    placeholderTextColor: '#fff'
}))`
    width: 100%;
    height: 100px;
    padding: 20px;
    background-color: ${({theme}) => theme.colors.main};
    color: #fff;
    border-radius: 10px;
`