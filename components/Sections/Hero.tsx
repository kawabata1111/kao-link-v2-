import React from 'react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { NEWS_ITEMS } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <>
      {/* 
        Hero Section: 左右分割レイアウト (Split Layout)
        背景は「白」。文字は「黒」。
        画像は「角丸」で配置。これがLLCOMスタイル。
      */}
      <section id="home" className="relative w-full bg-white overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Decorative Background Elements (Soft Blobs) */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-orange-50/50 rounded-bl-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gray-50 rounded-tr-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 relative z-10">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm mb-8">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">Strategic Partner</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.15] mb-8 tracking-tight">
                  コスト構造に、<br />
                  <span className="relative inline-block text-brand-secondary">
                    革新
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-secondary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                  と
                  <span className="relative inline-block text-brand-secondary">
                    利益
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-secondary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                  を。
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium max-w-lg">
                  エネルギーから通信まで、企業の固定費を最適化。<br />
                  KAO LINKは、確実な数値根拠に基づくコスト削減で、<br />
                  貴社の持続的な成長を支援します。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#business"
                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full shadow-xl hover:bg-brand-secondary hover:shadow-brand-secondary/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    事業内容を見る
                    <span className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                      <ArrowRight size={16} />
                    </span>
                  </a>
                  <a
                    href="#company"
                    className="px-8 py-4 bg-white border border-gray-200 text-slate-700 font-bold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center shadow-sm"
                  >
                    会社概要
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image (Rounded & Floating) */}
            <div className="w-full lg:w-1/2 relative">
               <ScrollReveal delay={200}>
                  <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                     <img 
                       src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
                       alt="Bright Office" 
                       className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                     />
                     {/* Image Overlay Content */}
                     <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-white/50 hidden md:block">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary">
                              <Play size={20} fill="currentColor" />
                           </div>
                           <div>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Our Mission</p>
                              <p className="text-sm font-bold text-slate-800">「つながる」価値を最大化する</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  {/* Floating Elements (Decor) */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-secondary/10 rounded-full blur-2xl z-0"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl z-0"></div>
               </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* News Ticker (Independent Section) */}
      <div className="bg-white border-y border-gray-100 relative z-20">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center py-5 gap-6">
               <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-brand-secondary text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">News</span>
               </div>
               <div className="flex-grow flex flex-col md:flex-row gap-4 text-sm text-slate-600">
                  <span className="font-english text-slate-400 font-bold">{NEWS_ITEMS[0].date}</span>
                  <a href="#" className="font-bold hover:text-brand-secondary transition-colors line-clamp-1">
                     {NEWS_ITEMS[0].title}
                  </a>
               </div>
               <a href="#" className="hidden md:flex items-center text-xs font-bold text-slate-400 hover:text-brand-secondary transition-colors gap-1">
                  一覧を見る <ChevronRight size={14} />
               </a>
            </div>
         </div>
      </div>
    </>
  );
};