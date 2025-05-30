import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How much does a solar installation cost?",
      answer: "The cost of a solar installation varies depending on system size, property characteristics, and local incentives. On average, residential systems range from $15,000-$25,000 before incentives. GainsMax offers free consultations with detailed quotes tailored to your specific needs and eligible incentives."
    },
    {
      question: "How long does the installation process take?",
      answer: "The entire process typically takes 2-3 months from signing the contract to turning on your system. This includes design, permitting, installation, and utility approval. The actual installation usually takes only 1-3 days depending on system size and complexity."
    },
    {
      question: "What happens if there's a power outage?",
      answer: "Standard grid-tied solar systems will shut down during a power outage for safety reasons. However, GainsMax offers battery storage solutions that provide backup power during outages, allowing you to keep essential appliances running even when the grid is down."
    },
    {
      question: "How much maintenance do solar panels require?",
      answer: "Solar panels require minimal maintenance. They're designed to withstand the elements and typically only need occasional cleaning to remove dust or debris. GainsMax offers maintenance plans that include regular inspections and cleaning to ensure optimal performance."
    },
    {
      question: "What incentives and tax credits are available?",
      answer: "The federal Investment Tax Credit (ITC) allows you to deduct 26% of your solar system cost from your federal taxes. Many states and utilities offer additional incentives, rebates, or performance-based incentives. Our team will help you identify all available incentives during your consultation."
    },
    {
      question: "What happens if I sell my home?",
      answer: "Homes with solar typically sell faster and for more money than comparable homes without solar. You can either transfer the solar agreement to the new homeowner or pay off the system before selling. Our team can help you navigate this process when the time comes."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Get answers to the most common questions about solar energy and our services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 last:border-0 last:pb-0"
            >
              <button 
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl font-medium text-blue-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-900 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-blue-900 flex-shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium inline-block transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;