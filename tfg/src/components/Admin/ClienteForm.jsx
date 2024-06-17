import React, { useState, useEffect } from 'react';
import clienteService from '../../services/clienteService';
import razaService from '../../services/razaService.js';

const ClienteForm = ({ cliente, setCliente, cargarClientes }) => {
  const [formData, setFormData] = useState({
    id: '',
    nombrePerro: '',
    nombreCliente: '',
    direccion: '',
    telefono: '',
    razaId: '',
    foto: null,
    cartilla: null,
  });
  const [razas, setRazas] = useState([]);

  useEffect(() => {
    const fetchRazas = async () => {
      try {
        const data = await razaService.getAll();
        setRazas(data);
      } catch (error) {
        console.error('Error al cargar razas:', error);
      }
    };
    fetchRazas();
  }, []);

  useEffect(() => {
    if (cliente) {
      setFormData({
        id: cliente.id || '',
        nombrePerro: cliente.nombre_perro || '',
        nombreCliente: cliente.nombre_cliente || '',
        direccion: cliente.direccion || '',
        telefono: cliente.telefono || '',
        razaId: cliente.raza_id || '',
        foto: null,
        cartilla: null,
      });
    } else {
      setFormData({
        id: '',
        nombrePerro: '',
        nombreCliente: '',
        direccion: '',
        telefono: '',
        razaId: '',
        foto: null,
        cartilla: null,
      });
    }
  }, [cliente]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    try {
      if (formData.id) {
        await clienteService.update(formData.id, data);
      } else {
        await clienteService.create(data);
      }
      cargarClientes();
      setCliente(null);
    } catch (error) {
      console.error('Error al guardar cliente:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h3 className="text-xl font-bold mb-4">{formData.id ? 'Editar Cliente' : 'Agregar Cliente'}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="id" value={formData.id} />
          <div>
            <label className="block text-sm font-bold mb-1">Nombre del Perro</label>
            <input
              type="text"
              name="nombrePerro"
              value={formData.nombrePerro}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Nombre del Cliente</label>
            <input
              type="text"
              name="nombreCliente"
              value={formData.nombreCliente}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Raza</label>
            <select
              name="razaId"
              value={formData.razaId}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Seleccionar Raza</option>
              {razas.map((raza) => (
                <option key={raza.id} value={raza.id}>
                  {raza.raza}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Foto</label>
            <input type="file" name="foto" onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Cartilla</label>
            <input type="file" name="cartilla" onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div className="flex space-x-4">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              {formData.id ? 'Actualizar' : 'Guardar'}
            </button>
            <button type="button" className="bg-gray-500 text-white p-2 rounded" onClick={() => setCliente(null)}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClienteForm;
