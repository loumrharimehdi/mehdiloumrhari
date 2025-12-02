
import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-white/50 py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="flex flex-col md:flex-row items-center gap-3 font-bold text-xl">
          <div className="w-10 h-10 bg-[#FFB6C1] rounded-full flex items-center justify-center text-white shadow-md shadow-pink-200">
            <Heart size={16} fill="white" />
          </div>
          <span className="text-[#1D1D1F]">Mehdi Loumrhari</span>
        </div>
        
        {/* Copyright */}
        <div className="text-gray-500 text-sm flex items-center gap-1 font-medium bg-white/50 px-4 py-1 rounded-full border border-gray-100">
          © {new Date().getFullYear()} Fait avec <Heart size={12} className="text-[#FFB6C1]" fill="currentColor" /> au Maroc.
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-semibold text-gray-400">
          <a href="https://wa.me/212711152775" className="hover:text-[#25D366] transition-colors flex items-center gap-2">
            Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
