import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex-col jusitfy-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
                </p>
            </div>

            <p className='text-xl mt-20 underline'>
                <h1 className='text-purple-500 font-bold text-5xl'>Chi sono:</h1>
                <br />
            Ciao, sono Tempesta Alessio, uno sviluppatore front-end appassionato con una solida esperienza in tecnologie web moderne.
            <br />
            Sono appassionato di creare interfacce utente esteticamente piacevoli e funzionali che offrono un'esperienza utente straordinaria. Mi piace esplorare nuove tecnologie e approcci per migliorare continuamente le mie capacità e rimanere aggiornato sulle ultime tendenze nel mondo dello sviluppo front-end.
            <br />
            Puoi aspettarti da me un impegno totale nel consegnare prodotti di alta qualità che soddisfino le esigenze dei clienti e superino le aspettative degli utenti. Sono un team player con una forte attenzione ai dettagli e una passione per la risoluzione di problemi complessi.
            </p>
        </div>
    </div>
  );
};

export default About