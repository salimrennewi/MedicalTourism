import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onBookConsultation: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBookConsultation }) => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">MediTurkey</span>
            </div>
            <p className="text-sm">Your trusted partner for medical tourism in Turkey. Quality healthcare at affordable prices.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Popular Procedures</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Hair Transplant</a></li>
              <li><a href="#" className="hover:text-blue-400">Dental Veneers</a></li>
              <li><a href="#" className="hover:text-blue-400">Rhinoplasty</a></li>
              <li><a href="#" className="hover:text-blue-400">Breast Augmentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+90 (212) 555-0123</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@mediturkey.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Istanbul, Turkey</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <button 
                onClick={onBookConsultation}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MediTurkey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;