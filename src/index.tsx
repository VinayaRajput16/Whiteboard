import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

const AppInitializer: React.FC = () => {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);

  useEffect(() => {
    const initializeKeycloak = async () => {
      try {
        const response = await fetch('/keycloak.json');
        const keycloakConfig = await response.json();
        const kc = new Keycloak(keycloakConfig);
        await kc.init({
          onLoad: 'check-sso', // or 'login-required' if you want to force login
          silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        });
        setKeycloak(kc);
      } catch (error) {
        console.error('Error initializing Keycloak:', error);
      }
    };
    

    if (!keycloak) {
      initializeKeycloak();
    }
  }, []); // Empty dependency array ensures this effect runs only once

  if (!keycloak) {
    return <div>Loading Keycloak...</div>;
  }

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <App />
    </ReactKeycloakProvider>
  );
};

root.render(
  <React.StrictMode>
    <AppInitializer />
  </React.StrictMode>
);
