import React from 'react';

export default function Hero({ setCurrentPage }) {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          DISCOVER MOVIES
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Explore and discover your favorite movies and TV shows from around the world.
        </p>
        <button 
          onClick={() => setCurrentPage('movies')}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}