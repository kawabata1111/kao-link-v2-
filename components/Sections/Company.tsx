import React from 'react';
import { COMPANY_INFO } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';

export const Company: React.FC = () => {
  return (
    <section id="company" className="py-24 bg-gray-50 section-diagonal-reverse pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-brand-secondary font-bold tracking-widest text-xs uppercase block mb-2">Corporate Profile</span>
            <h2 className="text-4xl font-bold text-slate-800">会社概要</h2>
          </div>
        </ScrollReveal>

        <div className="bg-white rounded-xl shadow-card overflow-hidden max-w-4xl mx-auto">
          <dl className="divide-y divide-gray-100">
             {[
               { label: '会社名', value: COMPANY_INFO.name },
               { label: '代表者', value: COMPANY_INFO.representative },
               { label: '設立', value: COMPANY_INFO.establishment },
               { label: '資本金', value: COMPANY_INFO.capital },
               { label: '所在地', value: `〒571-0044 ${COMPANY_INFO.address}` },
               { label: '従業員数', value: COMPANY_INFO.employees },
               { label: '事業内容', value: COMPANY_INFO.mainBusiness },
             ].map((row, i) => (
               <div key={i} className="flex flex-col md:flex-row hover:bg-gray-50/50 transition-colors">
                 <dt className="w-full md:w-48 px-6 py-4 bg-gray-50/50 text-sm font-bold text-slate-500 flex items-center">
                   {row.label}
                 </dt>
                 <dd className="flex-1 px-6 py-4 text-slate-800 font-medium">
                   {row.value}
                 </dd>
               </div>
             ))}
          </dl>
        </div>
      </div>
    </section>
  );
};