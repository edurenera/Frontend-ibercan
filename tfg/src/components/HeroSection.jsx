import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="herosection" className="hero-section">
            <section className='landing-section bg-black h-screen w-screen text-center relative overflow-hidden' data-header-color="white">
                <div className='z-30 relative h-full flex flex-col'>
                    <header className='flex flex-col'>
                        <h2 className='text-white pt-40 text-[50px] font-medium'>Ibercan Servicios Caninos</h2>
                        <p className='text-white text-lg'>Naturaleza y Comodidad Para Tus Mascotas</p>
                    </header>
                    <footer className='flex flex-grow justify-end flex-col pb-20'>
                        <div>
                            <Link className='border-white border-[3px] bg-white/5 backdrop-blur-sm text-base rounded font-medium text-white px-12 py-2 inline-block hover:text-black transition-colors duration-300 hover:bg-white' to='/grilla'>
                                Imágenes y vídeos
                            </Link>
                        </div>
                    </footer>
                </div>
                <div className='absolute top-0 bottom-0 h-full w-full z-10'>
                    <video className='object-center object-cover h-full w-full' autoPlay loop muted src='/video.mp4'></video>
                </div>
            </section>
        </section>
    );
};

export default HeroSection;
