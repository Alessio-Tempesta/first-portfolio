import React, { useState, useEffect } from 'react';
import GitHub from '../assets/Git-Hub.png';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobileFirst, setIsMobileFirst] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileFirst(window.innerWidth <= 476); // Determina se la larghezza della finestra è inferiore o uguale a 768px
    };

    handleResize(); // Imposta lo stato iniziale al caricamento della pagina

    window.addEventListener('resize', handleResize); // Aggiungi un listener per il ridimensionamento della finestra

    return () => {
      window.removeEventListener('resize', handleResize); // Rimuovi il listener quando il componente viene smontato
    };
  }, []);

  return (
    <div className={`text-4xl h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white ${isMobileFirst ? 'flex-col' : 'md:flex-row'}`}>
      <h1 className='text-white text-5xl text-center font-bold'>
        Portfolio
      </h1>
      <p className='text-white underline text-center my-3'>Alcuni miei progetti su GitHub</p>
      <div className={`${isMobileFirst ? 'text-center' : 'flex justify-center'}`}> {/* Condiziona il posizionamento del bottone in base al dispositivo */}
        <a href='portfolio'>
          <button
            className={`flex items-center text-white px-6 py-3 my-5 rounded-md bg-gradient-to-r from-purple-500 to-blue-700 cursor-pointer ${hovered ? 'bg-blue-600' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Vai giù
            <span className="group hover:rotate-90 duration-300">
              <FaArrowRight size={25} className='ml-1' />
            </span>
          </button>
        </a>
      </div>
      <div id='portfolio'>
        <a href='https://github.com/Alessio-Tempesta'>
          <img
            src={GitHub}
            alt="Github"
            className={`rounded-2xl mx-auto w-23 ${isMobileFirst ? 'md:w-50' : ''}`}
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
