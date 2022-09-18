import { AuthProvider } from "./Auth/AuthContext";
import { PublicationProvider } from "./Publication/PublicationContext";

export const MainContextProvider = ({ children }: any) => {
  return (
    <AuthProvider>
      <PublicationProvider>{children}</PublicationProvider>
    </AuthProvider>
  );
};
