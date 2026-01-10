import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=10" 
          alt="Momo Platter" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-momo-dark to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h2 className="text-momo-orange font-heading text-xl md:text-2xl tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
          Authentic Himalayan Taste
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 uppercase tracking-tighter leading-none shadow-black drop-shadow-lg">
          Chiri's <span className="text-transparent bg-clip-text bg-gradient-to-r from-momo-orange to-momo-gold">Momo</span> Delight
        </h1>
        <p className="text-gray-200 font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Serving the finest handcrafted dumplings on wheels. From Kathmandu streets to your neighborhood.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className="px-8 py-4 bg-momo-orange text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-orange-600 transition-colors rounded shadow-lg"
          >
            View Menu
          </a>
          <a 
            href="#locations" 
            className="px-8 py-4 border-2 border-white text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-colors rounded shadow-lg"
          >
            Find The Truck
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;