import React from 'react';
import { Check, ArrowRight, MessageCircle, Heart, AlertCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[#FFB6C1]/20 blur-[120px] -z-10 mix-blend-multiply" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter text-[#1D1D1F]">
            Tarif <span className="text-[#FF69B4]">Unique</span>.
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
            Une offre transparente. Tout est inclus pour démarrer.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-lg rounded-[3rem] p-8 md:p-12 border transition-all duration-300 flex flex-col glass-panel border-[#FFB6C1]/50 shadow-[0_25px_70px_-15px_rgba(255,182,193,0.3)] z-10 bg-white/90">
            
            {/* Scarcity Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-red-500 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-red-200 text-white flex items-center gap-2 animate-pulse">
              <AlertCircle size={14} /> Places limitées cette semaine
            </div>

            <div className="mb-10 text-center border-b border-gray-100 pb-8 mt-4">
              <h3 className="text-xl font-bold text-gray-400 mb-4 uppercase tracking-wide">Pack Lancement</h3>
              <div className="flex items-center justify-center gap-1">
                <span className="text-8xl font-extrabold text-[#1D1D1F] tracking-tighter">290€</span>
              </div>
              <p className="text-green-600 mt-4 text-sm font-bold bg-green-50 inline-block px-3 py-1 rounded-full">
                Paiement unique • Aucun abonnement mensuel
              </p>
            </div>

            <div className="flex-grow space-y-6 mb-12 px-2 md:px-6">
              {[
                'Design Premium Sur Mesure', 
                'Compatible Mobile & Tablette', 
                'Intégration de vos Textes & Images', 
                'Installation Hébergement & Domaine', 
                'Support WhatsApp 7j/7'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start md:items-center gap-4 text-lg text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-[#FF69B4] flex items-center justify-center shrink-0 mt-1 md:mt-0 text-white">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/212711152775?text=Je réserve ma place pour le Pack à 290€"
              className="w-full py-5 rounded-2xl font-bold text-lg text-center transition-all flex items-center justify-center gap-3 hover:scale-[1.02] hover:-translate-y-1 bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-xl shadow-green-200"
            >
              Réserver ma place
              <ArrowRight size={20} />
            </a>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              Garantie de satisfaction. Pas de paiement avant validation du devis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};