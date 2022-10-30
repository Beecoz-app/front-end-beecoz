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
                <AppGeneticEditInput type="email" placeholder={user?.lastName as string } handlePress={() => console.log('vazio')}/>
                <AppGeneticEditInput type="email" placeholder={user?.profile.biography ?user?.profile.biography as string : 'edite uma biografia para vocẽ' } handlePress={() => console.log('vazio')}/>
            </InputsContainer>
            </Content>
        </Container>
    )
}