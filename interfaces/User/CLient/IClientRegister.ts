export interface IClientRegister {
  name: string;
  login: string;
  lastName: string;
  password: string;
  gender: "Female" | "Male";
  cpf: string;
  biography: string;
  bornDate: string;
  cnpj: string;
}
