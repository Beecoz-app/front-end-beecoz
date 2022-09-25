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
}
interface ClientAuthRegisterProvider {
  children: ReactNode;
}

export const ClientAuthRegisterContext =
  createContext<IClientAuthRegister | null>(null);

export const ClientAuthRegisterProvider = ({
  children,
}: ClientAuthRegisterProvider) => {
  const [newClient, setNewClient] = useState<IClientRegister | null>(null);

  

  return (
    <ClientAuthRegisterContext.Provider value={{ newClient, setNewClient }}>
      {children}
    </ClientAuthRegisterContext.Provider>
  );
};
