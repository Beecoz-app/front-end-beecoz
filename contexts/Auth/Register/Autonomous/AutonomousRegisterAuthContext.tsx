import React, { createContext, ReactNode, useContext, useState } from "react";
import { IClientRegister } from "../../../../interfaces/User/CLient/IClientRegister";
import { IAutonomousRegister } from "../../../../interfaces/User/Autonomous/IAutonomousRegister";

export interface IAutonomousAuthRegister {
  newAutonomous: IClientRegister | null;
  setNewAutonomous: React.Dispatch<React.SetStateAction<IClientRegister | null>>;
}
interface AutonomousAuthRegisterProviderProps {
  children: ReactNode;
}

export const AutonomousAuthRegisterContext =
  createContext<IAutonomousAuthRegister | null>(null);

export const AutonomousAuthRegisterProvider = ({
  children,
}: AutonomousAuthRegisterProviderProps) => {
  const [newAutonomous, setNewAutonomous] = useState<IAutonomousRegister | null>(null);

  

  return (
    <AutonomousAuthRegisterContext.Provider value={{ newAutonomous, setNewAutonomous }}>
      {children}
    </AutonomousAuthRegisterContext.Provider>
  );
};
