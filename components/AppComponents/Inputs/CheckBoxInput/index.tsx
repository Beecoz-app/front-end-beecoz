import { useState } from "react";
import CheckBox from "react-native-bouncy-checkbox";

export const AppCheckBox = () => {
  const [check, setCheck] = useState(false);
  return (
    <CheckBox
      size={24}
      fillColor={"#666"}
      unfillColor={"#666"}
      innerIconStyle={{
        backgroundColor: "transaparent",
        borderRadius: 8,
      }}
      onPress={(isChecked: boolean) => setCheck(isChecked)}
    />
  );
};
