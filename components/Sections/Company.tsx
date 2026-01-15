import React from 'react';
import { COMPANY_INFO } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { MapPin, Phone, Mail, Building2, User, Calendar, Wallet } from 'lucide-react';

export const Company: React.FC = () => {
  return (
    <section id="company" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Title & Map */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-8">Company</h2>
              <div className="bg-brand-accent p-8 rounded-2xl border border-gray-100 mb-8">
                 <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-brand-secondary flex-shrink-0 mt-1" />
                    <div>
                       <h4 className="font-bold text-brand-primary mb-2">Head Office</h4>
                       <p className="text-slate-600 leading-relaxed text-sm">
                         {COMPANY_INFO.address}
                       </p>
                    </div>
                 </div>
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.897452636863!2d135.5947761763133!3d34.70775538283362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60011f99c27806bd%3A0xc392110185973b52!2z44CSNTcxLTAwNDQg5aSn6Ziq5bqc6ZaA55yf5biC5p2-55Sf55S677yR4oiS77yR77yW4oiS77yS77yR77yR!5e0!3m2!1sja!2sjp!4v1715736000000!5m2!1sja!2sjp" 
                   width="100%" 
                   height="200" 
                   style={{ border: 0, borderRadius: '8px' }} 
                   allowFullScreen 
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Info Table */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={200}>
              <div className="overflow-hidden">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  {[
                    { icon: Building2, label: '会社名', value: COMPANY_INFO.name },
                    { icon: User, label: '代表者', value: COMPANY_INFO.representative },
                    { icon: Calendar, label: '設立', value: COMPANY_INFO.establishment },
                    { icon: Wallet, label: '資本金', value: COMPANY_INFO.capital },
                    { icon: Users, label: '従業員数', value: COMPANY_INFO.employees },
                    { icon: Zap, label: '事業内容', value: COMPANY_INFO.mainBusiness },
                  ].map((item, i) => (
                    <div key={i} className="border-t border-gray-100 pt-6">
                      <dt className="text-sm font-bold text-slate-500 flex items-center gap-2 mb-2">
                        <item.icon size={16} className="text-brand-secondary" />
                        {item.label}
                      </dt>
                      <dd className="text-lg font-bold text-brand-primary">{item.value}</dd>
                    </div>
                  ))}
                   <div className="border-t border-gray-100 pt-6 sm:col-span-2">
                      <dt className="text-sm font-bold text-slate-500 flex items-center gap-2 mb-2">
                        <Phone size={16} className="text-brand-secondary" />
                        連絡先
                      </dt>
                      <dd className="flex flex-col sm:flex-row sm:items-center gap-6">
                         <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-brand-primary">{COMPANY_INFO.phone}</span>
                            <span className="text-xs bg-brand-primary text-white px-2 py-0.5 rounded">代表直通</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-brand-primary">{COMPANY_INFO.email}</span>
                         </div>
                      </dd>
                    </div>
                </dl>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};
import { Zap, Users } from 'lucide-react';