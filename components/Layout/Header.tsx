import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 100pxスクロールしたらヘッダーのデザインを変える（技術的定石）
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar (企業サイト特有の帯) */}
      <div className="bg-slate-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center text-xs font-medium">
          <div className="flex gap-4">
             <span>大阪府門真市松生町1-16-211</span>
             <span className="opacity-50">|</span>
             <span>営業時間: 9:00 - 18:00</span>
          </div>
          <div className="flex gap-4">
             <a href="#" className="hover:text-brand-secondary transition-colors">News</a>
             <a href="#" className="hover:text-brand-secondary transition-colors">Company</a>
             <a href="#" className="hover:text-brand-secondary transition-colors">Recruit</a>
          </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-gray-200' 
            : 'bg-white py-5 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
             <div className="w-10 h-10 bg-brand-secondary text-white rounded flex items-center justify-center font-bold text-xl">K</div>
             <div>
                <div className="text-xl font-bold text-slate-800 leading-none tracking-tight">KAO LINK</div>
                <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Corporate Site</div>
             </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold text-slate-600 hover:text-brand-secondary transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact / CTA */}
          <div className="hidden md:flex items-center gap-6">
             <div className="text-right hidden lg:block">
                <div className="flex items-center justify-end gap-1 text-xs font-bold text-slate-400">
                   <Phone size={12} /> 代表直通
                </div>
                <div className="text-xl font-bold text-brand-primary font-english leading-none">{COMPANY_INFO.phone}</div>
             </div>
             <a 
               href="#cta" 
               className="px-6 py-3 bg-brand-primary text-white rounded text-sm font-bold shadow-lg hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
             >
               <Mail size={16} /> お問い合わせ
             </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4 md:hidden">
             {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-bold text-slate-700 py-2 border-b border-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                 <a href="#cta" className="block w-full py-3 bg-brand-primary text-white text-center rounded font-bold">お問い合わせ</a>
              </div>
          </div>
        )}
      </header>
    </>
  );
};