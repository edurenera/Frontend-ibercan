import axios from 'axios';

const API_URL = 'http://localhost/backend/api/';

const getAll = async () => {
  try {
    const response = await axios.get(`${API_URL}get_razas.php`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las razas:', error);
    throw error;
  }
};

export default {
  getAll,
};
