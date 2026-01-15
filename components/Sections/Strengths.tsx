import React from 'react';
import { STRENGTHS } from '../../constants';

export const Strengths: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none">
            Why<br/>KAO LINK?
          </h2>
          <p className="text-gray-500 text-sm font-bold tracking-widest uppercase pb-2 border-b border-gray-300">
            選ばれる3つの理由
          </p>
        </div>

        <div className="flex flex-col gap-px bg-gray-200 border border-gray-200">
          {STRENGTHS.map((strength, index) => (
            <div key={index} className="bg-white p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 text-9xl font-black text-gray-100 leading-none select-none">
                0{index + 1}
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                  {strength.title}
                </h3>
                <p className="text-gray-600 leading-loose">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};