import React from 'react';


const Card = () => {
    return (
        <div className=' flex py-2'> 
        <div className="relative bg-whitew-60 h-80 rounded-lg overflow-hidden">
            
            <img
                src="https://cdn.myanimelist.net/images/anime/10/47347.jpg"
                alt="Anime Pic"
                className="w-full h-full object-cover rounded-lg"
            />

            {/* Glassmorphism Badge */}
            <div className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg  px-2 py-1">
                <h1 className="text-white font-semibold text-sm drop-shadow">Ongoing</h1>
            </div>

            {/* Card Title (optional positioning) */}
            <div className="absolute bottom-4 left-4 text-white font-bold drop-shadow-lg z-10 w-45">
                <h1 className="">
                Attack On Titan
            </h1>
            <div className='flex justify-between'>
                 <h3>
                EP 12
            </h3>
            <h4 className='text-gray-300'>
                TV
            </h4>
            </div>
           
            </div>
            
        </div>
        </div>

    );
};
export default Card;