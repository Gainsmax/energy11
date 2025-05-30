import React, { useEffect, useRef } from 'react';

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.counter-value');
            counters.forEach(counter => {
              const target = parseInt(counter.getAttribute('data-target') || '0');
              let count = 0;
              const updateCounter = () => {
                const increment = target / 100;
                if (count < target) {
                  count += increment;
                  (counter as HTMLElement).innerText = Math.ceil(count).toString();
                  setTimeout(updateCounter, 20);
                } else {
                  (counter as HTMLElement).innerText = target.toString();
                }
              };
              updateCounter();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-yellow-400">GainsMax</span> Energy
            </h2>
            <p className="text-lg mb-6 text-blue-100">
              Founded in 2015, GainsMax Energy has been at the forefront of the renewable energy revolution, 
              helping thousands of homeowners and businesses transition to clean, sustainable solar power.
            </p>
            <p className="text-lg mb-6 text-blue-100">
              Our mission is to accelerate the world's transition to sustainable energy by making solar 
              power accessible, affordable, and simple for everyone. We believe in a future where energy 
              is clean, abundant, and empowers communities.
            </p>
            <p className="text-lg mb-8 text-blue-100">
              With our team of certified solar experts, cutting-edge technology, and commitment to customer 
              satisfaction, we deliver solar solutions that exceed expectations and stand the test of time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="#testimonials" 
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                See Testimonials
              </a>
            </div>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <span className="counter-value" data-target="10000">0</span>+
              </h3>
              <p className="text-blue-100">Solar Installations</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <span className="counter-value" data-target="98">0</span>%
              </h3>
              <p className="text-blue-100">Customer Satisfaction</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <span className="counter-value" data-target="25">0</span> yrs
              </h3>
              <p className="text-blue-100">Warranty Coverage</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <span className="counter-value" data-target="175">0</span>M
              </h3>
              <p className="text-blue-100">kWh Generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;