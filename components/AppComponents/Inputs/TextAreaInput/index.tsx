import React, { useState } from "react";
import { TextInput } from "react-native";
import { Container } from "./styles";

interface InputProps {
  placeholder: string;
}

export const AppTextArea = ({ placeholder, ...rest }: InputProps) => { useState(false);
  return (
    <Container
      multiline={true}
      numberOfLines={4}
      placeholder={placeholder}
      {...rest}
    />
  );
};
