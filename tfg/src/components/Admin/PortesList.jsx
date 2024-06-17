import React, { useState, useEffect } from 'react';
import portesService from '../../services/portesService';
import PortesForm from './PortesForm';

const PortesList = () => {
  const [portes, setPortes] = useState([]);
  const [porteSeleccionado, setPorteSeleccionado] = useState(null);

  const cargarPortes = async () => {
    try {
      const data = await portesService.getAll();
      setPortes(data);
    } catch (error) {
      console.error('Error al cargar portes:', error);
    }
  };

  const handleEliminar = async (id) => {
    console.log('Eliminar ID:', id); // Log para verificar que el ID se está pasando
    if (window.confirm('¿Estás seguro de que deseas eliminar este porte?')) {
      try {
        const response = await portesService.delete(id);
        console.log('Eliminar response:', response); // Log para verificar la respuesta
        cargarPortes();
      } catch (error) {
        console.error('Error al eliminar porte:', error);
      }
    }
  };

  useEffect(() => {
    cargarPortes();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Portes</h2>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setPorteSeleccionado({})}
      >
        Agregar Porte
      </button>
      <table className="min-w-full bg-white table-auto">
  <thead>
    <tr>
      <th className="py-2 px-4 border-b text-left">ID</th>
      <th className="py-2 px-4 border-b text-left">Nombre del Perro</th>
      <th className="py-2 px-4 border-b text-left">Descripción</th>
      <th className="py-2 px-4 border-b text-left">Fecha de Inicio</th>
      <th className="py-2 px-4 border-b text-left">Fecha de Fin</th>
      <th className="py-2 px-4 border-b text-left">Días</th>
      <th className="py-2 px-4 border-b text-left">Precio por Día</th>
      <th className="py-2 px-4 border-b text-left">Portes</th>
      <th className="py-2 px-4 border-b text-left">Precio Final</th>
      <th className="py-2 px-4 border-b text-left">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {portes.map((porte) => (
      <tr key={porte.id}>
        <td className="py-2 px-4 border-b">{porte.id}</td>
        <td className="py-2 px-4 border-b">{porte.nombre_perro}</td>
        <td className="py-2 px-4 border-b">{porte.descripcion}</td>
        <td className="py-2 px-4 border-b">{porte.fecha_inicio}</td>
        <td className="py-2 px-4 border-b">{porte.fecha_fin}</td>
        <td className="py-2 px-4 border-b">{porte.dias}</td>
        <td className="py-2 px-4 border-b">{porte.precio_dia}</td>
        <td className="py-2 px-4 border-b">{porte.portes ? 'Sí' : 'No'}</td>
        <td className="py-2 px-4 border-b">{porte.precio_final}</td>
        <td className="py-2 px-4 border-b">
          <button className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded" onClick={() => setPorteSeleccionado(porte)}>Editar</button>
          <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleEliminar(porte.id)}>Eliminar</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      {porteSeleccionado && (
        <PortesForm
          porte={porteSeleccionado}
          setPorte={setPorteSeleccionado}
          cargarPortes={cargarPortes}
        />
      )}
    </div>
  );
};

export default PortesList;
