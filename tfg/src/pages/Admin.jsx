import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ClientesList from '../components/Admin/ClientesList';
import PortesList from '../components/Admin/PortesList';
import MenuAdmin from '../components/MenuAdmin';

const Admin = () => {
  return (
    <div className="container mx-auto p-4 py-20">
      <h2 className="text-2xl font-bold mb-4 py-10">Panel de Administración</h2>
      <MenuAdmin />
      <Routes>
        <Route path="clientes" element={<ClientesList />} />
        <Route path="portes" element={<PortesList />} />
      </Routes>
    </div>
  );
};

export default Admin;
