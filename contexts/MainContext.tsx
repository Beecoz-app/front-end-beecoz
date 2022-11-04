import { AuthProvider } from "./Auth/AuthContext";
import { AutonomousPublicationProvider } from "./Autonomous/Publication/AutonomousPublicationContext";
import { ChatProvider } from "./Chat/ChatContext";
import { ClientPublicationProvider } from "./Client/Publication/ClientPublicationContext";
import { ServiceProvider } from "./Service/ServiceContext";

export const MainContextProvider = ({ children }: any) => {
  return (
    <AuthProvider>
      <ClientPublicationProvider>
        <AutonomousPublicationProvider>
          <ChatProvider>
            <ServiceProvider>{children}</ServiceProvider>
          </ChatProvider>
        </AutonomousPublicationProvider>
      </ClientPublicationProvider>
    </AuthProvider>
  );
};
