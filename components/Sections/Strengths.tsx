import React from 'react';
import { STRENGTHS } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';
import { CostChart } from '../UI/CostChart';

export const Strengths: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Why Choose Us</h2>
              <p className="text-slate-500">選ばれる理由</p>
              <div className="w-12 h-1 bg-brand-secondary mx-auto rounded-full mt-4"></div>
            </ScrollReveal>
        </div>

        <div className="space-y-32">
          {STRENGTHS.map((strength, index) => (
            <div key={index} className={`flex flex-col ${strength.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              
              {/* Image/Visual Side */}
              <div className="w-full lg:w-1/2 relative">
                <ScrollReveal animation={strength.reverse ? 'slide-right' : 'slide-left'}>
                  {/* index 0 (本質的なコスト削減) の時だけグラフを表示 */}
                  {index === 0 ? (
                    <div className="bg-slate-50 p-8 rounded-3xl relative overflow-hidden border border-slate-100">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                       <CostChart />
                    </div>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                      <img 
                        src={strength.image} 
                        alt={strength.title} 
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
                    </div>
                  )}
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
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 size={20} className="text-brand-secondary flex-shrink-0" />
                        <span>プロフェッショナルによる徹底分析</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 size={20} className="text-brand-secondary flex-shrink-0" />
                        <span>無駄を省いた最短ルートの提案</span>
                    </li>
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