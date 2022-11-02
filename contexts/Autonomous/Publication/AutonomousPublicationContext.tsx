import { createContext, ReactNode, useEffect, useState } from "react";
import { IAutonomousPost } from "../../../interfaces/Post/IAutonomousPost";
import { privateApi } from "../../../services/privateApi";
import * as SecureStore from 'expo-secure-store'

export interface IAutonomousPublicationContext {
  publications: IAutonomousPost[];
  setPublications: React.Dispatch<React.SetStateAction<IAutonomousPost[]>>;
}

interface AutonomousPublicationProviderProps {
  children: ReactNode;
}

export const AutonomousPublicationContext = createContext<IAutonomousPublicationContext | null>(
  null
);

export const AutonomousPublicationProvider = ({ children }: AutonomousPublicationProviderProps) => {
  const [publications, setPublications] = useState<IAutonomousPost[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data,
      } = await privateApi.get<IAutonomousPost[]>(
        "/autonomous/publications",
        {
            headers: {
                'authorization': await SecureStore.getItemAsync('token') as string
            }
        }
      );

      setPublications(data);
    };

    fetch();
  }, []);

  return (
    <AutonomousPublicationContext.Provider
      value={{ publications, setPublications }}
    >
      {children}
    </AutonomousPublicationContext.Provider>
  );
};
