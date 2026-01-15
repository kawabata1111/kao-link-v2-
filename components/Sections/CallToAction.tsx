import React from 'react';
import { COMPANY_INFO } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-32 bg-brand-primary relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-blue-900/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

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
           {/* Phone Card */}
           <ScrollReveal delay={100} className="h-full">
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors h-full flex flex-col items-center justify-center group cursor-pointer">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <p className="text-slate-400 text-sm mb-2 font-bold tracking-widest uppercase">Hotline</p>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-3xl font-bold text-white tracking-wide group-hover:text-brand-secondary transition-colors font-english">
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-slate-500 text-xs mt-2">代表直通・スピード対応</p>
             </div>
           </ScrollReveal>

           {/* Email Card */}
           <ScrollReveal delay={200} className="h-full">
             <div className="bg-white p-8 rounded-2xl border border-white/10 h-full flex flex-col items-center justify-center group cursor-pointer shadow-xl hover:translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <p className="text-slate-500 text-sm mb-2 font-bold tracking-widest uppercase">Email</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl font-bold text-brand-primary break-all hover:underline">
                  {COMPANY_INFO.email}
                </a>
                <div className="mt-4 flex items-center text-brand-secondary font-bold text-sm">
                   お問い合わせフォーム <ArrowRight size={16} className="ml-1" />
                </div>
             </div>
           </ScrollReveal>
        </div>
      </div>
    </section>
  );
};