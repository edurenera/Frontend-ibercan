import React, { useState, useEffect } from 'react';
import clienteService from '../../services/clienteService';
import portesService from '../../services/portesService';

const PortesForm = ({ porte, setPorte, cargarPortes }) => {
  const [formData, setFormData] = useState({
    id: '',
    id_cliente: '',
    fecha_inicio: '',
    fecha_fin: '',
    descripcion: '',
    dias: 0,
    precio_dia: 0,
    portes: false,
    precio_final: 0,
  });

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await clienteService.getAll();
        setClientes(data);
      } catch (error) {
        console.error('Error al cargar clientes:', error);
      }
    };
    fetchClientes();
  }, []);

  useEffect(() => {
    if (porte) {
      setFormData({
        id: porte.id || '',
        id_cliente: porte.id_cliente || '',
        fecha_inicio: porte.fecha_inicio || '',
        fecha_fin: porte.fecha_fin || '',
        descripcion: porte.descripcion || '',
        dias: porte.dias || 0,
        precio_dia: porte.precio_dia || 0,
        portes: porte.portes || false,
        precio_final: porte.precio_final || 0,
      });
    } else {
      setFormData({
        id: '',
        id_cliente: '',
        fecha_inicio: '',
        fecha_fin: '',
        descripcion: '',
        dias: 0,
        precio_dia: 0,
        portes: false,
        precio_final: 0,
      });
    }
  }, [porte]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    if (name === 'fecha_inicio' || name === 'fecha_fin') {
      setFormData((prevData) => {
        const updatedData = { ...prevData, [name]: newValue };
        if (updatedData.fecha_inicio && updatedData.fecha_fin) {
          const fechaInicio = new Date(updatedData.fecha_inicio);
          const fechaFin = new Date(updatedData.fecha_fin);
          const diffTime = Math.abs(fechaFin - fechaInicio);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          updatedData.dias = diffDays;
          updatedData.precio_final = (diffDays * updatedData.precio_dia) + (updatedData.portes ? 40 : 0);
        }
        return updatedData;
      });
    } else if (name === 'precio_dia' || name === 'portes') {
      setFormData((prevData) => {
        const updatedData = { ...prevData, [name]: newValue };
        if (updatedData.fecha_inicio && updatedData.fecha_fin) {
          const fechaInicio = new Date(updatedData.fecha_inicio);
          const fechaFin = new Date(updatedData.fecha_fin);
          const diffTime = Math.abs(fechaFin - fechaInicio);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          updatedData.dias = diffDays;
          updatedData.precio_final = (diffDays * updatedData.precio_dia) + (updatedData.portes ? 40 : 0);
        }
        return updatedData;
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: newValue,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData); // Log form data
    try {
      if (formData.id) {
        await portesService.update(formData.id, formData);
      } else {
        await portesService.create(formData);
      }
      cargarPortes();
      setPorte(null);
    } catch (error) {
      console.error('Error al guardar porte:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded max-w-lg w-full">
        <h3 className="text-xl font-bold mb-4">{formData.id ? 'Editar Porte' : 'Agregar Porte'}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="id" value={formData.id} />
          <div>
            <label className="block text-sm font-bold mb-1">Nombre del Perro</label>
            <select
              name="id_cliente"
              value={formData.id_cliente}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Seleccionar Perro</option>
              {clientes.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nombre_perro}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Fecha de Inicio</label>
            <input
              type="date"
              name="fecha_inicio"
              value={formData.fecha_inicio}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Fecha de Fin</label>
            <input
              type="date"
              name="fecha_fin"
              value={formData.fecha_fin}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Descripción</label>
            <input
              type="text"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Días</label>
            <input
              type="number"
              name="dias"
              value={formData.dias}
              readOnly
              className="w-full border p-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Precio por Día</label>
            <input
              type="number"
              name="precio_dia"
              value={formData.precio_dia}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Portes</label>
            <input
              type="checkbox"
              name="portes"
              checked={formData.portes}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Precio Final</label>
            <input
              type="number"
              name="precio_final"
              value={formData.precio_final}
              readOnly
              className="w-full border p-2 rounded bg-gray-100"
            />
          </div>
          <div className="flex space-x-4">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              {formData.id ? 'Actualizar' : 'Guardar'}
            </button>
            <button type="button" className="bg-gray-500 text-white p-2 rounded" onClick={() => setPorte(null)}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortesForm;
