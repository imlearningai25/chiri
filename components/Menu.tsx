import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Steamed', 'Fried', 'Specialty', 'Sides'];

  const filteredItems = filter === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  return (
    <section id="menu" className="py-20 bg-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 uppercase">Our Menu</h2>
          <div className="w-24 h-1 bg-momo-orange mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-heading uppercase tracking-wide transition-all ${
                filter === cat 
                  ? 'bg-momo-orange text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-momo-dark rounded-xl overflow-hidden shadow-lg group hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-800">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-momo-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Popular
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <span className="text-momo-gold font-heading text-xl">${item.price}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-heading font-bold text-white uppercase">{item.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed font-body">
                  {item.description}
                </p>
                <button className="w-full py-2 border border-gray-600 text-gray-300 hover:border-momo-orange hover:text-momo-orange rounded font-heading uppercase tracking-wider transition-colors text-sm">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;