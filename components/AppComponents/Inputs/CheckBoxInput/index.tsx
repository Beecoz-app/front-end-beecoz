import { useState } from "react";
import CheckBox from "react-native-bouncy-checkbox";

interface AppCheckProps {
}

export const AppCheckBox = () => {
  return (
    <CheckBox
      size={18}
      fillColor={"#666"}
      unfillColor={"#666"}
      innerIconStyle={{
        backgroundColor: "transaparent",
        borderRadius: 6,
      }}
    />
  );
};
