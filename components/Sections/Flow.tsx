import React from 'react';
import { FLOW_STEPS } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';

export const Flow: React.FC = () => {
  return (
    <section id="flow" className="py-32 bg-brand-primary text-white relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-secondary to-transparent"></div>
       </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Process</h2>
            <p className="text-slate-400 max-w-xl">
              お問い合わせから導入まで、専任担当者がワンストップでサポート。<br/>
              お客様の手を煩わせることはありません。
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {FLOW_STEPS.map((step, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150} className="relative group">
              <div className="mb-6 relative">
                 <div className="text-6xl font-black text-white/10 group-hover:text-brand-secondary/20 transition-colors font-english">
                    {step.step}
                 </div>
                 <div className="absolute bottom-2 left-2 w-3 h-3 bg-brand-secondary rounded-full"></div>
                 {index !== FLOW_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-full h-[1px] bg-white/10 -z-10 transform translate-x-1/2"></div>
                 )}
              </div>
               <h3 className="text-xl font-bold mb-4 group-hover:text-brand-secondary transition-colors">{step.title}</h3>
               <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-brand-secondary transition-colors">
                 {step.description}
               </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};