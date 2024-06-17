import axios from 'axios';

const baseUrl = 'http://localhost/backend/admin/'; // Ajusta esta URL según sea necesario

const login = async (username, password) => {
  const response = await axios.post(`${baseUrl}login.php`, new URLSearchParams({
    username: username,
    password: password
  }));
  if (response.data.success) {
    localStorage.setItem('admin', JSON.stringify(response.data.admin));
  } else {
    throw new Error(response.data.message);
  }
};

const logout = () => {
  localStorage.removeItem('admin');
  window.location.href = '/';
};

const isAuthenticated = () => {
  return localStorage.getItem('admin') !== null;
};

export default { login, logout, isAuthenticated };
