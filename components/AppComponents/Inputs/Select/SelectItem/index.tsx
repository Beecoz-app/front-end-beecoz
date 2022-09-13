import { Text } from "react-native"
import { Container,SelectText } from "./styles"

interface SelecetItem {
    data: {
        name: string;
        code: string;
    }
}

export const SelectItem = ({data}: SelecetItem) => {
    return (
        <Container>
            <SelectText >{data.name}</SelectText>
        </Container>
    )
}