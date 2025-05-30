import React from 'react';
import { ArrowRight } from 'lucide-react';

const Invest = () => {
  return (
    <section id="invest" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Invest in Clean Energy with GainsMax
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our investment platform and be part of the renewable energy revolution. 
            Discover opportunities to grow your wealth while supporting sustainable energy projects.
          </p>
          <a 
            href="https://www.gainsmax.net" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
          >
            Start Investing Now
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Invest;