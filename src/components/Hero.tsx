import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroImage = document.getElementById('hero-image');
      const heroContent = document.getElementById('hero-content');
      
      if (heroImage && heroContent) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          id="hero-image"
          src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg" 
          alt="Solar panels on roof with blue sky" 
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          id="hero-content"
          className="max-w-3xl text-white transition-transform duration-300"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Powering Your Future with <span className="text-yellow-400">Clean Solar Energy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Harness the power of the sun with GainsMax Energy's cutting-edge solar solutions. 
            Save money, reduce your carbon footprint, and invest in a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium text-lg inline-flex items-center justify-center transition-colors"
            >
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a 
              href="#services" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-full font-medium text-lg inline-flex items-center justify-center transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;