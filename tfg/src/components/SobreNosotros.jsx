import React from 'react';
import Footer from './Footer';

const SobreNosotros = () => {
  return (
    <>
      <section className="change-header-color font-sans bg-gray-100 text-base text-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-10 lg:px-20 space-y-10">
          <h1 className="text-4xl font-bold text-center mt-16 mb-10">Sobre Nosotros</h1>
          <div className="px-4 md:px-10 lg:px-20">
            <p className="text-lg leading-8 mb-6">
              Somos la primera empresa homologada por el Instituto para el Control de Calidad Sector Mascota. Creada en 1990, nuestra empresa mantiene la misma filosofía que nos ha permitido satisfacer a cientos de clientes en nuestra etapa anterior.
            </p>
            <p className="text-lg leading-8 mb-6">
              Su director y Fundador, Jose Talaverano, con más de 40 años de experiencia en el sector, siempre ha apostado por una fórmula artesanal, huyendo de la masificación y trato impersonal con las mascotas. Esta forma de trabajar llevó a Ibercan en el año 2002 a ser la primera empresa en obtener la certificación de calidad otorgada por el Instituto para el Control de Calidad del Sector Mascotas.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Jose Talaverano</h2>
              <p className="text-lg leading-8 mb-4">
                En Noviembre de 1979, después de su formación en Francia como educador canino, vuelve a España donde inicia su actividad profesional. Pionero en la participación en pruebas oficiales de trabajo, es nombrado Juez de Trabajo y Figurante Oficial por el Club Español de Adiestramiento Canino e Instructor/formador por la Real Sociedad Canina de España. Compagina estas actividades con la creación de la 1ª empresa especializada en alquiler de perros de seguridad (CANSEGUR S.L.) Llegando a trabajar con las principales empresas de seguridad del país, consiguiendo sobre todo el mayor reconocimiento en la preparación de perros para detección de explosivos.
              </p>
              <p className="text-lg leading-8">
                Tras cosechar innumerables éxitos en ambos campos, abandona a principios de los 90 la competición y la seguridad para dedicarse exclusivamente a la educación de perros de particulares y el mantenimiento de mascotas en régimen de residencia.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-10">
              <h2 className="text-2xl font-bold mb-4">Residencia</h2>
              <p className="text-lg leading-8 mb-4">
                Residencia Premium en plena naturaleza.
              </p>
              <p className="text-lg leading-8 mb-4">
                Nuestra instalaciones están enfocadas a evitar el llamado “estrés de perreras”. Contamos con amplios cheniles que no permiten la visibilidad entre unas mascotas y otras para evitar continuos ladridos que agotan a nuestros perros.
              </p>
              <p className="text-lg leading-8 mb-4">
                Realizamos paseos diarios para ejercitar a cada mascota, los alimentamos con productos de primeras calidades y ofrecemos un trato familiar, ya que solo aceptamos un máximo de 20 huéspedes, para hacer más cómoda y relajada la estancia de tu perro.
              </p>
              <p className="text-lg leading-8">
                Las mascotas se alojaran en amplios recintos previamente desinfectados y techados con materiales altamente aislantes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default SobreNosotros;
