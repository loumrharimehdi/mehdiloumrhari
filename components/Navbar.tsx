import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4`}>
      <div className={`glass-nav rounded-full transition-all duration-500 flex items-center justify-between px-6 py-3 border border-white/40 ${isScrolled ? 'w-full max-w-4xl shadow-xl shadow-black/5 bg-white/80' : 'w-full max-w-6xl shadow-sm bg-white/50'}`}>
        
        {/* Logo / Name */}
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#FF69B4] to-[#FFB6C1] rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
            <Heart size={16} fill="currentColor" />
          </div>
          <span className="hidden sm:block text-[#1D1D1F] group-hover:text-[#FF69B4] transition-colors">Mehdi Loumrhari</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#services" className="hover:text-[#FF69B4] transition-colors">Services</a>
          <a href="#pricing" className="hover:text-[#FF69B4] transition-colors">Tarifs</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a href="https://wa.me/212711152775" className="bg-[#1D1D1F] text-white px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform duration-200 shadow-lg shadow-black/5 flex items-center gap-2 hover:bg-[#FF69B4] hover:shadow-pink-200">
            Me Contacter
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#1D1D1F] p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 glass-panel rounded-[2rem] p-6 flex flex-col gap-4 md:hidden animate-fade-in origin-top border border-white/60 bg-white/90 shadow-2xl z-50">
          <a href="#services" className="text-lg font-medium text-[#1D1D1F] py-3 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#pricing" className="text-lg font-medium text-[#1D1D1F] py-3 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>Tarifs</a>
          <a href="https://wa.me/212711152775" className="ios-btn-gradient py-4 rounded-xl text-center text-white font-bold mt-2 shadow-lg shadow-pink-200" onClick={() => setMobileMenuOpen(false)}>
            Discuter sur WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};