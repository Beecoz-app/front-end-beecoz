import { createContext, useState } from "react";
import { IInterest } from "../interfaces/Job/IInterested";
import { IPost } from "../interfaces/Post/IPost";
import { IServiceType } from "../interfaces/Service/IServiceType";
import { IAutonomous } from "../interfaces/User/Autonomous/IAutonomous";
import { IClient } from "../interfaces/User/CLient/IClient";
import { AuthProvider } from "./Auth/AuthContext";
import { PublicationProvider } from "./Publication/PublicationContext";

export interface IPublicationContext {
  publications: IPost[] | null;
  setPublications: React.Dispatch<React.SetStateAction<IPost[]>> | null;
  servicesTypes: IServiceType[];
  interest: IInterest[];
}

export const PublicationContext = createContext<IPublicationContext | null>(
  null
);

export const MainContextProvider = ({ children }: any) => {
  return (
    <AuthProvider>
      <PublicationProvider>{children}</PublicationProvider>
    </AuthProvider>
  );
};
