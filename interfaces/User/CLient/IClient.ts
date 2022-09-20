import { IClientProfile } from "./IClientProfile";
import { ILogin } from "../ILogin";
import { ITypeUser } from "../ITypeUser";

export interface IClient {
    id: number | null;
    profileId: IClientProfile['id'] | null;
    loginId: ILogin['id'] | null;
    typeId: ITypeUser['id'] | null;
    name: string | null;
    lastName: string | null;
    sex: 'Male' | 'Female' | null;
    birthDate: string | null;
    CPF: string | null;
    profileImage: string | null;
}