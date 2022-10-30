import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { setKeyboardType } from "../../../../utils/setKeyboardType";

interface InputProps extends  React.ComponentProps<typeof TextInput>{
  type: "email" | "phone" | "password" | "CPF" | "CNPJ" | 'text';
  placeholder: string;
}

export const AppGeneticEditInput = ({ type, placeholder, ...rest }: InputProps) => {
  const [focusInput, setFocusInput] = useState(false);

  return (
    <TextInput
      keyboardType={setKeyboardType(type)}
      placeholder={placeholder}
      placeholderTextColor={focusInput ? "#fff" : "#ccc"}
      onFocus={() => setFocusInput(true)}
      onBlur={() => setFocusInput(false)}
      style={focusInput ? styles.inputFocusStyle : styles.inputStyle}
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
