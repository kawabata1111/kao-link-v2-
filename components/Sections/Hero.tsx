import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" // Architectural / Business
          alt="Modern Business Architecture"
          className="w-full h-full object-cover zoom-out opacity-90"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/70 to-brand-primary/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="text-white text-xs font-bold tracking-widest uppercase">Professional Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            成果を、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">確実につなぐ。</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
            コスト削減のプロフェッショナルとして、<br className="hidden md:block"/>
            貴社の利益最大化を最短距離で実現します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
            <a
              href="#business"
              className="px-8 py-4 bg-brand-secondary text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              サービスを見る
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#cta"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};