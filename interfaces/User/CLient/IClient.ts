import { IClientProfile } from "./IClientProfile";
import { ILogin } from "../ILogin";
import { ITypeUser } from "../ITypeUser";

export interface IClient {
    id: number;
    profileId: IClientProfile['id'];
    loginId: ILogin['id'];
    typeId: ITypeUser['id'];
    name: string;
    lastName: string;
    sex: 'Male' | 'Female';
    birthDate: string;
    CPF: string;
    profileImage: string;
}