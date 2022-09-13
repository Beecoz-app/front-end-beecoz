import { createContext, ReactNode, useState } from "react";
import { IAutonomous } from "../../interfaces/User/Autonomous/IAutonomous";
import { IClient } from "../../interfaces/User/CLient/IClient";

export interface IAuthContext {
  user: IClient | IAutonomous | null;
  setUser:
    | React.Dispatch<React.SetStateAction<IClient>>
    | React.Dispatch<React.SetStateAction<IAutonomous>>
    | null;
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<IClient>({
        id: 1,
        name: "Thiago",
        birthDate: "04-17-2005",
        lastName: "Silva",
        sex: "Male",
        CPF: "000000",
        loginId: 1,
        profileId: 1,
        typeId: 1,
        profileImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb1jnC52Zm-Z92rKJuIXRc7ahmsH1mpTUow&usqp=CAU",
      });

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}