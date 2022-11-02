import { AuthProvider } from "./Auth/AuthContext";
import { AutonomousPublicationProvider } from "./Autonomous/Publication/AutonomousPublicationContext";
import { ClientPublicationProvider } from "./Client/Publication/ClientPublicationContext";
import { ServiceProvider } from "./Service/ServiceContext";

export const MainContextProvider = ({ children }: any) => {
  return (
    <AuthProvider>
      <ClientPublicationProvider>
        <AutonomousPublicationProvider>
          <ServiceProvider>{children}</ServiceProvider>
        </AutonomousPublicationProvider>
      </ClientPublicationProvider>
    </AuthProvider>
  );
};
