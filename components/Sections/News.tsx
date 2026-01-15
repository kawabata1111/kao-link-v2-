import React from 'react';
import { NEWS_ITEMS } from '../../constants';

export const News: React.FC = () => {
  return (
    <section className="py-32 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter">News.</h2>
          <a href="#" className="text-sm font-bold border-b border-black pb-1 hover:text-brand-primary hover:border-brand-primary transition-colors">
            VIEW ALL
          </a>
        </div>

        <div className="flex flex-col">
          {NEWS_ITEMS.map((item, index) => (
            <div key={index} className="group py-8 border-t border-gray-200 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-sm font-bold text-gray-500 w-32">{item.date}</span>
              <span className="text-xs font-bold bg-black text-white px-2 py-1 uppercase">{item.category}</span>
              <h3 className="text-xl md:text-2xl font-bold text-black flex-grow group-hover:underline decoration-1 underline-offset-4">
                {item.title}
              </h3>
              <span className="hidden md:block text-2xl font-light text-gray-300 group-hover:text-black transition-colors">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};