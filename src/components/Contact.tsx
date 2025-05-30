import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Check
} from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    submitted: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would submit the form data to a server
    console.log('Form submitted:', formState);
    setFormState(prev => ({ ...prev, submitted: true }));
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        submitted: false
      });
    }, 3000);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Get in Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Ready to start your solar journey? Contact us today for a free consultation and personalized quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            {formState.submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 text-center">
                  Your message has been received. A GainsMax Energy consultant will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name*
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address*
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number*
                    </label>
                    <input 
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                    Property Address
                  </label>
                  <input 
                    type="text"
                    id="address"
                    name="address"
                    value={formState.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="123 Main St, City, State"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="Tell us about your energy needs or any specific questions you have."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Get Your Free Quote
                </button>
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-blue-900 rounded-xl shadow-md p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Our Headquarters</h4>
                    <p className="text-blue-100">123 Solar Way, San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-blue-100">(800) 568-4267</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={24} className="text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-blue-100">info@energie.gainsmax.net</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={24} className="text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p className="text-blue-100">Monday - Friday: 8am - 6pm</p>
                    <p className="text-blue-100">Saturday: 9am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  <span className="text-gray-600">California</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  <span className="text-gray-600">Arizona</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  <span className="text-gray-600">Nevada</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  <span className="text-gray-600">Texas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  <span className="text-gray-600">Colorado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  <span className="text-gray-600">Florida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;