import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-heading text-xl font-bold text-white tracking-wider">CHIRI'S MOMO</span>
          <p className="text-gray-500 text-sm mt-1">© {new Date().getFullYear()} Chiri's Momo Delight. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-momo-orange transition-colors">Instagram</a>
          <a href="#" className="text-gray-500 hover:text-momo-orange transition-colors">Facebook</a>
          <a href="#" className="text-gray-500 hover:text-momo-orange transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;