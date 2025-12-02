import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/212711152775"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
      <div className="relative bg-white border border-[#25D366]/20 p-4 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 shadow-2xl flex items-center gap-3 pr-6 hover:scale-110">
        <MessageCircle size={28} fill="currentColor" className="text-current" />
        <span className="font-bold hidden sm:block text-[#1D1D1F] group-hover:text-white">Discuter</span>
      </div>
    </a>
  );
};