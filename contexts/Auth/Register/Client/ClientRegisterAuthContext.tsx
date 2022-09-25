import React, { createContext, ReactNode, useContext, useState } from "react";
import { IClient } from "../../../../interfaces/User/CLient/IClient";
import { IClientRegister } from "../../../../interfaces/User/CLient/IClientRegister";
import { api } from "../../../../services/api";
import { AuthContext, IAuthContext } from "../../AuthContext";
import * as SecureStore from 'expo-secure-store'
import axios from "axios";

export interface IClientAuthRegister {
  newClient: IClientRegister | null;
  setNewClient: React.Dispatch<React.SetStateAction<IClientRegister | null>>;
  handleRegisterNewClient: () => Promise<void>
}
interface ClientAuthRegisterProvider {
  children: ReactNode;
}

export const ClientAuthRegisterContext =
  createContext<IClientAuthRegister | null>(null);

export const ClientAuthRegisterProvider = ({
  children,
}: ClientAuthRegisterProvider) => {
  const {setUser, setToken} = useContext(AuthContext) as IAuthContext
  const [newClient, setNewClient] = useState<IClientRegister | null>(null);

  const handleRegisterNewClient = async () => {
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

      console.log(client, token)


      setUser(client)
      setToken(token)

      await SecureStore.setItemAsync("user", JSON.stringify(client));
      await SecureStore.setItemAsync("token", `Bearer ${token}`);


    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
      }
    }
  };

  return (
    <ClientAuthRegisterContext.Provider value={{ newClient, setNewClient, handleRegisterNewClient }}>
      {children}
    </ClientAuthRegisterContext.Provider>
  );
};
