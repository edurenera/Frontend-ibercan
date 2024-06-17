import React from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const Logout = ({ setAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setAuthenticated(false);
    navigate('/');
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
      Cerrar sesión
    </button>
  );
};

export default Logout;
