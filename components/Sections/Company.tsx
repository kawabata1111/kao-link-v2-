import React from 'react';
import { COMPANY_INFO } from '../../constants';

export const Company: React.FC = () => {
  return (
    <section id="company" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl md:text-7xl font-black text-black mb-16 tracking-tighter">
          Company.
        </h2>

        <div className="border-t-2 border-black">
          {[
            ['会社名', COMPANY_INFO.name],
            ['代表者', COMPANY_INFO.representative],
            ['設立', COMPANY_INFO.establishment],
            ['所在地', COMPANY_INFO.address],
          ].map(([label, value], i) => (
            <div key={i} className="flex flex-col md:flex-row py-8 border-b border-gray-200">
              <dt className="w-full md:w-1/4 font-bold text-gray-500 text-sm uppercase tracking-widest mb-2 md:mb-0">
                {label}
              </dt>
              <dd className="w-full md:w-3/4 text-xl md:text-2xl font-bold text-black">
                {value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};