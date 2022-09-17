import { createContext, ReactNode, useState } from "react";
import { IAutonomous } from "../../interfaces/User/Autonomous/IAutonomous";
import { IClient } from "../../interfaces/User/CLient/IClient";
import { api } from "../../services/api";

export interface IAuthContext {
  user: IClient | IAutonomous | null;
  setUser:
    | React.Dispatch<React.SetStateAction<null | IClient | IAutonomous> > | null;
  login: ({email, password}: {email: string; password: string}) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IClient | IAutonomous | null>(null);

  const login = async ({email, password}: {email: string; password: string}) => {
    try {
        const {data} = await api.post('/auth/login', {
          email,
          password
        })
        
        console.log(data)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
