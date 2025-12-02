
import React, { useState } from 'react';
import { Heart, Search, Home, Layout, MousePointer2 } from 'lucide-react';
import { ProjectItem } from '../types';

// 🟢 IMAGES STABLES (Placeholders)
// Remplacez ces liens par les URLs de vos vraies images une fois hébergées.
const imgAccueil = "https://bpqcdkedkdwllrczzvea.supabase.co/storage/v1/object/public/imgs/simsar-accueil.PNG";
const imgListing = "https://bpqcdkedkdwllrczzvea.supabase.co/storage/v1/object/public/imgs/Simsar-listing.PNG";
const imgRecherche ="https://bpqcdkedkdwllrczzvea.supabase.co/storage/v1/object/public/imgs/simsar-recherche.PNG";

const projectImages = [
  {
    id: 1,
    title: "Page d'Accueil",
    desc: "Proposition de valeur claire & Recherche simplifiée",
    icon: Home,
    src: imgAccueil
  },
  {
    id: 2,
    title: "Listing & Filtres",
    desc: "Cartes immobilières optimisées & UX fluide",
    icon: Layout,
    src: imgListing
  },
  {
    id: 3,
    title: "Expérience Recherche",
    desc: "Gestion des états vides (Empty States) avec empathie",
    icon: Search,
    src: imgRecherche
  }
];

const project: ProjectItem = { 
  id: '1', 
  title: 'Simsar.ma', 
  category: 'Immobilier & Annonces', 
  imageUrl: '' 
};

export const Portfolio: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="work" className="py-24 px-6 relative bg-white overflow-hidden">
       {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FFB6C1]/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#FF69B4] text-xs font-bold uppercase tracking-widest mb-6 border border-pink-100">
          <Heart size={12} fill="currentColor" /> Réalisation
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-[#1D1D1F]">
          La Preuve par l'Exemple
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Zoom sur <span className="font-bold text-[#FF69B4]">Simsar.ma</span>. Une plateforme immobilière complète conçue en temps record.
        </p>
      </div>

      {/* Featured Single Project Showcase */}
      <div className="max-w-6xl mx-auto">
        <div className="group relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 bg-white">
          
          {/* Browser Header Mockup */}
          <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center gap-4 relative z-20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-gray-100/50 rounded-lg h-8 flex items-center justify-between px-4 text-xs text-gray-400 font-medium font-mono">
              <span className="flex items-center gap-2"><span className="text-green-500">🔒</span> https://simsar.ma</span>
            </div>
          </div>

          {/* ACCORDION GALLERY */}
          <div className="flex flex-col lg:flex-row h-[500px] bg-gray-50">
            {projectImages.map((img, index) => (
              <div 
                key={img.id}
                onClick={() => setActiveSlide(index)}
                className={`relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group/slide
                  ${activeSlide === index ? 'flex-[3] lg:flex-[3]' : 'flex-[1] lg:flex-[1] hover:flex-[1.2]'}
                  ${activeSlide === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'}
                  border-b lg:border-b-0 lg:border-r border-white/20 last:border-0
                `}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url(${img.src})`,
                    transform: activeSlide === index ? 'scale(1)' : 'scale(1.1)'
                  }}
                />
                
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${activeSlide === index ? 'opacity-60' : 'opacity-40'}`} />

                {/* Content Label */}
                <div className={`absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-500 ${activeSlide === index ? 'translate-y-0' : 'translate-y-4'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-full bg-white/20 backdrop-blur-md ${activeSlide === index ? 'text-[#FF69B4]' : 'text-white'}`}>
                      <img.icon size={20} />
                    </div>
                    <span className={`font-bold text-xl uppercase tracking-wider ${activeSlide !== index && 'hidden lg:inline-block'}`}>
                      {img.title}
                    </span>
                  </div>
                  
                  <p className={`text-gray-200 text-sm leading-relaxed max-w-md transition-all duration-500 delay-100 ${activeSlide === index ? 'opacity-100 h-auto mt-2' : 'opacity-0 h-0 overflow-hidden'}`}>
                    {img.desc}
                  </p>
                </div>

                {/* Click Hint */}
                {activeSlide !== index && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/slide:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                      <MousePointer2 size={24} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Project Details Footer */}
          <div className="p-8 md:p-10 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-gray-100">
            <div>
              <h3 className="text-3xl font-bold text-[#1D1D1F] mb-2">{project.title}</h3>
              <p className="text-gray-500">Plateforme immobilière 100% vérifiée.</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
               <span className="px-4 py-2 bg-[#FFF9F0] text-[#F97316] rounded-xl font-bold text-sm border border-[#F97316]/10">UI Design</span>
               <span className="px-4 py-2 bg-gray-50 text-gray-600 rounded-xl font-medium text-sm">Next.js</span>
               <span className="px-4 py-2 bg-gray-50 text-gray-600 rounded-xl font-medium text-sm">Tailwind</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
