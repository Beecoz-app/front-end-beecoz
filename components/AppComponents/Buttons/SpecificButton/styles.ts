import styled from "../../../../styles/styledComponents";

interface ButtonProps {
    disabled: boolean
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    background-color: ${(props) => props.disabled ? 'red' : props.theme.colors.yellow_p};
    width: 90%;
    height: 60px;
    border-radius: 10px;
    justify-content: center;
    align-content: center;
    border: ${(props) => props.disabled ? '1px #aaa solid' : ''};
`

export const Text = styled.Text<ButtonProps>`
    color: ${(props) => props.disabled ? '#aaa' : props.theme.colors.second};
    font-size: 16px;
    font-weight: ${(props) => props.disabled ? '200' : '700'};
    text-align: center;
`