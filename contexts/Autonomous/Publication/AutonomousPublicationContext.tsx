import { createContext, ReactNode, useEffect, useState } from "react";
import { IAutonomousPost } from "../../../interfaces/Post/IAutonomousPost";
import { privateApi } from "../../../services/privateApi";

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
        data: { publications },
      } = await privateApi.get<{ publications: Array<IAutonomousPost> }>(
        "/autonomous/publications",
        {
            headers: {
                'Authorization': localStorage.getItem('token') as string
            }
        }
      );

      setPublications(publications);
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
