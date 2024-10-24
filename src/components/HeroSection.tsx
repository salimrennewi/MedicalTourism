import React from 'react';
import { Search } from 'lucide-react';

interface HeroSectionProps {
  onBookConsultation: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookConsultation }) => {
  return (
    <div className="relative bg-blue-600 pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
          alt="Medical background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            World-Class Medical Care in Turkey
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
            Premium healthcare services at affordable prices. Experience the perfect blend of medical expertise and Turkish hospitality.
          </p>
          <div className="mt-10">
            <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center border rounded-lg p-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search procedures, doctors, or clinics..."
                    className="ml-2 flex-1 outline-none"
                  />
                  <button 
                    onClick={onBookConsultation}
                    className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;