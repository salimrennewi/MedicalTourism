import React, { useState } from 'react';
import { Heart, User, Search, Calendar, Plane, Award, Building2, Phone } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ProcedureCard from './components/ProcedureCard';
import DoctorCard from './components/DoctorCard';
import WhyTurkey from './components/WhyTurkey';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookConsultation = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MediTurkey</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#procedures" className="text-gray-700 hover:text-blue-600">Procedures</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600">Doctors</a>
              <a href="#why-turkey" className="text-gray-700 hover:text-blue-600">Why Turkey</a>
              <button 
                onClick={handleBookConsultation}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection onBookConsultation={handleBookConsultation} />

      <section id="procedures" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Procedures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcedureCard 
              title="Hair Transplant"
              image="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80"
              price="Starting from €2,500"
              description="Advanced FUE technique with natural results"
              onBookNow={handleBookConsultation}
            />
            <ProcedureCard 
              title="Dental Veneers"
              image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
              price="Starting from €1,800"
              description="Premium porcelain veneers for a perfect smile"
              onBookNow={handleBookConsultation}
            />
            <ProcedureCard 
              title="Rhinoplasty"
              image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
              price="Starting from €3,200"
              description="Customized nose surgery by expert surgeons"
              onBookNow={handleBookConsultation}
            />
          </div>
        </div>
      </section>

      <section id="doctors" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DoctorCard 
              name="Dr. Mehmet Yilmaz"
              specialty="Hair Transplant Specialist"
              image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
              experience="15+ years experience"
              onBookConsultation={handleBookConsultation}
            />
            <DoctorCard 
              name="Dr. Ayse Kaya"
              specialty="Cosmetic Dentist"
              image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
              experience="12+ years experience"
              onBookConsultation={handleBookConsultation}
            />
            <DoctorCard 
              name="Dr. Ali Demir"
              specialty="Plastic Surgeon"
              image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
              experience="18+ years experience"
              onBookConsultation={handleBookConsultation}
            />
          </div>
        </div>
      </section>

      <WhyTurkey />
      <Footer onBookConsultation={handleBookConsultation} />
      
      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;