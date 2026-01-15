import React from 'react';
import { SERVICES } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="business" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
          <ScrollReveal>
             <span className="text-brand-secondary font-bold tracking-widest text-xs uppercase block mb-2">Our Business</span>
             <h2 className="text-4xl font-bold text-slate-800">事業内容</h2>
          </ScrollReveal>
          <div className="mt-4 md:mt-0 text-right">
             <a href="#" className="text-brand-secondary font-bold text-sm flex items-center gap-1 hover:underline justify-end">
                全サービス一覧 <ArrowRight size={16} />
             </a>
          </div>
        </div>

        {/* Card Grid (技術点: 画像比率とホバーエフェクト) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                {/* Image Area (アスペクト比 16:9) */}
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded text-brand-primary">
                      <service.icon size={20} />
                   </div>
                </div>
                
                {/* Text Area */}
                <div className="p-6 flex flex-col flex-grow">
                   <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-secondary transition-colors">
                      {service.title}
                   </h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                   </p>
                   <div className="border-t border-gray-100 pt-4 mt-auto">
                      <span className="text-xs font-bold text-slate-400 group-hover:text-brand-primary transition-colors flex items-center gap-2">
                         MORE DETAILS <div className="w-8 h-[1px] bg-slate-300 group-hover:bg-brand-primary transition-colors"></div>
                      </span>
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