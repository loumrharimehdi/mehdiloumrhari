
import React from 'react';
import { Clock, Wallet, Zap } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1D1D1F]">Pourquoi c'est <span className="text-[#FF69B4]">révolutionnaire</span> ?</h2>
          <p className="text-gray-500 text-lg">Comparons ce qui est comparable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Colonne Marché */}
          <div className="p-8 md:p-10 rounded-[2.5rem] border border-gray-100 bg-gray-50/50 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-bold text-gray-500 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">VS</span>
              Agence / Freelance
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Wallet size={20} /> Prix moyen
                </div>
                <span className="text-lg md:text-xl font-bold text-gray-400 decoration-red-400">1 500€ - 3 000€</span>
              </div>
              
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock size={20} /> Délai moyen
                </div>
                <span className="text-lg md:text-xl font-bold text-gray-400">3 à 5 Semaines</span>
              </div>

              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Zap size={20} /> Processus
                </div>
                <span className="text-right text-gray-400 font-medium text-sm">Réunions, Devis, Attente...</span>
              </div>
            </div>
          </div>

          {/* Colonne Mehdi (Winner) */}
          <div className="relative p-8 md:p-10 rounded-[2.5rem] border-2 border-[#25D366] bg-white shadow-2xl shadow-green-100 scale-[1.02] transform">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#25D366] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
              Meilleur Choix
            </div>

            <h3 className="text-3xl font-bold text-[#1D1D1F] mb-8 flex items-center gap-3">
               Mehdi Loumrhari
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-green-50 pb-4">
                <div className="flex items-center gap-3 text-[#1D1D1F] font-medium">
                  <Wallet size={20} className="text-[#FF69B4]" /> Prix
                </div>
                <span className="text-3xl font-black text-[#25D366]">290€</span>
              </div>
              
              <div className="flex items-center justify-between border-b border-green-50 pb-4">
                <div className="flex items-center gap-3 text-[#1D1D1F] font-medium">
                  <Clock size={20} className="text-[#FF69B4]" /> Délai
                </div>
                <span className="text-3xl font-black text-[#25D366]">1 Jour</span>
              </div>

              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-3 text-[#1D1D1F] font-medium">
                  <Zap size={20} className="text-[#FF69B4]" /> Processus
                </div>
                <span className="text-right text-[#1D1D1F] font-bold text-sm bg-green-50 px-3 py-1 rounded-full text-green-700">Simple message WhatsApp</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
