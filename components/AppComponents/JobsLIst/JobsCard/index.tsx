import React from "react"
import {Text} from 'react-native'
import { useTheme } from "styled-components"
import { IServiceType } from "../../../../interfaces/Service/IServiceType"
import { AppCheckBox } from "../../Inputs/CheckBoxInput"
import { Container } from "./styles"

interface AppJobsCardProps {
    service: IServiceType 
}

export const AppJobsCard = ({service}: AppJobsCardProps) => {
    const theme = useTheme()
    return (
        <Container>
            <AppCheckBox />
              <Text style={{color: theme.colors.gray_100, fontWeight: '500'}}>{service.service}</Text>
        </Container>
    )
}