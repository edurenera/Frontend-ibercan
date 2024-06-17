import axios from 'axios';

const API_URL = 'http://localhost/backend/api/crudPortes';

const portesService = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/read_portes.php`);
    return response.data;
  },
  create: async (data) => {
    const response = await axios.post(`${API_URL}/create_portes.php`, data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await axios.post(`${API_URL}/update_portes.php`, { ...data, id });
    return response.data;
  },
  delete: async (id) => {
    console.log('Enviando solicitud de eliminación para el ID:', id); // Log para verificar el ID antes de enviar
    const response = await axios.post(`${API_URL}/delete_portes.php`, { id: id }); // Asegurarse de enviar el ID correctamente
    console.log('Eliminar response:', response.data); // Log para verificar la respuesta
    return response.data;
  },
};

export default portesService;
