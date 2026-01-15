import React from 'react';
import { NEWS_ITEMS } from '../../constants';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../UI/ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <>
      <section id="home" className="relative h-[85vh] min-h-[600px] w-full flex items-center section-diagonal bg-slate-900">
        {/* Parallax Background Image (技術点: background-attachment: fixed) */}
        <div 
          className="absolute inset-0 bg-fixed-parallax opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-white">
          <div className="max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-3 py-1 bg-brand-secondary text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">
              Corporate Agency
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 text-shadow-lg">
              そのコストに、<br />
              <span className="text-brand-secondary">最適解</span>を。
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-medium border-l-4 border-white/30 pl-6">
              電気・ガス・通信のコスト削減で、<br />
              企業の利益構造を改革する戦略的パートナー。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#business"
                className="px-10 py-4 bg-white text-slate-900 font-bold rounded shadow-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
              >
                事業内容を見る <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#company"
                className="px-10 py-4 border border-white text-white font-bold rounded hover:bg-white/10 transition-all flex items-center justify-center"
              >
                会社概要
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News Ticker (技術点: Hero直下のニュース配置) */}
      <div className="bg-slate-50 border-b border-gray-200">
         <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-brand-secondary font-bold text-sm uppercase tracking-wider">
               <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></span>
               Latest News
            </div>
            <div className="flex-grow overflow-hidden">
               {/* 簡易的な1件表示。本来はスライダーにするが、まずは最新1件を確実に表示 */}
               <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
                  <span className="text-slate-500 font-english font-medium">{NEWS_ITEMS[0].date}</span>
                  <a href="#" className="font-bold text-slate-700 hover:text-brand-primary hover:underline truncate">
                     {NEWS_ITEMS[0].title}
                  </a>
               </div>
            </div>
            <a href="#" className="hidden md:flex items-center text-xs font-bold text-slate-500 hover:text-brand-secondary transition-colors">
               記事一覧 <ChevronRight size={14} />
            </a>
         </div>
      </div>
    </>
  );
};