import React from 'react';
import { 
  Home, 
  Building2, 
  Factory, 
  BatteryCharging, 
  MonitorSmartphone,
  Wrench 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home size={36} className="text-blue-600" />,
      title: 'Residential Solar',
      description: 'Custom-designed solar systems for homes of all sizes, optimized for your energy needs and roof layout.',
      image: 'https://images.pexels.com/photos/9875439/pexels-photo-9875439.jpeg'
    },
    {
      icon: <Building2 size={36} className="text-blue-600" />,
      title: 'Commercial Solar',
      description: 'Reduce operating costs and demonstrate environmental leadership with our commercial solar solutions.',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg'
    },
    {
      icon: <Factory size={36} className="text-blue-600" />,
      title: 'Industrial Solutions',
      description: 'Large-scale solar installations for manufacturing facilities and industrial complexes.',
      image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg'
    },
    {
      icon: <BatteryCharging size={36} className="text-blue-600" />,
      title: 'Battery Storage',
      description: 'Integrate advanced battery systems to store excess energy for nighttime use or backup power.',
      image: 'https://images.pexels.com/photos/9875380/pexels-photo-9875380.jpeg'
    },
    {
      icon: <MonitorSmartphone size={36} className="text-blue-600" />,
      title: 'Monitoring Systems',
      description: 'Track your energy production and consumption in real-time with our smart monitoring solutions.',
      image: 'https://images.pexels.com/photos/7230258/pexels-photo-7230258.jpeg'
    },
    {
      icon: <Wrench size={36} className="text-blue-600" />,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance plans to ensure your solar system performs optimally for decades.',
      image: 'https://images.pexels.com/photos/9873899/pexels-photo-9873899.jpeg'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Solar Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            GainsMax Energy offers comprehensive solar solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
                <a 
                  href="#contact" 
                  className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;