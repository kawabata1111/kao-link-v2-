import React from 'react';
import { Menu, X, Phone, Mail, ChevronRight, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../../constants';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Top Bar (LLCOM同様、白背景に控えめなボーダー) */}
      <div className="bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-10 flex justify-end items-center text-xs font-medium text-gray-500 gap-6">
           <a href="#" className="hover:text-brand-secondary transition-colors">会社概要</a>
           <a href="#" className="hover:text-brand-secondary transition-colors">採用情報</a>
           <a href="#" className="hover:text-brand-secondary transition-colors">プライバシーポリシー</a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
             {/* ロゴマークも丸くする */}
             <div className="w-10 h-10 bg-brand-secondary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-brand-secondary/30">
               K
             </div>
             <div>
                <h1 className="text-xl font-bold text-slate-800 leading-none tracking-tight">KAO LINK</h1>
                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Corporate Site</span>
             </div>
          </a>

          {/* Desktop Nav - 文字色は黒く、はっきりと */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold text-slate-600 hover:text-brand-secondary transition-colors relative py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button - 角丸を強く (rounded-full) */}
          <div className="hidden md:flex items-center gap-6">
             <div className="text-right hidden lg:block">
                <div className="flex items-center justify-end gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                   Hotline
                </div>
                <div className="text-lg font-bold text-slate-800 font-english leading-none">{COMPANY_INFO.phone}</div>
             </div>
             <a 
               href="#cta" 
               className="px-8 py-3 bg-brand-secondary text-white rounded-full text-sm font-bold shadow-lg shadow-brand-secondary/20 hover:bg-orange-600 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
             >
               <Mail size={18} /> お問い合わせ
             </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 bg-gray-50 rounded-full"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden">
             {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-bold text-slate-700 py-3 border-b border-gray-50 flex justify-between items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  <ChevronRight size={16} className="text-gray-300" />
                </a>
              ))}
              <div className="pt-4">
                 <a href="#cta" className="block w-full py-4 bg-brand-secondary text-white text-center rounded-full font-bold shadow-lg">お問い合わせ</a>
              </div>
          </div>
        )}
      </header>
    </>
  );
};