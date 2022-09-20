import React, { ReactNode } from "react";
import { ClientAuthRegisterProvider } from "./Client/ClientRegisterAuthContext";

interface RegisterAuthProviderProps {
  children: ReactNode;
}

export const RegisterAuthProvider = ({
  children,
}: RegisterAuthProviderProps) => {
  return <ClientAuthRegisterProvider>{children}</ClientAuthRegisterProvider>;
};
