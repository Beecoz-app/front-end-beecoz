import { useContext } from "react"
import { Text, View } from "react-native"
import { AppGeneticEditInput } from "../../../../components/AppComponents/Inputs/GenericEditInput"
import { AppGeneticInput } from "../../../../components/AppComponents/Inputs/GenericInput"
import { AuthContext, IAuthContext } from "../../../../contexts/Auth/AuthContext"
import {Container, Content, InputsContainer} from './styles'

export const EditProfileScreen = () => {
    const {user} = useContext(AuthContext) as IAuthContext

    return (
        <Container>
            <Content>

            <InputsContainer>
                <AppGeneticInput type="text" placeholder={user?.name as string}/>
                <AppGeneticEditInput type="text" placeholder={user?.name as string}/>
            </InputsContainer>
            </Content>
        </Container>
    )
}