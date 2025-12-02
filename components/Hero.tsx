import React from 'react';
import { MessageCircle, Heart, Star, Sparkles, ShieldCheck, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-40 pb-24 px-6 overflow-hidden">
      
      {/* Background Ambience - Light Pink & White */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FFB6C1]/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF69B4]/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[80px] pointer-events-none opacity-80" />

      {/* Floating Hearts Decor */}
      <div className="absolute top-1/4 left-10 md:left-1/4 animate-float opacity-60 text-[#FFB6C1]">
         <Heart size={32} fill="currentColor" />
      </div>
      <div className="absolute bottom-1/3 right-10 md:right-1/4 animate-float-delayed opacity-50 text-[#FF69B4]">
         <Heart size={48} fill="currentColor" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-10">
        
        {/* Trust Badges - Conversion Booster */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFB6C1]/30 bg-white/60 backdrop-blur-md shadow-sm text-xs font-bold text-[#1D1D1F]">
            <Sparkles size={14} className="text-[#FF69B4]" />
            <span>Design Premium</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-200 bg-white/60 backdrop-blur-md shadow-sm text-xs font-bold text-[#1D1D1F]">
            <Clock size={14} className="text-green-500" />
            <span>Livraison 24h</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="relative flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.95] text-[#1D1D1F] drop-shadow-sm">
            Site Internet
          </h1>
          
          <div className="mt-8 md:absolute md:-right-32 md:top-0 rotate-0 md:rotate-12 z-20">
             <span className="inline-flex flex-col items-center justify-center px-6 py-3 bg-[#FFB6C1] text-white font-black text-xl md:text-3xl rounded-3xl shadow-[0_20px_40px_-10px_rgba(255,182,193,0.8)] border-4 border-white transform hover:scale-105 transition-transform duration-300">
               <span>EN 1 JOUR</span>
               <div className="flex gap-1 mt-1">
                 <Star size={14} fill="white" stroke="none" />
                 <Star size={14} fill="white" stroke="none" />
                 <Star size={14} fill="white" stroke="none" />
               </div>
             </span>
          </div>
        </div>

        {/* Subtitle with Benefit */}
        <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium mt-4">
          Votre business mérite un site pro <span className="text-[#FF69B4] font-bold">dès demain</span>. <br/>
          Design moderne, clé en main, sans stress.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8 w-full">
          <a 
            href="https://wa.me/212711152775?text=Bonjour, je veux lancer mon site en 1 jour !" 
            className="w-full sm:w-auto px-10 py-5 rounded-[2rem] bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold text-lg transition-all shadow-xl shadow-green-200 flex items-center justify-center gap-3 hover:scale-105 hover:-translate-y-1"
          >
            <MessageCircle size={24} fill="currentColor" className="text-current" />
            Devis sur WhatsApp
          </a>
          
          <a 
            href="#work" 
            className="w-full sm:w-auto px-8 py-5 rounded-[2rem] bg-white border border-gray-200 text-gray-700 hover:text-[#FF69B4] hover:border-[#FFB6C1] font-bold text-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg shadow-sm"
          >
            Voir des exemples
          </a>
        </div>
        
        {/* Micro-copy for Trust */}
        <div className="text-sm text-gray-400 flex items-center gap-2 mt-4">
          <ShieldCheck size={14} />
          <span>Paiement sécurisé après validation du devis</span>
        </div>
      </div>
    </section>
  );
};