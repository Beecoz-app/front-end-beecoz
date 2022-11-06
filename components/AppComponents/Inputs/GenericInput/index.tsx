import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import TextInputMask from 'react-native-text-input-mask';
import { setKeyboardType } from "../../../../utils/setKeyboardType";

interface InputProps extends  React.ComponentProps<typeof TextInput>{
  type: "email" | "phone" | "password" | "CPF" | "CNPJ" | 'text';
  placeholder: string;
  changeText: (text: string) => void,
  mask: string
}

export const AppGeneticInput = ({ type, placeholder, changeText, mask,...rest }: InputProps) => {
  const [focusInput, setFocusInput] = useState(false);

  return (
    <TextInputMask
      keyboardType={setKeyboardType(type)}
      placeholder={placeholder}
      placeholderTextColor={focusInput ? "#fff" : "#ccc"}
      onFocus={() => setFocusInput(true)}
      onBlur={() => setFocusInput(false)}
      onChangeText={(formatted, extract) => changeText(String(extract))}
      style={focusInput ? styles.inputFocusStyle : styles.inputStyle}
      mask={mask}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    height: 60,
    borderBottomWidth: 2,
    borderColor: "#aaa",
    color: "#ccc",
  },
  inputFocusStyle: {
    width: "100%",
    height: 70,
    borderBottomWidth: 2,
    borderColor: "#fff",
    color: "#fff",
  },
});
