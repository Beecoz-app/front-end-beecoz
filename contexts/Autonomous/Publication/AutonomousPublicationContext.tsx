import { createContext, ReactNode, useEffect, useState } from "react";
import { IAutonomousPost } from "../../../interfaces/Post/IAutonomousPost";
import { privateApi } from "../../../services/privateApi";
import * as SecureStore from 'expo-secure-store'

export interface IAutonomousPublicationContext {
  publications: IAutonomousPost[];
  setPublications: React.Dispatch<React.SetStateAction<IAutonomousPost[]>>;
  joinInterest: (idAutonomous: number, idPublication: number) => void
}

interface AutonomousPublicationProviderProps {
  children: ReactNode;
}

export const AutonomousPublicationContext = createContext<IAutonomousPublicationContext | null>(
  null
);

export const AutonomousPublicationProvider = ({ children }: AutonomousPublicationProviderProps) => {
  const [publications, setPublications] = useState<IAutonomousPost[]>([]);

  const joinInterest = async (idAutonomous: number, idPublication: number) => {
    await privateApi.post(`/interest/join/${idAutonomous}/${idPublication}`, {
      headers: {
        'authorization': await SecureStore.getItemAsync('token') as string
    }
    })
  }

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

      console.log(data)

      setPublications(data);
    };

    fetch();
  }, []);

  return (
    <AutonomousPublicationContext.Provider
      value={{ publications, setPublications, joinInterest }}
    >
      {children}
    </AutonomousPublicationContext.Provider>
  );
};
