import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

export default function Movies() {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching shows:", err);
        setLoading(false);
      });
  }, []);

  
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.trim() === '') {
    
      setLoading(true);
      fetch('https://api.tvmaze.com/shows')
        .then((res) => res.json())
        .then((data) => {
          setShows(data);
          setLoading(false);
        });
      return;
    }

    setLoading(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        // TVMaze search API returns array of objects with structure: { score, show }
        const formattedShows = data.map((item) => item.show);
        setShows(formattedShows);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error searching shows:", err);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Search Bar */}
      <div className="mb-10 max-w-xl mx-auto">
        <input 
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="🔍 Search for a movie or show..."
          className="w-full bg-gray-800 border border-gray-700 px-5 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition shadow-md"
        />
      </div>

      {/* Loading & Grid */}
      {loading ? (
        <div className="text-center py-20 text-gray-400 text-lg">Loading movies...</div>
      ) : shows.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-lg">No movies found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shows.map((show) => (
            <MovieCard key={show.id} show={show} onSelect={setSelectedShow} />
          ))}
        </div>
      )}

      {/* Modal */}
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
}