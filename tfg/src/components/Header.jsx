import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaUserAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from './Logo';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService'; // Asegúrate de importar authService

const Header = ({ authenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState('text-white');
  const [headerBgClass, setHeaderBgClass] = useState('bg-transparent');
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (e, path, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate(path);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100); // Delay to ensure page navigation completes
    }
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const heroSection = document.querySelector('#herosection');
    const changeHeaderSections = document.querySelectorAll('.change-header-color');

    const handleScroll = () => {
      if (!heroSection) return;
      const heroSectionTop = heroSection.getBoundingClientRect().top;
      const heroSectionHeight = heroSection.offsetHeight;

      let isInHeroSection = heroSectionTop < 11 && heroSectionTop > -heroSectionHeight + 11;

      let isInChangeSection = false;
      changeHeaderSections.forEach(section => {
        if (!section) return;
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        if (sectionTop < window.innerHeight * 0.9 && sectionTop > -sectionHeight * 0.9) {
          isInChangeSection = true;
        }
      });

      if (isInHeroSection) {
        setHeaderClass('text-white');
        setHeaderBgClass('bg-transparent');
      } else if (isInChangeSection) {
        setHeaderClass('text-black');
        setHeaderBgClass('bg-gray-200');  // Cambia el fondo a gris claro
      }
    };

    if (location.pathname === '/contacto' || location.pathname === '/sobre-nosotros' || location.pathname === '/ubicacion' || location.pathname === '/grilla') {
      setHeaderClass('text-black');
      setHeaderBgClass('bg-gray-200');  // Cambia el fondo a gris claro
    } else if (location.pathname.startsWith('/admin')) {
      setHeaderClass('text-black');
      setHeaderBgClass('bg-gray-400'); // Cambia el fondo a gris cuando está en la ruta de admin
    } else {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <header className={`py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 ${headerClass} ${headerBgClass}`} id="header">
      <div className="flex flex-grow basis-0">
      <Link 
      to="/"
      className="text-current inline-block px-4 py-2 transition-colors duration-300 ease-in-out"
              onClick={(e) => {
                handleNavigation(e, '/', '#herosection');
              }}
      >
          <Logo />
        </Link>
      </div>

      <nav className="hidden lg:flex flex-grow justify-center basis-0">
        <ul className="flex text-lg space-x-0">
          <li>
            <Link
              to="/"
              className="text-current inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black rounded-lg"
              onClick={(e) => {
                handleNavigation(e, '/', '#herosection');
              }}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/sobre-nosotros"
              className="text-current inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black rounded-lg"
            >
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-current inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black rounded-lg"
              onClick={(e) => {
                handleNavigation(e, '/', '#precios');
              }}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="text-current inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black rounded-lg"
            >
              Contacto
            </Link>
          </li>
          {authenticated && (
            <li>
              <Link
                to="/admin"
                className="text-current inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black rounded-lg"
              >
                Admin
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <nav className="hidden lg:flex flex-grow justify-end basis-0">
        <ul className="flex text-lg space-x-0">
          <li>
            <Link
              to="/"
              className="inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black rounded-lg"
              onClick={(e) => {
                handleNavigation(e, '/', '#ubicacion');
              }}
            >
              <FaMapMarkerAlt />
            </Link>
          </li>
          <li>
            {authenticated ? (
              <button
                onClick={handleLogout}
                className="inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black rounded-lg"
              >
                Cerrar sesión
              </button>
            ) : (
              <Link
                to="/inicio-sesion"
                className="inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-black rounded-lg"
              >
                <FaUserAlt />
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {menuOpen ? <FaTimes className={`text-2xl ${headerClass}`} /> : <FaBars className={`text-2xl ${headerClass}`} />}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-50 transform transition-transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          <button onClick={toggleMenu} className="self-end text-black focus:outline-none">
            <FaTimes className="text-2xl" />
          </button>
          <Link
            to="/"
            className="text-current text-left inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-white rounded-lg"
            onClick={(e) => {
              handleNavigation(e, '/', '#herosection');
            }}
          >
            Inicio
          </Link>
          <Link
            to="/sobre-nosotros"
            className="text-current text-left inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-white rounded-lg"
            onClick={closeMenu}
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/"
            className="text-current text-left inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-white rounded-lg"
            onClick={(e) => {
              handleNavigation(e, '/', '#precios');
            }}
          >
            Servicios
          </Link>
          <Link
            to="/contacto"
            className="text-current text-left inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-white rounded-lg"
            onClick={closeMenu}
          >
            Contacto
          </Link>
          <Link
            to="/"
            className="text-current text-left inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-white rounded-lg"
            onClick={(e) => {
              handleNavigation(e, '/', '#ubicacion');
            }}
          >
            Ubicación
          </Link>
          {authenticated ? (
            <button
              onClick={handleLogout}
              className="text-current text-left inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-white rounded-lg"
            >
              Cerrar sesión
            </button>
          ) : (
            <Link
              to="/inicio-sesion"
              className="text-current text-left inline-block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:text-white rounded-lg"
              onClick={closeMenu}
            >
              Inicio Sesión
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
