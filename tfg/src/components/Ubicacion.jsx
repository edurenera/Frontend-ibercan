import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrección del icono del marcador
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Ubicacion = () => {
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  const handleDirectionsClick = () => {
    window.open("https://www.google.com/maps/dir/?api=1&destination=40.485191,-3.025307", "_blank");
  };

  // Coordenadas de la ubicación de tu empresa
  const position = [40.485191, -3.025307];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const leftCardTop = leftCardRef.current.getBoundingClientRect().top;
      const rightCardTop = rightCardRef.current.getBoundingClientRect().top;
      const isSmallScreen = window.innerWidth < 1024;

      if (isSmallScreen) {
        if (leftCardTop < windowHeight - 100) {
          leftCardRef.current.style.transform = 'translateX(0)';
          leftCardRef.current.style.opacity = '1';
        } else {
          leftCardRef.current.style.transform = 'translateX(-100%)';
          leftCardRef.current.style.opacity = '0';
        }

        if (rightCardTop < windowHeight - 100) {
          rightCardRef.current.style.transform = 'translateX(0)';
          rightCardRef.current.style.opacity = '1';
        } else {
          rightCardRef.current.style.transform = 'translateX(100%)';
          rightCardRef.current.style.opacity = '0';
        }
      } else {
        if (leftCardTop < windowHeight - 100 || rightCardTop < windowHeight - 100) {
          leftCardRef.current.style.transform = 'translateY(0)';
          leftCardRef.current.style.opacity = '1';
          rightCardRef.current.style.transform = 'translateY(0)';
          rightCardRef.current.style.opacity = '1';
        } else {
          leftCardRef.current.style.transform = 'translateY(-100%)';
          leftCardRef.current.style.opacity = '0';
          rightCardRef.current.style.transform = 'translateY(100%)';
          rightCardRef.current.style.opacity = '0';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="ubicacion" className="font-sans bg-gray-100 text-base text-gray-900">
      <section className="max-w-6xl mx-auto mb-10 lg:mb-20 lg:my-5 rounded-lg overflow-hidden flex flex-col lg:flex-row">
        <article
          ref={leftCardRef}
          className="w-full lg:w-1/2 h-auto p-12 bg-white text-center shadow-xl lg:mb-0 lg:mr-10 rounded-lg flex flex-col justify-center items-center transform transition-transform opacity-0 mb-10 lg:mb-0"
          style={{ transform: 'translateY(-100%)', transition: 'transform 1.3s ease-out, opacity 1.3s ease-out' }}
        >
          <div className="my-9 flex flex-col items-center">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-500 text-6xl mr-2" />
              <span className="text-gray-800 text-4xl uppercase font-bold">Dónde Estamos</span>
            </div>
          </div>
          <p className="text-gray-600 text-2xl uppercase mb-6 text-center">Dirección: Camino de Hontoba S/N 19145 Renera (Guadalajara)</p>
          <h2 className="text-gray-800 text-2xl mb-4">Horarios:</h2>
          <div className="flex justify-center">
            <ul className="text-gray-600 text-left">
              <li>Lunes: 10:00–14:00, 17:00–20:00</li>
              <li>Martes: 10:00–14:00, 17:00–20:00</li>
              <li>Miércoles: 10:00–14:00, 17:00–20:00</li>
              <li>Jueves: 10:00–14:00, 17:00–20:00</li>
              <li>Viernes: 10:00–14:00, 17:00–20:00</li>
              <li>Sábado: 10:00–14:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDirectionsClick}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Cómo llegar
            </button>
          </div>
        </article>

        <article
          ref={rightCardRef}
          className="w-full lg:w-1/2 h-96 lg:h-auto bg-white text-center shadow-xl rounded-lg transform transition-transform opacity-0"
          style={{ transform: 'translateY(100%)', transition: 'transform 1.3s ease-out, opacity 1.3s ease-out' }}
        >
          <div className="w-full h-full">
            <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Camino de Hontoba S/N 19145 Renera (Guadalajara)
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Ubicacion;
