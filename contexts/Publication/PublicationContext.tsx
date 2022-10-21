import { Children, createContext, ReactNode, useEffect, useState } from "react";
import { IInterest } from "../../interfaces/Job/IInterested";
import { IPost } from "../../interfaces/Post/IPost";
import { IServiceType } from "../../interfaces/Service/IServiceType";
import { api, privateApi } from "../../services/api";

export interface IPublicationContext {
  publications: IPost[];
  setPublications: React.Dispatch<React.SetStateAction<IPost[]>>;
  onAddPublication: (publication: {title: string, description: string, servTypeId: string}) => void
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
      const {data: {publications}} = await privateApi.get<{publications: Array<IPost>}>('/publication/read')

      setPublications(publications)
    }

    fetch()
  }, []);

  const onAddPublication = async (publication: {title: string, description: string, servTypeId: string}) => {
    const {data} = await privateApi.post<{publication: Array<IPost>}>('/publication/create', {
      title: publication.title,
      description: publication.description,
      servTypeId: publication.servTypeId,
      data: "2005-04-17",
	  region: "Santana de Parnaíba",
    })

    console.log(data)

    setPublications((prev: any) => [
      ...prev,
      {
        ...data.publication
      },
    ]);
  }

  return (
    <PublicationContext.Provider
      value={{ publications, setPublications, onAddPublication }}
    >
      {children}
    </PublicationContext.Provider>
  );
};
