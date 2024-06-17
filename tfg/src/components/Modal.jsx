import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded shadow-lg relative">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={imageSrc} alt="Imagen grande" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default Modal;
