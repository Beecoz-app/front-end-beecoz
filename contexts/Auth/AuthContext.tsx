import axios, { AxiosError } from "axios";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IAutonomous } from "../../interfaces/User/Autonomous/IAutonomous";
import { IClient } from "../../interfaces/User/CLient/IClient";
import { api, CommonHeaderProperties } from "../../services/api";
import * as SecureStore from "expo-secure-store";
import { RegisterAuthProvider } from "./Register/RegisterAuthContext";
import { ClientAuthRegisterContext, IClientAuthRegister } from "./Register/Client/ClientRegisterAuthContext";
import { IClientRegister } from "../../interfaces/User/CLient/IClientRegister";
import { IAutonomousRegister } from "../../interfaces/User/Autonomous/IAutonomousRegister";

export interface IAuthContext {
  user: IClient | IAutonomous | null;
  setUser: React.Dispatch<
    React.SetStateAction<null | IClient | IAutonomous>
  >;
  handleLogin: ({
    login,
    password,
    type
  }: {
    login: string;
    password: string;
    type: string
  }) => Promise<void>;
  handleLogout: () => Promise<void>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;

  handleRegisterNewClient: ({newClient}: {newClient: IClientRegister | null}) => void
  handleRegisterNewAutonomous: ({newAutonomous}: {newAutonomous: IAutonomousRegister | null}) => void
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IClient | IAutonomous | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = async ({
    login,
    password,
    type
  }: {
    login: string;
    password: string;
    type: string
  }) => {
    try {
      const {
        data: { user, token },
      } = await api.post<{ user: IClient | IAutonomous; token: string }>(
        "/auth/login",
        {
          login,
          password,
          type
        }
      );

      setUser(user);
      setToken(token);

      await SecureStore.setItemAsync("user", JSON.stringify(user));
      await SecureStore.setItemAsync("token", `Bearer ${token}`);

      api.defaults.headers = {
        authorization: `Bearer ${token}`,
      } as CommonHeaderProperties;
      
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) console.log(error.response);
    }
  };
  const handleLogout = async () => {
    setUser(null);
    setToken(null);

    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("user");
  };

  useEffect(() => {
    const initializeToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      const user = await SecureStore.getItemAsync("user");

      console.log(token);
      console.log(user);

      setToken(token);
      setUser(JSON.parse(String(user)));
    };
    initializeToken();
  }, []);

  const handleRegisterNewClient = async ({newClient}: {newClient: IClientRegister | null}) => {
    try {
      const {data: {client, token}} = await api.post<{client: IClient, token: string}>("/auth/clients/register", {
        name: newClient?.name,
        login: newClient?.login,
        password: newClient?.password,
        lastName: newClient?.lastName,
        gender: newClient?.gender,
        bornDate: "2005-04-17",
        cpf: newClient?.cpf,
        biography: '',
      });


      setUser(client)
      setToken(token)

      console.log('new client', client)
      console.log('token', token)

      await SecureStore.setItemAsync("user", JSON.stringify(client));
      await SecureStore.setItemAsync("token", `Bearer ${token}`);


    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
      }
    }
  };

  const handleRegisterNewAutonomous = async ({newAutonomous}: {newAutonomous: IAutonomousRegister | null}) => {
    try {
      const {data: {autonomous, token}} = await api.post<{autonomous: IAutonomous, token: string}>("/auth/clients/register", {
        name: newAutonomous?.name,
        login: newAutonomous?.login,
        password: newAutonomous?.password,
        lastName: newAutonomous?.lastName,
        gender: newAutonomous?.gender,
        bornDate: "2005-04-17",
        cpf: newAutonomous?.cpf,
        cnpj: newAutonomous?.cnpj,
        biography: '',
      });


      setUser(autonomous)
      setToken(token)

      console.log('new client', autonomous)
      console.log('token', token)

      await SecureStore.setItemAsync("user", JSON.stringify(autonomous));
      await SecureStore.setItemAsync("token", `Bearer ${token}`);


    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, handleLogin, token, setToken, handleLogout, handleRegisterNewClient, handleRegisterNewAutonomous }}
    >
      <RegisterAuthProvider>{children}</RegisterAuthProvider>
    </AuthContext.Provider>
  );
};
