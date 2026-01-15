import React from 'react';
import { SERVICES } from '../../constants';

export const Services: React.FC = () => {
  return (
    <section id="business" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-8">
            Services.
          </h2>
          <p className="text-gray-500 max-w-xl text-lg">
            我々の提供する価値はシンプルです。<br/>
            お客様の利益を最大化すること。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-200">
          {SERVICES.map((service) => (
            <div key={service.id} className="border-r border-b border-gray-200 p-8 lg:p-12 group hover:bg-gray-50 transition-colors duration-300">
              <div className="h-48 mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 bg-gray-100">
                 <img src={service.image} alt={service.title} className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex items-center text-xs font-bold tracking-widest uppercase text-black group-hover:text-brand-primary">
                Explore <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};