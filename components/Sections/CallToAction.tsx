import React from 'react';
import { COMPANY_INFO } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { Phone, Mail, ArrowRight, Clock } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-32 bg-brand-primary relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-black/80"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Optimize?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            まずは現状の診断から。<br />
            コスト削減のプロフェッショナルが、最適なプランをご提案します。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
           {/* Phone Card (泥臭く、信頼できるデザインへ) */}
           <ScrollReveal delay={100} className="h-full">
             <div className="bg-gradient-to-br from-white to-slate-50 border border-white/10 p-8 rounded-2xl hover:shadow-2xl hover:shadow-brand-secondary/20 transition-all duration-300 h-full flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-secondary"></div>
                
                <div className="flex items-center gap-2 mb-2 bg-brand-secondary/10 px-3 py-1 rounded-full">
                   <Clock size={14} className="text-brand-secondary" />
                   <span className="text-brand-secondary text-xs font-bold">お急ぎの方へ</span>
                </div>
                
                <p className="text-slate-500 text-sm font-bold mb-1">代表 澤井直通</p>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide group-hover:text-brand-secondary transition-colors font-english mb-2">
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-slate-400 text-xs">土日祝も対応可能です</p>
             </div>
           </ScrollReveal>

           {/* Email Card */}
           <ScrollReveal delay={200} className="h-full">
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl h-full flex flex-col items-center justify-center group cursor-pointer hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
                  <Mail size={24} />
                </div>
                <p className="text-slate-400 text-sm mb-2 font-bold tracking-widest uppercase">Email</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl font-bold text-white break-all hover:text-brand-secondary transition-colors">
                  {COMPANY_INFO.email}
                </a>
                <div className="mt-4 flex items-center text-slate-300 font-bold text-sm group-hover:text-white transition-colors">
                   お問い合わせフォーム <ArrowRight size={16} className="ml-1" />
                </div>
             </div>
           </ScrollReveal>
        </div>
      </div>
    </section>
  );
};