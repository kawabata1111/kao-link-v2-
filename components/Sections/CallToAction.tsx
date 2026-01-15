import React from 'react';
import { COMPANY_INFO } from '../../constants';

export const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-32 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          Ready to optimize?
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          無駄を省き、利益を生み出す。<br/>
          まずは無料診断から。
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href={`mailto:${COMPANY_INFO.email}`}
            className="px-10 py-5 bg-white text-black font-bold text-lg hover:bg-brand-primary hover:text-white transition-colors"
          >
            {COMPANY_INFO.email}
          </a>
           <a 
            href={`tel:${COMPANY_INFO.phone}`}
            className="px-10 py-5 border border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-colors"
          >
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};