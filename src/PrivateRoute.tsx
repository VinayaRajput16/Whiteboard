import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { keycloak } = useKeycloak();

  return keycloak.authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
