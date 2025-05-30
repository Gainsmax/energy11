import React from 'react';
import { 
  Sun, 
  DollarSign, 
  Leaf, 
  Home, 
  BatteryCharging, 
  ShieldCheck 
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign size={36} className="text-yellow-500" />,
      title: 'Reduce Energy Bills',
      description: 'Lower your monthly energy costs by up to 70% by harnessing free energy from the sun.'
    },
    {
      icon: <Leaf size={36} className="text-green-500" />,
      title: 'Eco-Friendly Solution',
      description: 'Reduce your carbon footprint and contribute to a cleaner, healthier environment.'
    },
    {
      icon: <Home size={36} className="text-blue-500" />,
      title: 'Increase Property Value',
      description: 'Homes with solar installations typically sell for 4.1% more than comparable properties.'
    },
    {
      icon: <Sun size={36} className="text-yellow-500" />,
      title: 'Energy Independence',
      description: 'Free yourself from rising utility costs and unpredictable energy markets.'
    },
    {
      icon: <BatteryCharging size={36} className="text-blue-500" />,
      title: 'Battery Storage Options',
      description: 'Store excess energy for use during outages or peak demand periods.'
    },
    {
      icon: <ShieldCheck size={36} className="text-green-500" />,
      title: '25-Year Warranty',
      description: 'Our premium solar panels come with extensive warranties for your peace of mind.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why Choose Solar Energy?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover the many advantages of switching to clean, renewable solar power with GainsMax Energy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 px-6 py-3 rounded-full">
            <p className="text-blue-900 font-medium">
              Join over 10,000 homeowners who have made the switch to solar with GainsMax
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;