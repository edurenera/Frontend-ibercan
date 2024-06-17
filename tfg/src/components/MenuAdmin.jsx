import React, { useState } from 'react';
import { Tabs, Tab, Box, AppBar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const MenuAdmin = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
          <Tab label="Clientes" component={Link} to="/admin/clientes" />
          <Tab label="Portes" component={Link} to="/admin/portes" />
        </Tabs>
      </AppBar>
    </Box>
  );
};

export default MenuAdmin;
