import React from 'react';
import { FLOW_STEPS } from '../../constants';

export const Flow: React.FC = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter">Process.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-gray-800">
          {FLOW_STEPS.map((step, index) => (
            <div key={index} className="py-8 md:pr-8 border-b md:border-b-0 md:border-r border-gray-800 last:border-r-0 relative">
               <span className="text-sm font-bold text-gray-500 mb-4 block">STEP 0{index + 1}</span>
               <h3 className="text-xl font-bold mb-4">{step.title}</h3>
               <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};