import React from 'react';
import { Calendar, Star } from 'lucide-react';

interface ProcedureCardProps {
  title: string;
  image: string;
  price: string;
  description: string;
  onBookNow: () => void;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({ title, image, price, description, onBookNow }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img className="h-48 w-full object-cover" src={image} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center mt-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-2 text-sm text-gray-600">(150+ reviews)</span>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-blue-600 font-semibold">{price}</span>
          <button 
            onClick={onBookNow}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Calendar className="h-4 w-4 mr-1" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcedureCard;