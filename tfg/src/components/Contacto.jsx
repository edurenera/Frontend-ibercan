import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from './Footer';

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: email,
      to_name: 'Empresa',
      subject: asunto,
      message: mensaje,
    };

    emailjs.send('service_3qg058i', 'template_vhn6rn1', templateParams, 'eUjpKYTiLJqQ5UdE0')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Correo enviado correctamente');
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });

    setEmail('');
    setAsunto('');
    setMensaje('');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-6">Para reservar o solicitar más información</h1>
        <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asunto">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
          {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
        </form>
        <div className="mt-6 text-center">
          <p>Teléfono: <a href="tel:+34654402568" className="text-blue-500 underline">+34 654 40 25 68</a></p>
          <p>Para información adicional, puede contactarnos por WhatsApp o llamar a este número.</p>
        </div>
      </div>
      
    </>
  );
};

export default Contacto;