import React from 'react';
import { MessageCircle, Mail, Heart } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="glass-panel rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-white/10 shadow-[0_0_100px_-20px_rgba(255,182,193,0.1)]">
        
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB6C1]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-[#FFB6C1] uppercase tracking-widest flex items-center gap-2">
            <Heart size={12} fill="currentColor" /> Contact Direct
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-tighter">
            On commence quand ?
          </h2>
          <p className="text-gray-400 mb-12 text-xl max-w-lg">
            Votre site web en 1 jour commence par un simple message.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <a 
                href="https://wa.me/212711152775" 
                className="group flex flex-col items-center justify-center p-10 rounded-[2.5rem] bg-[#25D366] hover:bg-[#20bd5a] transition-all cursor-pointer shadow-lg shadow-green-500/20 hover:scale-[1.02]"
              >
                 <div className="w-20 h-20 rounded-full bg-black/10 flex items-center justify-center mb-6">
                    <MessageCircle size={40} className="text-white" fill="currentColor" />
                 </div>
                 <h3 className="text-2xl font-bold text-black mb-1">WhatsApp</h3>
                 <p className="text-black/70 font-medium">Réponse immédiate</p>
                 <div className="mt-6 px-4 py-1.5 bg-black/10 rounded-full text-black font-bold text-sm">
                    +212 711 152 775
                 </div>
              </a>

              <div className="flex flex-col items-center justify-center p-10 rounded-[2.5rem] glass-panel bg-black/40 border border-white/10 hover:bg-white/5 transition-colors">
                 <div className="w-20 h-20 rounded-full bg-[#FFB6C1]/10 flex items-center justify-center mb-6 border border-[#FFB6C1]/20">
                    <Mail size={40} className="text-[#FFB6C1]" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
                 <p className="text-gray-400 mb-6">Pour les détails</p>
                 <a href="mailto:contact@mehdiloumrhari.com" className="text-white border-b border-white/30 hover:border-[#FFB6C1] pb-1 transition-colors">
                    contact@mehdiloumrhari.com
                 </a>
              </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             Actuellement disponible pour de nouveaux projets
          </div>
        </div>
      </div>
    </section>
  );
};