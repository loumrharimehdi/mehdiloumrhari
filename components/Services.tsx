
import React from 'react';
import { Rocket, Code, Heart, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Design',
    description: 'Une interface unique, moderne et pensée pour séduire vos visiteurs dès la première seconde.',
    icon: Heart,
    size: 'medium'
  },
  {
    id: '2',
    title: 'Development',
    description: 'Code propre, rapide et sécurisé. Optimisé pour tous les écrans (Mobile & Desktop).',
    icon: Code,
    size: 'medium'
  },
  {
    id: '3',
    title: 'Déploiement',
    description: 'Mise en ligne, configuration du nom de domaine et hébergement sécurisé inclus.',
    icon: Rocket,
    size: 'medium'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-20 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-[#1D1D1F]">
          Services : <span className="text-[#FF69B4]">Site Internet</span>
        </h2>
        <div className="w-20 h-1 bg-[#FF69B4] rounded-full opacity-20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        {services.map((service) => (
          <div 
            key={service.id}
            className="glass-panel rounded-[2.5rem] p-10 flex flex-col items-center text-center h-full group hover:bg-white transition-all duration-300 shadow-sm border border-white/60"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#FFB6C1]/10 border border-[#FFB6C1]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <service.icon className="text-[#FF69B4]" size={36} fill={service.icon === Heart ? "currentColor" : "none"} />
            </div>
            
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1D1D1F] tracking-tight">{service.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-base md:text-lg max-w-sm mx-auto">{service.description}</p>
            </div>
          </div>
        ))}

      </div>

      {/* WhatsApp CTA */}
      <div className="flex justify-center mt-12">
        <a 
          href="https://wa.me/212711152775?text=Je suis intéressé par vos services" 
          className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] px-10 py-5 rounded-full font-bold text-lg hover:scale-105 hover:-translate-y-1 transition-all duration-200 shadow-xl shadow-green-200 flex items-center justify-center gap-3"
        >
          <MessageCircle size={22} />
          Lancer mon projet
        </a>
      </div>
    </section>
  );
};
