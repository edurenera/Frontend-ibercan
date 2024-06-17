import React, { useEffect } from 'react';

const Grilla = () => {
  useEffect(() => {
    const header = document.querySelector('#header');
    if (header) {
      header.classList.remove('text-white');
      header.classList.add('text-black');
    }

    // Asegurarse de que todos los videos estén siempre en mute
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.muted = true;
      video.addEventListener('volumechange', function() {
        this.muted = true;
        if (this.volume > 0) this.volume = 0;
      });
    });

    return () => {
      if (header) {
        header.classList.remove('text-black');
        header.classList.add('text-white');
      }
    };
  }, []);

  const archivos = [
    { tipo: 'video', src: '/blanco.mov', alt: 'blanco' },
    { tipo: 'img', src: '/jardin.jpg', alt: 'jardin' },
    { tipo: 'video', src: '/muchos.mp4', alt: 'muchos' },
    { tipo: 'img', src: '/perrera1.jpg', alt: 'perrera1' },
    { tipo: 'video', src: '/nina.mov', alt: 'nina' },
    { tipo: 'img', src: '/perrera2.jpg', alt: 'perrera2' },
    { tipo: 'img', src: '/perro3.jpg', alt: 'perro3' },
    { tipo: 'img', src: '/perro4.jpg', alt: 'perro4' },
    { tipo: 'video', src: '/ocker.mp4', alt: 'ocker' },
    { tipo: 'video', src: '/pitbull.mp4', alt: 'pitbull' },
    { tipo: 'img', src: '/robin.jpeg', alt: 'robin' },
  ];

  return (
    <div className="p-5 md:p-10 mt-20">
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
        {archivos.map((archivo, index) => (
          <div key={index} className="break-inside" style={{ width: '100%', overflow: 'hidden' }}>
            {archivo.tipo === 'img' ? (
              <img src={archivo.src} alt={archivo.alt} className="w-full h-auto" />
            ) : (
              // Video con controles y siempre en mute
              <video controls className="w-full h-auto" muted>
                <source src={archivo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grilla;
