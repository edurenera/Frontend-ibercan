import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ authenticated, children }) => {
  if (!authenticated) {
    return <Navigate to="/inicio-sesion" />;
  }

  return children;
};

export default ProtectedRoute;
