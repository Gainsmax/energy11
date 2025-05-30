import React from 'react';
import { Sun, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Sun size={32} className="text-yellow-400 mr-2" />
              <span className="text-2xl font-bold">
                Gains<span className="text-green-400">Max</span>
              </span>
            </div>
            <p className="text-blue-100 mb-6">
              Empowering homes and businesses with clean, renewable solar energy solutions since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#benefits" className="text-blue-100 hover:text-white transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-blue-100 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">Residential Solar</a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">Commercial Solar</a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">Industrial Solutions</a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">Battery Storage</a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">Monitoring Systems</a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">Maintenance & Support</a>
              </li>
              <li>
                <a 
                  href="https://www.gainsmax.net" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
                >
                  GainsMax Investment Platform →
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-blue-100">
                123 Solar Way, San Francisco, CA 94103
              </li>
              <li>
                <a href="tel:8005684267" className="text-blue-100 hover:text-white transition-colors">
                  (800) 568-4267
                </a>
              </li>
              <li>
                <a href="mailto:info@energie.gainsmax.net" className="text-blue-100 hover:text-white transition-colors">
                  info@energie.gainsmax.net
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-800 text-center text-blue-200">
          <p className="mb-4">© {new Date().getFullYear()} GainsMax Energy. All rights reserved.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;