import React from 'react';
import { STRENGTHS } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export const Strengths: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Why Choose Us</h2>
              <div className="w-20 h-1 bg-brand-secondary mx-auto rounded-full"></div>
            </ScrollReveal>
        </div>

        <div className="space-y-32">
          {STRENGTHS.map((strength, index) => (
            <div key={index} className={`flex flex-col ${strength.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <ScrollReveal animation={strength.reverse ? 'slide-right' : 'slide-left'}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={strength.image} 
                      alt={strength.title} 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
                  </div>
                  {/* Decor */}
                  <div className={`absolute -bottom-6 ${strength.reverse ? '-left-6' : '-right-6'} w-24 h-24 bg-brand-secondary/10 rounded-full blur-2xl -z-10`}></div>
                </ScrollReveal>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <ScrollReveal animation={strength.reverse ? 'slide-left' : 'slide-right'} delay={200}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-english font-bold text-lg shadow-lg">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-primary">
                      {strength.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 text-lg leading-loose mb-8">
                    {strength.description}
                  </p>

                  <ul className="space-y-3">
                    {[1, 2, 3].map((i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                            <CheckCircle2 size={20} className="text-brand-secondary flex-shrink-0" />
                            <span>プロフェッショナルによる徹底した分析</span>
                        </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};