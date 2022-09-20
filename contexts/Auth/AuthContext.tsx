import axios, { AxiosError } from "axios";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { IAutonomous } from "../../interfaces/User/Autonomous/IAutonomous";
import { IClient } from "../../interfaces/User/CLient/IClient";
import { api, CommonHeaderProperties } from "../../services/api";
import * as SecureStore from 'expo-secure-store'

export interface IAuthContext {
  user: IClient | IAutonomous | null;
  setUser:
    | React.Dispatch<React.SetStateAction<null | IClient | IAutonomous> > | null;
  handleLogin: ({email, password}: {email: string; password: string}) => Promise<void>;
  handleLogout: () => Promise<void>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IClient | IAutonomous | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = async ({email, password}: {email: string; password: string}) => {
    try {
        const {data: {user, token}} = await api.post<{user: IClient | IAutonomous, token: string}>('/auth/login', {
          email,
          password
        })

        setUser(user)
        setToken(token)

        await SecureStore.setItemAsync('user', JSON.stringify(user))
        await SecureStore.setItemAsync('token', `Bearer ${token}`)

        api.defaults.headers = {authorization: `Bearer ${token}`} as CommonHeaderProperties
        
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) console.log(error.response)
    }
  }
  const handleLogout = async () => {
    setUser(null)
    setToken(null)

    await SecureStore.deleteItemAsync('token')
    await SecureStore.deleteItemAsync('user')
  }

  useEffect(() => {
    const initializeToken = async () => {
      const token = await SecureStore.getItemAsync('token')
      const user = await SecureStore.getItemAsync('user')

      console.log(token)
      console.log(user)

      setToken(token)
      setUser(JSON.parse(String(user)))
    }
    initializeToken()
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin, token, setToken, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
