import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import { FaUser, FaLock, FaUnlock } from 'react-icons/fa'; // Asegúrate de importar FaUnlock
import './Login.css';

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authService.login(username, password);
      setAuthenticated(true);
      navigate('/admin');
    } catch (error) {
      alert(error.message);
    }
  };

  const togglePasswordVisibility = () => { // Función para cambiar la visibilidad de la contraseña
    setShowPassword(!showPassword);
  };

  return (
    <section className="login-section">
      <div className="contenedor">
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <h2>Inicio Sesión</h2>

            <div className="input-contenedor">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="username">Usuario</label>
              <FaUser className="input-icon" />
            </div>

            <div className="input-contenedor">
              <input
                type={showPassword ? "text" : "password"} // Cambio dinámico del tipo de input
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Contraseña</label>
              {/* Cambio dinámico del ícono del candado */}
              {showPassword ? (
                <FaUnlock className="input-icon" onClick={togglePasswordVisibility} />
              ) : (
                <FaLock className="input-icon" onClick={togglePasswordVisibility} />
              )}
            </div>

            <div className="btn-espacio">
              <button type="submit">Acceder</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
