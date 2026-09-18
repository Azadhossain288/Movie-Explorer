import React from 'react';

export default function MovieModal({ show, onClose }) {
  if (!show) return null;

  const image = show.image?.original || show.image?.medium || 'https://via.placeholder.com/400x500?text=No+Image';
  const rating = show.rating?.average || 'N/A';
  const premiered = show.premiered || 'N/A';
  const genres = show.genres ? show.genres.join(', ') : 'N/A';
 
  const summary = show.summary ? show.summary.replace(/<[^>]*>?/gm, '') : 'No description available.';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto">
      <div className="bg-gray-800 text-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-fadeIn">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-900/80 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition z-10"
        >
          ✕
        </button>

        <img src={image} alt={show.name} className="w-full h-64 md:h-80 object-cover" />

        <div className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{show.name}</h2>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
            <span>⭐ Rating: {rating}</span>
            <span>📅 Release: {premiered}</span>
            <span>🎭 Genres: {genres}</span>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-400 mb-1">Overview:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{summary}</p>
          </div>

          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg text-sm font-medium transition"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}