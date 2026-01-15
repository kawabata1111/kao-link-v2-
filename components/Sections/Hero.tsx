import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Phone, Mail, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center bg-slate-900">
      {/* Background Parallax */}
      <div ref={heroRef} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-brand-primary/80"></div>
      </div>

      {/* Dynamic Shapes (LLCOM-like dynamic background) */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-secondary/20 to-transparent transform skew-x-12 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-brand-primary/40 transform -skew-x-12 -translate-x-1/4 blur-3xl"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-20">
        <div className="border-l-4 border-brand-secondary pl-8 md:pl-12 py-2">
          <div className="flex items-center gap-3 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
             <span className="h-[1px] w-12 bg-brand-secondary"></span>
             <span className="text-brand-secondary font-bold tracking-[0.3em] text-sm uppercase">Professional Agency</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            COST<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">REDUCTION.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
            企業の利益構造を、<br />
            <span className="text-white font-bold border-b border-brand-secondary">根底から再構築</span>する。
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-6 pl-0 md:pl-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <a href="#business" className="group relative px-10 py-5 bg-white text-brand-primary font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
            <div className="absolute inset-0 w-full h-full bg-brand-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            <span className="relative group-hover:text-white flex items-center gap-2 transition-colors">
              Our Service <ArrowRight size={20} />
            </span>
          </a>
          <a href="#cta" className="px-10 py-5 border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 right-0 p-12 hidden md:block animate-pulse">
         <div className="flex items-center gap-4 -rotate-90 origin-right translate-x-8">
            <span className="text-white/50 text-xs tracking-[0.3em] uppercase">Scroll Down</span>
            <div className="w-16 h-[1px] bg-white/30"></div>
         </div>
      </div>
    </section>
  );
};