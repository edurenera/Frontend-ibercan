import React, { useState, useEffect } from 'react';
import portesService from '../../services/portesService';

const PortesList = () => {
  const [portes, setPortes] = useState([]);

  useEffect(() => {
    portesService.getAll().then(data => setPortes(data));
  }, []);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Lista de Portes</h3>
      <ul className="space-y-2">
        {portes.map(porte => (
          <li key={porte.id} className="border p-2 rounded">
            {porte.descripcion} - {porte.precio_final}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortesList;
