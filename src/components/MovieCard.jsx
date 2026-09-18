import React from 'react';

export default function MovieCard({ show, onSelect }) {
  
  const image = show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
  const rating = show.rating?.average || 'N/A';
  const premiered = show.premiered ? show.premiered.split('-')[0] : 'N/A';

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md flex flex-col justify-between transition transform hover:-translate-y-1 hover:shadow-xl">
      <img src={image} alt={show.name} className="w-full h-72 object-cover" />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-lg mb-1 truncate">{show.name}</h3>
          <div className="text-sm text-gray-400 flex justify-between items-center mb-3">
            <span>⭐ {rating}</span>
            <span>📅 {premiered}</span>
          </div>
        </div>
        <button 
          onClick={() => onSelect(show)}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
}