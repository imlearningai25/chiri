import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-momo-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-momo-orange/20 rounded-lg transform -rotate-3"></div>
              <img 
                src="https://picsum.photos/600/400?random=20" 
                alt="Chef Chiri cooking" 
                className="relative rounded-lg shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-momo-orange font-heading text-xl uppercase tracking-widest mb-2">Our Story</h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Handcrafted with <span className="text-momo-red">Love & Spice</span></h2>
            <p className="text-gray-400 font-body text-lg mb-6 leading-relaxed">
              Founded by Chef Chiri, who grew up in the bustling streets of Kathmandu, our food truck brings the authentic taste of the Himalayas to you. 
              We believe that a perfect Momo isn't just about the filling; it's about the delicate wrapper, the specific fold, and the soul-warming chutney that accompanies it.
            </p>
            <p className="text-gray-400 font-body text-lg mb-8 leading-relaxed">
              We use locally sourced ingredients combined with spices imported directly from Nepal to create a flavor profile that is both nostalgic and exciting.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <span className="block text-3xl font-heading font-bold text-momo-gold">10k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Momos Served</span>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div className="text-center">
                <span className="block text-3xl font-heading font-bold text-momo-gold">4.9</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;