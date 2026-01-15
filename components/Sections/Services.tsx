import React from 'react';
import { SERVICES } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="business" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <ScrollReveal>
             <h2 className="text-4xl font-black text-slate-900 mb-6">事業内容</h2>
             <p className="text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
               私たちは、単なるコスト削減業者ではありません。<br/>
               お客様のビジネス環境を深く理解し、最適なインフラ環境を構築します。
             </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className="group bg-white rounded-[32px] overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100">
                {/* Image Area (Round Top) */}
                <div className="relative h-60 overflow-hidden m-2 rounded-[28px]">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                   
                   {/* Icon Floating */}
                   <div className="absolute bottom-4 left-4 bg-white p-3 rounded-2xl shadow-lg text-brand-secondary">
                      <service.icon size={24} />
                   </div>
                </div>
                
                {/* Text Area */}
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold bg-gray-100 text-slate-500 px-2 py-1 rounded-full uppercase tracking-wider">{service.subtitle}</span>
                   </div>
                   <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-brand-secondary transition-colors">
                      {service.title}
                   </h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                   </p>
                   
                   <ul className="space-y-2 mb-8">
                      <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                         <CheckCircle2 size={14} className="text-brand-secondary" /> 初期費用ゼロ
                      </li>
                      <li className="flex items-center gap-2 text-xs font-bold text-slate-500">
                         <CheckCircle2 size={14} className="text-brand-secondary" /> 全国対応
                      </li>
                   </ul>

                   <div className="mt-auto">
                      <button className="w-full py-3 rounded-xl border-2 border-gray-100 text-slate-700 font-bold text-sm hover:border-brand-secondary hover:text-brand-secondary hover:bg-orange-50 transition-all flex items-center justify-center gap-2">
                         詳細を見る <ArrowRight size={16} />
                      </button>
                   </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};