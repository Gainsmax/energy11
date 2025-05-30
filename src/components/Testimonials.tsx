import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      location: "San Diego, CA",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      quote: "Switching to solar with GainsMax Energy was one of the best decisions I've made. My energy bills have dropped by 65%, and the installation process was seamless. Their team was professional and knowledgeable throughout the entire process.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      location: "Austin, TX",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      quote: "I was hesitant about solar at first, but GainsMax made it so easy. They handled everything from permits to installation, and their monitoring system lets me track my savings in real-time. I'm now producing more energy than I use!",
      rating: 5
    },
    {
      name: "David Rodriguez",
      location: "Phoenix, AZ",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      quote: "As a business owner, reducing operational costs is crucial. GainsMax designed a commercial solar system that reduced our energy expenses by 70%. The ROI has been incredible, and we're proud to be a more sustainable business.",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      location: "Denver, CO",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      quote: "The GainsMax team went above and beyond to design a system that worked with our unique roof. Their attention to detail and customer service is exceptional. We're enjoying lower bills and helping the environment!",
      rating: 4
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Don't just take our word for it. Hear from homeowners and businesses who have made the switch to solar with GainsMax Energy.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                  {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i + testimonials[currentIndex].rating} size={20} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 text-lg">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-semibold text-blue-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-blue-900' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;