import React from 'react'
import FotoProfilo from "../assets/foto-reggiaDiCaserta_me-removebg-preview.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
    name= "home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
        <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl text-center sm:text-5xl font-bold text-white">Sono un Front-End Developer</h2>
          <p className="text-right ml-10 text-purple-500 py-4 max-w-md">Ciao! Sono Alessio Tempesta,<br /> un appassionato sviluppatore front-end con una fervida passione per l'innovazione e il design creativo. <br /> Le teconlogie che mi piacciono di più sono:
          Html, Css, Javascript, React, Angular e Tailwind.
          </p>
          
          <div>
            <Link
            to="portfolio" 
            smooth
            duration={500}
            className="grouptext-white w-fit px-6 py-3 my-5 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-700 cursor-grab">
              Portfolio
              <span className="group hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25}
                className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

      <div>
      <img src={FotoProfilo}
      alt="my-profile"
      className="rounded-2xl mx-auto w-2/3 md:w-full"/>
      </div>
      </div>
    </div>
  );
};

export default Home