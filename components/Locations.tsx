import React from 'react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-20 bg-momo-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 uppercase">Find Us This Week</h2>
            <p className="text-white/80 font-body text-lg mb-8">
              We move around the city to bring dumplings closer to you. Check our weekly schedule below. 
              Follow our social media for real-time updates on weather cancellations or surprise pop-ups!
            </p>
            
            <div className="space-y-4">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-momo-gold uppercase">{loc.day}</h3>
                      <p className="text-white font-bold">{loc.name}</p>
                      <p className="text-white/70 text-sm">{loc.address}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <span className="inline-block bg-black/30 px-3 py-1 rounded text-sm font-mono">{loc.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-96 lg:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
            {/* Placeholder for Map - Using an image to represent map for this demo */}
            <img 
              src="https://picsum.photos/800/800?random=map" 
              alt="Map Location" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center p-6 bg-black/70 backdrop-blur-md rounded-xl border border-momo-orange">
                <p className="font-heading text-xl text-white mb-2">Want us for catering?</p>
                <a href="mailto:catering@chirismomo.com" className="text-momo-orange font-bold text-lg hover:underline">catering@chirismomo.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;