import { Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { useTheme } from "styled-components"
import {Container, Content, IconContainer, OptionsContainer} from './styles'

export const SettingsScreen = () => {
    const theme = useTheme()

    return (
        <Container>
            <Content>
                <IconContainer>
                    <Icon name='settings-sharp' style={{ fontSize: 25, color: theme.colors.yellow_p }}/>
                </IconContainer>
                <OptionsContainer>

                </OptionsContainer>
            </Content>
        </Container>
    )
}