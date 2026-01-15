import React from 'react';
import { SERVICES } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="business" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-20 right-[-10%] text-[20rem] font-black text-slate-200/50 leading-none pointer-events-none select-none z-0">
        WORK
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-slate-200 pb-8">
            <div>
              <span className="text-brand-secondary font-bold tracking-widest text-sm uppercase block mb-4">Core Competence</span>
              <h2 className="text-4xl md:text-5xl font-black text-brand-primary leading-tight">
                事業内容
              </h2>
            </div>
            <p className="text-slate-500 max-w-md mt-6 md:mt-0 text-right leading-relaxed font-medium">
              独自のデータベースと交渉力で、<br />
              企業の固定費削減をワンストップで実現します。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100} className="group">
              <div className="bg-white h-full p-8 md:p-10 border-t-4 border-transparent hover:border-brand-secondary shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Number */}
                <div className="absolute top-4 right-6 text-6xl font-black text-slate-100 group-hover:text-brand-secondary/10 transition-colors">
                  0{index + 1}
                </div>
                
                <div className="mb-8 relative z-10">
                   <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 mb-6">
                      <service.icon size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-brand-primary mb-2">{service.title}</h3>
                   <p className="text-xs font-bold text-brand-secondary tracking-widest uppercase">{service.subtitle}</p>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 relative z-10 min-h-[5rem]">
                  {service.description}
                </p>

                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-brand-primary transition-colors">
                  VIEW MORE <ArrowUpRight size={18} className="ml-2" />
                </div>
                
                {/* Hover Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary to-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};