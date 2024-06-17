import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import { FaPhone, FaMapMarkerAlt, FaServicestack, FaEnvelope } from 'react-icons/fa'; // Importar íconos de FontAwesome

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Ibercan Servicios Caninos</h2>
            <p className="text-sm">© 2024 Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="https://www.google.com/maps/dir/?api=1&destination=40.485191,-3.025307" className="flex items-center text-gray-400 hover:text-white space-x-2">
              <FaMapMarkerAlt />
              <span>Camino de Hontoba S/N, 19145 Renera (Guadalajara)</span>
            </a>
            <a href="tel:654402568" className="flex items-center text-gray-400 hover:text-white space-x-2">
              <FaPhone />
              <span>654 402 568</span>
            </a>
            {/* Utiliza Link para la navegación interna al componente Contacto */}
            <Link to="/contacto" className="flex items-center text-gray-400 hover:text-white space-x-2">
              <FaEnvelope />
              <span>Contacto</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
