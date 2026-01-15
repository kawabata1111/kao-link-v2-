import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center">
      {/* Background Image: Abstract / Network */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" // Abstract Network/Tech
          alt="Abstract Connection"
          className="w-full h-full object-cover zoom-out opacity-40 mix-blend-screen"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-slate-900 to-black opacity-80"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-20 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-brand-secondary/50 rounded-full bg-brand-secondary/10 backdrop-blur-sm animate-fade-in-up opacity-0 mx-auto md:mx-0" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></span>
            <span className="text-brand-secondary text-xs font-bold tracking-widest uppercase">Next Generation Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 tracking-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            成果を、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">確実につなぐ。</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl animate-fade-in-up opacity-0 mx-auto md:mx-0" style={{ animationDelay: '0.5s' }}>
            コスト削減のプロフェッショナルとして、<br className="hidden md:block"/>
            貴社の利益最大化を最短距離で実現します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 justify-center md:justify-start" style={{ animationDelay: '0.7s' }}>
            <a
              href="#business"
              className="px-8 py-4 bg-brand-secondary text-white font-bold rounded-lg shadow-lg shadow-brand-secondary/20 hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              サービスを見る
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#cta"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2 block text-center">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent mx-auto"></div>
      </div>
    </section>
  );
};