import axios from 'axios';

const API_URL = 'http://localhost/backend/api/crudFicha';

const clienteService = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/read_ficha_cliente.php`);
    return response.data;
  },
  create: async (data) => {
    const response = await axios.post(`${API_URL}/create_ficha_cliente.php`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  update: async (id, data) => {
    const response = await axios.post(`${API_URL}/update_ficha_cliente.php`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  delete: async (id) => {
    const response = await axios.post(`${API_URL}/delete_ficha_cliente.php`, { id });
    return response.data;
  },
};

export default clienteService;
