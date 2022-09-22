import React, { createContext, ReactNode, useState } from "react";
import { IClient } from "../../../../interfaces/User/CLient/IClient";

export interface IClientAuthRegister {
  newClient: {
    teste: string,
    teste2: string
  } | null;
  setNewClient: React.Dispatch<React.SetStateAction<{
    teste: string,
    teste2: string
  } | null>>;
}
interface ClientAuthRegisterProvider {
  children: ReactNode;
}

export const ClientAuthRegisterContext =
  createContext<IClientAuthRegister | null>(null);

export const ClientAuthRegisterProvider = ({
  children,
}: ClientAuthRegisterProvider) => {
  const [newClient, setNewClient] = useState<{
    teste: string,
    teste2: string
  } | null>(null);
  
  return (
    <ClientAuthRegisterContext.Provider value={{ newClient, setNewClient }}>
      {children}
    </ClientAuthRegisterContext.Provider>
  );
};
