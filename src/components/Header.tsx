import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Sun size={32} className="text-yellow-500 mr-2" />
          <span className="text-2xl font-bold text-blue-900">
            Gains<span className="text-green-600">Max</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-blue-900 hover:text-green-600 font-medium transition-colors">Home</a>
          <a href="#benefits" className="text-blue-900 hover:text-green-600 font-medium transition-colors">Benefits</a>
          <a href="#services" className="text-blue-900 hover:text-green-600 font-medium transition-colors">Services</a>
          <a href="#about" className="text-blue-900 hover:text-green-600 font-medium transition-colors">About</a>
          <a href="#testimonials" className="text-blue-900 hover:text-green-600 font-medium transition-colors">Testimonials</a>
          <a href="#faq" className="text-blue-900 hover:text-green-600 font-medium transition-colors">FAQ</a>
          <a href="#contact" className="text-blue-900 hover:text-green-600 font-medium transition-colors">Contact</a>
        </nav>
        
        <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition-colors">
          Get a Quote
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-blue-900 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#benefits" 
              className="text-blue-900 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#services" 
              className="text-blue-900 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-blue-900 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="text-blue-900 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-blue-900 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="text-blue-900 hover:text-green-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition-colors">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;