import React from 'react';
import { SERVICES } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="business" className="py-32 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Our Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              エネルギーから通信まで。企業の固定費を最適化するための<br/>
              包括的なソリューションを提供します。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} animation="fade-up" delay={index * 150} className="h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col border border-gray-100 group">
                <div className="relative h-56 overflow-hidden">
                   <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg z-20 shadow-sm">
                    <service.icon size={24} className="text-brand-secondary" />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-brand-secondary tracking-widest uppercase mb-2">{service.subtitle}</span>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="pt-6 border-t border-gray-100 flex items-center text-brand-primary font-bold text-sm group-hover:text-brand-secondary transition-colors">
                    詳細を見る <ArrowRight size={16} className="ml-2" />
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