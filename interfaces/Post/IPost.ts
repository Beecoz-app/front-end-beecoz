import { IClient } from "../User/CLient/IClient";
import { IServiceType } from "../Service/IServiceType";

export interface IPost {
    id: number;
    serviceType: IServiceType['id'];
    clientId: IClient['id'];
    title: string;
    description: string;
    photo: string;
    date: string;
    region: string;
    tags: Array<IServiceType['id']>
  }