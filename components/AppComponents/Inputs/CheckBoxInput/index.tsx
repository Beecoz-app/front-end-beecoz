import { useState } from "react";
import CheckBox from "react-native-bouncy-checkbox";

interface AppCheckProps {
  onCheck: () => void
}

export const AppCheckBox = ({onCheck}: AppCheckProps) => {
  const [check, setCheck] = useState(false);
  return (
    <CheckBox
      size={18}
      fillColor={"#666"}
      unfillColor={"#666"}
      innerIconStyle={{
        backgroundColor: "transaparent",
        borderRadius: 6,
      }}
      onPress={onCheck}
    />
  );
};
