import React from 'react';
import { STATS } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {STATS.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="py-8 md:px-12 flex flex-col items-center justify-center text-center group">
                <div className="text-5xl lg:text-7xl font-black text-white mb-2 font-english tracking-tighter group-hover:scale-110 transition-transform duration-300 origin-center">
                  <span className="text-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity absolute -ml-6">+</span>
                  {stat.number}
                  <span className="text-3xl text-brand-secondary ml-1">{stat.suffix}</span>
                </div>
                <p className="text-sm font-bold text-slate-400 tracking-[0.2em] uppercase">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};