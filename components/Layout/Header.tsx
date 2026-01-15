import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-black tracking-tighter text-black">
          KAO LINK
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold text-gray-900 hover:text-brand-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#cta" 
            className="px-6 py-3 bg-brand-primary text-white text-sm font-bold hover:bg-brand-dark transition-colors"
          >
            お問い合わせ
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-black"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 gap-6">
           {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-bold text-black border-b border-gray-100 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-4 py-4 bg-brand-primary text-white text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              お問い合わせ
            </a>
        </div>
      )}
    </header>
  );
};