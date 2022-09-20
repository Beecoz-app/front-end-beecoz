import React, { createContext, ReactNode, useState } from "react";
import { IClient } from "../../../../interfaces/User/CLient/IClient";

export interface IClientAuthRegister {
  newClient: Omit<IClient, 'id' | 'loginId' | 'profileId' | 'typeId'> | null;
  setNewClient: React.Dispatch<React.SetStateAction<Omit<IClient, 'id' | 'loginId' | 'profileId' | 'typeId'> | null>>;
}
interface ClientAuthRegisterProvider {
  children: ReactNode;
}

export const ClientAuthRegisterContext =
  createContext<IClientAuthRegister | null>(null);

export const ClientAuthRegisterProvider = ({
  children,
}: ClientAuthRegisterProvider) => {
  const [newClient, setNewClient] = useState<Omit<IClient, 'id' | 'loginId' | 'profileId' | 'typeId'> | null>({
    name: null,
    lastName: null,
    birthDate: null,
    CPF: null,
    profileImage: null,
    sex: null,
  });
  return (
    <ClientAuthRegisterContext.Provider value={{ newClient, setNewClient }}>
      {children}
    </ClientAuthRegisterContext.Provider>
  );
};
