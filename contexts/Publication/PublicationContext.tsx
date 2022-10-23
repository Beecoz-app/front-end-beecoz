import { createContext, ReactNode, useEffect, useState } from "react";
import { IPost } from "../../interfaces/Post/IPost";
import { privateApi } from "../../services/privateApi";

export interface IPublicationContext {
  publications: IPost[];
  setPublications: React.Dispatch<React.SetStateAction<IPost[]>>;
  onAddPublication: (publication: {
    title: string;
    description: string;
    servTypeId: string;
    data: string;
    region: string;
  }) => void;
}

interface PublicationProviderProps {
  children: ReactNode;
}

export const PublicationContext = createContext<IPublicationContext | null>(
  null
);

export const PublicationProvider = ({ children }: PublicationProviderProps) => {
  const [publications, setPublications] = useState<IPost[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { publications },
      } = await privateApi.get<{ publications: Array<IPost> }>(
        "/publication/read"
      );

      setPublications(publications);
    };

    fetch();
  }, []);

  const onAddPublication = async (publication: {
    title: string;
    description: string;
    servTypeId: string;
    data: string;
    region: string;
  }) => {
    const { data } = await privateApi.post<{ publication: Array<IPost> }>(
      "/publication/create",
      {
        title: publication.title,
        description: publication.description,
        servTypeId: publication.servTypeId,
        data: publication.data,
        region: publication.region,
      }
    );

    console.log(data);

    setPublications((prev: any) => [
      ...prev,
      {
        ...data.publication,
      },
    ]);
  };

  return (
    <PublicationContext.Provider
      value={{ publications, setPublications, onAddPublication }}
    >
      {children}
    </PublicationContext.Provider>
  );
};
