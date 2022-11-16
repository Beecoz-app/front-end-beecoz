import { Text } from "react-native"
import { Container,SelectText } from "./styles"

interface IJobsSelecetItem {
    data: {
        service: string;
    },
    onClose: () => void,
    setNameText: (name: string) => void
}

export const JobsSelecetItem = ({data, onClose,setNameText}: IJobsSelecetItem) => {
    return (
        <Container onPress={() => {
            setNameText(data.service)
            onClose()
        }}>
            <SelectText >{data.service}</SelectText>
        </Container>
    )
}