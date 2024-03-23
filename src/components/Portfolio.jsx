import React, { useState, useEffect } from 'react';
import GitHub from '../assets/Git-Hub.png';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobileFirst, setIsMobileFirst] = useState(true); // Cambiato il valore iniziale per first-mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobileFirst(window.innerWidth <= 768); // Cambiato il valore della larghezza
    };

    handleResize(); // Imposta lo stato iniziale al caricamento della pagina

    window.addEventListener('resize', handleResize); // Aggiungi un listener per il ridimensionamento della finestra

    return () => {
      window.removeEventListener('resize', handleResize); // Rimuovi il listener quando il componente viene smontato
    };
  }, []);

  const handleClick = () => {
    window.location.href = 'https://github.com/Alessio-Tempesta'; // Cambia l'URL con il tuo profilo GitHub
  };

  return (
    <div className={`text-4xl h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white flex flex-col justify-center items-center ${isMobileFirst ? 'py-16' : ''}`}>
      <h1 className='text-white text-5xl text-center font-bold'>
        Portfolio
      </h1>
      <p className='text-white text-center my-3'>Alcuni miei progetti su GitHub</p>
      <div className={`${isMobileFirst ? '' : 'flex justify-center'} mb-8`}>
        <button
          className={`flex items-center text-white px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-blue-700 cursor-pointer ${hovered ? 'bg-blue-600' : ''}`}
          onClick={handleClick}
          onMouseEnter={() => setHovered(false)}
          onMouseLeave={() => setHovered(false)}
        >
          Clicca
          <span className="group hover:rotate-90 duration-300">
            <FaArrowRight size={25} className='ml-1' />
          </span>
        </button>
      </div>
      <div id='portfolio'>
        <a href='https://github.com/Alessio-Tempesta'>
          <img
            src={GitHub}
            alt="Github"
            className={`rounded-2xl mx-auto ${isMobileFirst ? 'w-1/2 md:w-1/3' : 'w-1/3'}`} // Qui cambia l'assegnazione delle classi a seconda dello stato mobile
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
