import React, { SetStateAction, useState } from "react";
import { GestureResponderEvent, Text } from "react-native";
import { Check, CheckContainer, FormContainer } from "./styles";

interface AppRadioButtonProps {
  values: Array<{ name: string; }>;
  getValue: (value: string) => void
}

export const AppRadioButton = ({ values, getValue }: AppRadioButtonProps) => {
  const [isChecked, setIsChecked] = useState<{value: string} | null>();

  const handleCheck = (currentValue: string) => {
    setIsChecked({value: currentValue})
    getValue(currentValue)
  }

  return (
    <FormContainer>
      {values.map((value) => (
        <CheckContainer onPress={() => handleCheck(value.name)}>
          {isChecked?.value === value.name ? <Check key={value.name} /> : null}
        </CheckContainer>
      ))}
    </FormContainer>
  );
};
