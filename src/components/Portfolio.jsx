import React, { useState } from 'react';
import GitHub from '../assets/Git-Hub.png';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='text-4xl h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <h1 className='text-white text-5xl text-center font-bold'>
        Portfolio
      </h1>
      <p className='text-white underline text-center my-3'>Alcuni miei progetti su GitHub</p>
      <div className="flex justify-center"> {/* Aggiungi questo div per centrare il bottone */}
        <a href='#github-section'>
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
      <div id='github-section'>
        <a href='https://github.com/Alessio-Tempesta'>
          <img
            src={GitHub}
            alt="Github"
            className='rounded-2xl mx-auto w-23 md:w-50'
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
