import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'movies'

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'movies' && <Movies />}
      </main>

      <Footer />
    </div>
  );
}

export default App;