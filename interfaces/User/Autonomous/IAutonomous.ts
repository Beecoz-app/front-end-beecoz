import { IAutonomousProfile } from "./IAutonomousProfile";
import { ILogin } from "../ILogin";
import { ITypeUser } from "../ITypeUser";

export interface IAutonomous {
    id: number;
    profileId: IAutonomousProfile['id'];
    loginId: ILogin['id'];
    typeId: ITypeUser['id'];
    name: string;
    lasName: string;
    sex: 'Male' | 'Female';
    birthDate: string;
    CPF: string;
    CNPJ?: string;
    profileImage: string;
}