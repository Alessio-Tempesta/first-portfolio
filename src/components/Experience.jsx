import React, { useState, useEffect } from 'react';
import html from '../assets/Html5.png';
import css from '../assets/Css.png';
import javascript from '../assets/JavaScript.png';
import bootstrap from '../assets/Bootstrap.png';
import react from '../assets/react.png';
import tailwind from '../assets/Tailwind.png';
import angular from '../assets/angular.png';
import nodejs from '../assets/nodeJs.png'

const Experience = () => {
    const [isMobileFirst, setIsMobileFirst] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileFirst(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'Css',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 5,
            src: react,
            title: 'React',
            style: 'shadow-cyan-500'
        },
        {
            id: 6,
            src: angular,
            title: 'Angular',
            style: 'shadow-red-700'
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-800'
        },
        {
            id: 8,
            src: nodejs,
            title: 'NodeJs',
            style: 'shadow-green-800 py-5'
        },
    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black max-h-screen-sm mx-auto p-4 w-full text-white'>
            <div>
                <p className='text-4xl font-bold border-gray-630 p-2 inline'>Linguaggi</p>
                <p className='py-6 text-2xl text-center'>Tecnologie con cui lavoro:</p>
            </div>
            <div className={`h-full grid grid-cols-3 sm:grid-cols-${isMobileFirst ? '1' : '3'} gap-8 text-center py-8 px-4 sm:px-0`}>
                {techs.map(({ id, src, title, style }) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt={title} className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
