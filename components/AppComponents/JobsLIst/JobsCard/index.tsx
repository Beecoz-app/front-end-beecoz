import React from "react"
import {Text} from 'react-native'
import { useTheme } from "styled-components"
import { IServiceType } from "../../../../interfaces/Service/IServiceType"
import { AppCheckBox } from "../../Inputs/CheckBoxInput"
import { Container } from "./styles"

interface AppJobsCardProps {
    service: IServiceType,
    setValue: (value: string) => void
}

export const AppJobsCard = ({service, setValue}: AppJobsCardProps) => {
    const theme = useTheme()
    return (
        <Container>
            <AppCheckBox  onPress={() => setValue(String(service.id))} />
              <Text style={{color: theme.colors.gray_100, fontWeight: '500'}}>{service.service}</Text>
        </Container>
    )
}