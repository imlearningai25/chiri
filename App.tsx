import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Locations from './components/Locations';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import { seedInitialReviews } from './services/storageService';

const App: React.FC = () => {
  
  useEffect(() => {
    // Seed database on first load if empty
    seedInitialReviews();
  }, []);

  return (
    <div className="min-h-screen bg-momo-dark font-body text-gray-100 selection:bg-momo-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Locations />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
};

export default App;