import React from 'react';
import { Star, Calendar } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  experience: string;
  onBookConsultation: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, image, experience, onBookConsultation }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img className="h-64 w-full object-cover" src={image} alt={name} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-gray-200">{specialty}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-2 text-sm text-gray-600">4.9 (120+ reviews)</span>
        </div>
        <p className="text-gray-600 mb-4">{experience}</p>
        <div className="flex justify-between items-center">
          <button 
            onClick={onBookConsultation}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book Consultation
          </button>
          <button className="text-blue-600 hover:text-blue-800">View Profile</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;