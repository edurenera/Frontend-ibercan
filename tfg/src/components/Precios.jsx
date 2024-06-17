import React, { useEffect, useRef } from 'react';
import { FaDog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Precio = () => {
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const middleCardRef = useRef(null);
  const infoBoxRef1 = useRef(null);
  const infoBoxRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const leftCard = leftCardRef.current.getBoundingClientRect().top;
      const rightCard = rightCardRef.current.getBoundingClientRect().top;
      const middleCard = middleCardRef.current.getBoundingClientRect().top;
      const infoBox1 = infoBoxRef1.current.getBoundingClientRect().top;
      const infoBox2 = infoBoxRef2.current.getBoundingClientRect().top;

      if (leftCard < windowHeight - 100) {
        leftCardRef.current.style.transform = 'translateX(0)';
        leftCardRef.current.style.opacity = '1';
      } else {
        leftCardRef.current.style.transform = 'translateX(-100%)';
        leftCardRef.current.style.opacity = '0';
      }

      if (rightCard < windowHeight - 100) {
        rightCardRef.current.style.transform = 'translateX(0)';
        rightCardRef.current.style.opacity = '1';
      } else {
        rightCardRef.current.style.transform = 'translateX(100%)';
        rightCardRef.current.style.opacity = '0';
      }

      if (middleCard < windowHeight - 100) {
        middleCardRef.current.style.transform = 'rotateY(0)';
        middleCardRef.current.style.opacity = '1';
      } else {
        middleCardRef.current.style.transform = 'rotateY(180deg)';
        middleCardRef.current.style.opacity = '0';
      }

      if (infoBox1 < windowHeight - 100) {
        infoBoxRef1.current.style.transform = 'translateY(0)';
        infoBoxRef1.current.style.opacity = '1';
      } else {
        infoBoxRef1.current.style.transform = 'translateY(100%)';
        infoBoxRef1.current.style.opacity = '0';
      }

      if (infoBox2 < windowHeight - 100) {
        infoBoxRef2.current.style.transform = 'translateY(0)';
        infoBoxRef2.current.style.opacity = '1';
      } else {
        infoBoxRef2.current.style.transform = 'translateY(100%)';
        infoBoxRef2.current.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="precios" className="change-header-color font-sans">
      <div className="font-sans bg-gray-100 text-base text-gray-900 pt-20">
        <div className="flex justify-center mb-10">
          <h1 className="text-4xl font-bold">Servicios</h1>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <article 
            ref={leftCardRef}
            className="relative bg-white text-center shadow-lg rounded-lg p-8 transform transition-transform opacity-0" 
            style={{ transform: 'translateX(-100%)', transition: 'transform 1s ease-out, opacity 1s ease-out' }}
          >
            <div className="absolute left-0 top-1/4 transform -translate-y-1/2 w-2 bg-blue-500 h-1/2"></div>
            <div className="mb-6 flex justify-center">
              <FaDog className="text-blue-500 text-6xl mb-4" />
            </div>
            <span className="text-blue-500 text-2xl font-semibold">1 Perro</span>
            <h2 className="text-gray-900 text-4xl font-bold mb-6">18€/noche</h2>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-2">14 noches (5% dto)</p>
              <p className="text-gray-700 mb-2">20 noches (10% dto)</p>
              <p className="text-gray-700 mb-2">30 noches (15% dto)</p>
              <p className="text-gray-700 mb-2">45 noches (18% dto)</p>
              <p className="text-gray-700 mb-2">60 noches (20% dto)</p>
            </div>
            <Link to="/contacto">
              <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md transition-colors duration-300 hover:bg-blue-700">Contacto</button>
            </Link>
          </article>

          <article 
            ref={middleCardRef}
            className="relative bg-white text-center shadow-lg rounded-lg p-8 transform transition-transform opacity-0" 
            style={{ transform: 'rotateY(180deg)', transition: 'transform 1s ease-out, opacity 1s ease-out' }}
          >
            <div className="absolute left-0 top-1/4 transform -translate-y-1/2 w-2 bg-indigo-500 h-1/2"></div>
            <div className="mb-6">
              <div className="flex justify-center space-x-2">
                <FaDog className="text-indigo-500 text-6xl mb-4" />
                <FaDog className="text-indigo-500 text-6xl mb-4" />
              </div>
              <span className="text-indigo-500 text-2xl font-semibold">2 Perros</span>
            </div>
            <h2 className="text-gray-900 text-4xl font-bold mb-6">30€/noche</h2>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-2">14 noches (5% dto)</p>
              <p className="text-gray-700 mb-2">20 noches (10% dto)</p>
              <p className="text-gray-700 mb-2">30 noches (15% dto)</p>
              <p className="text-gray-700 mb-2">45 noches (18% dto)</p>
              <p className="text-gray-700 mb-2">60 noches (20% dto)</p>
            </div>
            <Link to="/contacto">
              <button className="mt-6 px-6 py-2 bg-indigo-500 text-white rounded-md transition-colors duration-300 hover:bg-indigo-700">Contacto</button>
            </Link>
          </article>

          <article 
            ref={rightCardRef}
            className="relative bg-white text-center shadow-lg rounded-lg p-8 transform transition-transform opacity-0" 
            style={{ transform: 'translateX(100%)', transition: 'transform 1s ease-out, opacity 1s ease-out' }}
          >
            <div className="absolute left-0 top-1/4 transform -translate-y-1/2 w-2 bg-red-500 h-1/2"></div>
            <div className="mb-6">
              <div className="flex justify-center space-x-2">
                <FaDog className="text-red-500 text-6xl mb-4" />
                <FaDog className="text-red-500 text-6xl mb-4" />
                <FaDog className="text-red-500 text-6xl mb-4" />
              </div>
              <span className="text-red-500 text-2xl font-semibold">3 o más Perros</span>
            </div>
            <h2 className="text-gray-900 text-4xl font-bold mb-6">40€/noche</h2>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-2">14 noches (5% dto)</p>
              <p className="text-gray-700 mb-2">20 noches (10% dto)</p>
              <p className="text-gray-700 mb-2">30 noches (15% dto)</p>
              <p className="text-gray-700 mb-2">45 noches (18% dto)</p>
              <p className="text-gray-700 mb-2">60 noches (20% dto)</p>
            </div>
            <Link to="/contacto">
              <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md transition-colors duration-300 hover:bg-red-700">Contacto</button>
            </Link>
          </article>
        </div>
        <div className="max-w-6xl mx-auto mt-10 bg-white text-center rounded-lg shadow-lg p-6 transform transition-transform opacity-0" 
          ref={infoBoxRef1}
          style={{ transform: 'translateY(100%)', transition: 'transform 1s ease-out, opacity 1s ease-out' }}
        >
          <p className="text-xl text-gray-700">
            El servicio de recogida a domicilio 20€ y servicio de entrega a domicilio 20€
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-10 bg-white text-center rounded-lg shadow-lg p-6 transform transition-transform opacity-0" 
          ref={infoBoxRef2}
          style={{ transform: 'translateY(100%)', transition: 'transform 1s ease-out, opacity 1s ease-out' }}
        >
          <p className="text-xl text-gray-700">
            Para información sobre precios para estancias prolongadas u otro tipo de mascotas, por favor <Link to="/contacto" className="text-blue-500 underline">contacte con nosotros</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Precio;
