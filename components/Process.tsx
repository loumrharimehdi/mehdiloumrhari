
import React from 'react';
import { MessageSquare, Palette, FileCheck, CreditCard, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "1. Discussion",
    description: "On discute de vos besoins sur WhatsApp. Vous m'expliquez ce que vous voulez."
  },
  {
    icon: Palette,
    title: "2. Design Gratuit",
    description: "Je réalise la maquette de votre site GRATUITEMENT. Vous voyez le résultat avant même de vous engager."
  },
  {
    icon: FileCheck,
    title: "3. Validation Devis",
    description: "Le design vous plaît ? On valide le devis pour lancer le développement. Sinon ? On arrête là, zéro frais."
  },
  {
    icon: CreditCard,
    title: "4. Livraison & Paiement",
    description: "Je mets le site en ligne. Vous vérifiez que tout fonctionne. Vous payez uniquement à la fin."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB6C1]/30 to-transparent -translate-y-8 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#FF69B4] font-bold tracking-widest uppercase text-xs mb-2 block">Garantie Ultime</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1D1D1F]">
            Design <span className="text-[#FF69B4]">Gratuit</span> avant de payer.
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Je suis tellement sûr de la qualité que je commence sans engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              
              {/* Step Number Badge */}
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#FFB6C1] text-[#FF69B4] flex items-center justify-center font-bold text-xl shadow-lg shadow-pink-100 mb-6 relative z-10 group-hover:scale-110 group-hover:bg-[#FF69B4] group-hover:text-white transition-all duration-300">
                <step.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Arrow for mobile flow */}
              {index < steps.length - 1 && (
                <div className="md:hidden text-gray-200 mb-4">
                  <ArrowRight size={24} className="rotate-90" />
                </div>
              )}

              <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
