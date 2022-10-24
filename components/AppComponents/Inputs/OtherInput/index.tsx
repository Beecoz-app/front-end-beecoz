import {AddPublicationInputText} from './styles'

interface AppOtherInputProps {
    placeholder: string;
    value: string;
    changeValue: (value: string) => void
}

export const AppOtherInput = ({placeholder, changeValue, value}: AppOtherInputProps) => {
    return (
        <AddPublicationInputText
            placeholder={placeholder}
            keyboardType="default"
            value={value}
            onChangeText={(text) => changeValue(text)}
          />
    )
}