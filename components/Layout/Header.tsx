import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-gray-100' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
           <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl transition-colors duration-300 ${isScrolled ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary'}`}>
              K
           </div>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>
            KAO LINK
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide hover:text-brand-secondary transition-colors duration-300 ${
                isScrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#cta" 
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg ${
              isScrolled 
                ? 'bg-brand-secondary text-white hover:bg-orange-600' 
                : 'bg-white text-brand-primary hover:bg-gray-100'
            }`}
          >
            お問い合わせ
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-brand-primary' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-brand-primary/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
         {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-bold text-white hover:text-brand-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-4 px-10 py-4 bg-brand-secondary text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            お問い合わせ
          </a>
      </div>
    </header>
  );
};