import React from 'react';

export default function Navbar({ setCurrentPage }) {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div 
        onClick={() => setCurrentPage('home')} 
        className="text-xl font-bold text-red-500 cursor-pointer flex items-center gap-2"
      >
        🎬 MovieExplorer
      </div>
      <div className="flex gap-4 items-center">
        <button 
          onClick={() => setCurrentPage('home')}
          className="hover:text-red-400 transition"
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('movies')}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition"
        >
          Movies
        </button>
      </div>
    </nav>
  );
}