// Login.tsx

import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import Button from '@mui/material/Button';

const Login: React.FC = () => {
  const { keycloak } = useKeycloak();

  const handleLogin = () => {
    keycloak.login();
  };

  return (
    <div>
      <h1>Login</h1>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login with Keycloak
      </Button>
    </div>
  );
};

export default Login;
