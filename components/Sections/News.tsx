import React from 'react';
import { NEWS_ITEMS } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <section className="py-24 bg-brand-accent">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
             <h2 className="text-2xl font-bold text-brand-primary">News</h2>
             <a href="#" className="text-sm font-bold text-brand-secondary hover:underline flex items-center gap-1">
               記事一覧 <ArrowUpRight size={16} />
             </a>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {NEWS_ITEMS.map((item, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <a href="#" className="block group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-secondary/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-4 min-w-[180px]">
                    <span className="text-slate-400 font-english text-sm">{item.date}</span>
                    <span className="px-2.5 py-1 bg-brand-primary/5 text-brand-primary text-xs font-bold rounded tracking-wider">{item.category}</span>
                  </div>
                  <h3 className="flex-grow font-bold text-slate-800 group-hover:text-brand-secondary transition-colors">
                    {item.title}
                  </h3>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};