import { AuthProvider } from "./Auth/AuthContext";
import { ClientPublicationProvider } from "./Client/Publication/ClientPublicationContext";
import { ServiceProvider } from "./Service/ServiceContext";

export const MainContextProvider = ({ children }: any) => {
  return (
    <AuthProvider>
      <ClientPublicationProvider>
        <ServiceProvider>{children}</ServiceProvider>
      </ClientPublicationProvider>
    </AuthProvider>
  );
};
