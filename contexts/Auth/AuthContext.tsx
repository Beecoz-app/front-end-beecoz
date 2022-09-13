import { createContext, ReactNode, useState } from "react";
import { IAutonomous } from "../../interfaces/User/Autonomous/IAutonomous";
import { IClient } from "../../interfaces/User/CLient/IClient";

export interface IAuthContext {
  user: IClient | IAutonomous | null;
  setUser:
    | React.Dispatch<React.SetStateAction<null | IClient | IAutonomous> > | null
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IClient | IAutonomous | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
