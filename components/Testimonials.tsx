import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    role: 'CEO, FashionNova',
    content: "L'équipe Lumina a totalement transformé notre image de marque. Le design est épuré, futuriste et incroyablement efficace. Nos conversions ont augmenté de 40%.",
    avatarUrl: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: '2',
    name: 'Thomas Dubreuil',
    role: 'Fondateur, TechStart',
    content: "Une collaboration fluide et un résultat au-delà de mes espérances. Le souci du détail style iOS est bluffant. Je recommande les yeux fermés.",
    avatarUrl: 'https://i.pravatar.cc/150?u=2'
  },
  {
    id: '3',
    name: 'Amine El Idrissi',
    role: 'Directeur, Atlas Digital',
    content: "Rapidité, écoute et excellence technique. C'est rare de trouver une agence qui comprend aussi bien les enjeux du web moderne.",
    avatarUrl: 'https://i.pravatar.cc/150?u=3'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Ils nous font confiance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item) => (
            <div key={item.id} className="glass-panel p-8 rounded-3xl flex flex-col relative group hover:bg-white/5 transition-colors">
              <Quote className="absolute top-8 right-8 text-white/10 group-hover:text-white/20 transition-colors" size={40} />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={item.avatarUrl} alt={item.name} className="w-12 h-12 rounded-full border border-white/20" />
                <div>
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-xs text-blue-400 uppercase tracking-wider">{item.role}</div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed italic relative z-10">
                "{item.content}"
              </p>
            </div>
          ))}
        </div>

         {/* Section CTA */}
         <div className="flex justify-center">
          <a 
            href="https://wa.me/212711152775?text=Je veux rejoindre vos clients satisfaits" 
            className="text-sm font-medium text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5 flex items-center gap-2"
          >
            Rejoignez nos clients satisfaits sur WhatsApp 
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          </a>
        </div>
      </div>
    </section>
  );
};