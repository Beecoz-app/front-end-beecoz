import React, { createContext, ReactNode, useState } from "react";
import { IClient } from "../../../../interfaces/User/CLient/IClient";

export interface IClientAuthRegister {
    newClient: IClient | null
    setNewClient: React.Dispatch<React.SetStateAction<IClient | null>>
}
interface ClientAuthRegisterProvider {
    children: ReactNode
}


export const ClientAuthRegisterContext = createContext<IClientAuthRegister | null>(null)

export const ClientAuthRegisterProvider = ({children}: ClientAuthRegisterProvider) => {
    const [newClient, setNewClient] = useState<IClient | null>(null);
    return (
        <ClientAuthRegisterContext.Provider value={{newClient, setNewClient}}>
            {children}
        </ClientAuthRegisterContext.Provider>
    )
}