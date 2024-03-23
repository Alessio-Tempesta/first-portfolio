import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex-col jusitfy-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-gray-500'>
                About
                </p>
            </div>

            <p className='text-1xl font-bold mt-20'>
                <h1 className='text-purple-500 font-bold text-6xl'>Chi sono:</h1>
                <br />
            Ciao, sono Tempesta Alessio, uno sviluppatore aspirante front-end appassionato.
            <br />
            Puoi aspettarti da me un impegno totale nel consegnare prodotti di alta qualità che soddisfino le esigenze dei clienti e superino le aspettative degli utenti. Sono un team player con una forte attenzione ai dettagli e una passione per la risoluzione di problemi complessi.
            <br />
            Le tecnologie che mi piacciono e uso di più sono : HTML, CSS, Javascript, Bootstrap, React, Angular, Tailwind, Node.JS
            </p>
        </div>
    </div>
  );
};

export default About