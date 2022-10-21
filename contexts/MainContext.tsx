import { AuthProvider } from "./Auth/AuthContext";
import { PublicationProvider } from "./Publication/PublicationContext";
import { ServiceProvider } from "./serviceContext/ServiceContext";

export const MainContextProvider = ({ children }: any) => {
  return (
    <AuthProvider>
      <PublicationProvider>
        <ServiceProvider>{children}</ServiceProvider>
      </PublicationProvider>
    </AuthProvider>
  );
};
