import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { setKeyboardType } from "../../../../utils/setKeyboardType";

interface InputProps {
  type: "email" | "phone" | "password" | "CPF" | "CNPJ" | 'text';
  placeholder: string;
  onChange: (text: string) => void
}

export const AppGeneticInput = ({ type, placeholder, onChange , ...rest }: InputProps) => {
  const [focusInput, setFocusInput] = useState(false);

  return (
    <TextInput
      keyboardType={setKeyboardType(type)}
      placeholder={placeholder}
      placeholderTextColor={focusInput ? "#fff" : "#ccc"}
      onFocus={() => setFocusInput(true)}
      onBlur={() => setFocusInput(false)}
      onChangeText={onChange}
      {...rest}
      style={focusInput ? styles.inputFocusStyle : styles.inputStyle}
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
    width: "90%",
    height: 70,
    borderBottomWidth: 2,
    borderColor: "#fff",
    color: "#fff",
  },
});
