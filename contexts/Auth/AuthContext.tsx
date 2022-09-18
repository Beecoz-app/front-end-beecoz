import axios, { AxiosError } from "axios";
import { createContext, ReactNode, useState } from "react";
import { IAutonomous } from "../../interfaces/User/Autonomous/IAutonomous";
import { IClient } from "../../interfaces/User/CLient/IClient";
import { api, CommonHeaderProperties } from "../../services/api";
import SecureStore from 'expo-secure-store'

export interface IAuthContext {
  user: IClient | IAutonomous | null;
  setUser:
    | React.Dispatch<React.SetStateAction<null | IClient | IAutonomous> > | null;
  handleLogin: ({email, password}: {email: string; password: string}) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IClient | IAutonomous | null>(null);

  const handleLogin = async ({email, password}: {email: string; password: string}) => {
    try {
        const {data: {user, token}} = await api.post<{user: IClient | IAutonomous, token: string}>('/auth/login', {
          email,
          password
        })

        setUser(user)

        SecureStore.setItemAsync('user', JSON.stringify(user))
        SecureStore.setItemAsync('token', `Bearer ${token}`)

        api.defaults.headers = {authorization: `Bearer ${token}`} as CommonHeaderProperties
        
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
