import React from 'react';
import { STATS } from '../../constants';

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800 border-t border-b border-gray-800">
          {STATS.map((stat, index) => (
            <div key={index} className="py-12 md:px-12 flex flex-col items-start justify-center pl-0">
              <span className="text-7xl lg:text-8xl font-black tracking-tighter text-white block mb-2 leading-none">
                {stat.number}{stat.suffix}
              </span>
              <span className="text-sm font-bold text-gray-500 tracking-widest uppercase mt-4">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};