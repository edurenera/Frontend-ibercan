import React, { useState, useEffect } from 'react';
import clienteService from '../../services/clienteService';
import ClienteForm from './ClienteForm';

const ClientesList = () => {
  const [clientes, setClientes] = useState([]);
  const [clientesFiltrados, setClientesFiltrados] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const cargarClientes = async () => {
    try {
      const data = await clienteService.getAll();
      setClientes(data);
      setClientesFiltrados(data);
    } catch (error) {
      console.error('Error al cargar clientes:', error);
    }
  };

  const handleEliminar = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      try {
        await clienteService.delete(id);
        cargarClientes();
      } catch (error) {
        console.error('Error al eliminar cliente:', error);
      }
    }
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleBuscar = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    if (valor === '') {
      setClientesFiltrados(clientes);
    } else {
      const filtrados = clientes.filter(cliente => 
        cliente.nombre_perro.toLowerCase().includes(valor.toLowerCase()) ||
        cliente.nombre_cliente.toLowerCase().includes(valor.toLowerCase()) ||
        cliente.raza.toLowerCase().includes(valor.toLowerCase())
      );
      setClientesFiltrados(filtrados);
    }
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Clientes</h2>
      <input
        type="text"
        value={busqueda}
        onChange={handleBuscar}
        placeholder="Buscar por nombre del perro, cliente o raza..."
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setClienteSeleccionado({})}
      >
        Agregar Cliente
      </button>
      <table className="min-w-full bg-white table-auto">
  <thead>
    <tr>
      <th className="py-2 px-4 border-b text-left">ID</th>
      <th className="py-2 px-4 border-b text-left">Nombre del Perro</th>
      <th className="py-2 px-4 border-b text-left">Nombre del Cliente</th>
      <th className="py-2 px-4 border-b text-left">Dirección</th>
      <th className="py-2 px-4 border-b text-left">Teléfono</th>
      <th className="py-2 px-4 border-b text-left">Raza</th>
      <th className="py-2 px-4 border-b text-left">Foto</th>
      <th className="py-2 px-4 border-b text-left">Cartilla</th>
      <th className="py-2 px-4 border-b text-left">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {clientesFiltrados.map((cliente) => (
      <tr key={cliente.id}>
        <td className="py-2 px-4 border-b">{cliente.id}</td>
        <td className="py-2 px-4 border-b">{cliente.nombre_perro}</td>
        <td className="py-2 px-4 border-b">{cliente.nombre_cliente}</td>
        <td className="py-2 px-4 border-b">{cliente.direccion}</td>
        <td className="py-2 px-4 border-b">{cliente.telefono}</td>
        <td className="py-2 px-4 border-b">{cliente.raza}</td>
        <td className="py-2 px-4 border-b">
          {cliente.foto ? (
            <img
              src={`http://localhost/backend/uploads/${cliente.foto}`}
              alt="Foto del perro"
              className="w-16 h-16 object-cover cursor-pointer"
              onClick={() => handleImageClick(`http://localhost/backend/uploads/${cliente.foto}`)}
            />
          ) : 'No disponible'}
        </td>
        <td className="py-2 px-4 border-b">
          {cliente.cartilla ? (
            <img
              src={`http://localhost/backend/uploads/${cliente.cartilla}`}
              alt="Cartilla"
              className="w-16 h-16 object-cover cursor-pointer"
              onClick={() => handleImageClick(`http://localhost/backend/uploads/${cliente.cartilla}`)}
            />
          ) : 'No disponible'}
        </td>
        <td className="py-2 px-4 border-b">
          <button
            className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded"
            onClick={() => setClienteSeleccionado(cliente)}
          >
            Editar
          </button>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => handleEliminar(cliente.id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      {clienteSeleccionado && (
        <ClienteForm
          cliente={clienteSeleccionado}
          setCliente={setClienteSeleccionado}
          cargarClientes={cargarClientes}
        />
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg relative max-w-screen-lg max-h-screen-lg">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full focus:outline-none"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Imagen grande" className="max-w-full max-h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientesList;
