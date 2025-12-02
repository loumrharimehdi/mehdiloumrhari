import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Pourquoi seulement 290€ ?",
    answer: "C'est un prix optimisé pour le lancement. Je crois en l'efficacité : j'utilise des outils modernes qui me permettent de travailler 10x plus vite qu'une agence classique. Vous payez pour le résultat, pas pour des frais de structure inutiles."
  },
  {
    question: "Vraiment prêt en 1 jour ?",
    answer: "Oui. Si vous avez vos textes et images prêts, je commence le matin et votre site est en ligne le soir même. Mon process est rodé et ne laisse place à aucune perte de temps."
  },
  {
    question: "Y a-t-il des frais mensuels ?",
    answer: "Non, je ne prends aucun abonnement. Vous ne payez qu'une seule fois 290€. Les seuls frais externes sont l'hébergement/nom de domaine (environ 30€/an chez l'hébergeur) qui vous appartiennent à 100%."
  },
  {
    question: "Puis-je modifier le site moi-même ?",
    answer: "Absolument. Le site est construit pour être facilement modifiable. Je vous montre comment changer un texte ou une image en 5 minutes une fois le site livré."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1D1D1F]">Questions ?</h2>
        <p className="text-gray-500">Tout ce que vous devez savoir.</p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-[#FFB6C1]"
          >
            <button 
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-lg text-[#1D1D1F] pr-4">{item.question}</span>
              <div className={`p-2 rounded-full ${openIndex === index ? 'bg-[#FF69B4] text-white' : 'bg-gray-100 text-gray-500'}`}>
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};