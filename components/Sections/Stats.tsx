import React from 'react';
import { STATS } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="relative -mt-20 z-20 px-6 lg:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 pointer-events-auto">
            {STATS.map((stat, index) => (
              <div key={index} className="p-8 md:p-10 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100 last:border-r-0 hover:bg-gray-50 transition-colors duration-300">
                <div className="mb-4 p-3 bg-brand-secondary/10 rounded-full text-brand-secondary">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2 font-english tracking-tighter">
                  {stat.number}
                  <span className="text-2xl text-brand-secondary ml-1">{stat.suffix}</span>
                </div>
                <p className="text-sm font-bold text-slate-500 tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};