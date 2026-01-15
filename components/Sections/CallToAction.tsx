import React from 'react';
import { COMPANY_INFO } from '../../constants';
import { ScrollReveal } from '../UI/ScrollReveal';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="relative py-32 overflow-hidden bg-brand-primary">
       {/* Background */}
       <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/95 to-slate-900/90"></div>
       </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Area */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <div className="inline-block px-4 py-1 bg-brand-secondary/20 border border-brand-secondary/50 rounded-full mb-8">
                <span className="text-brand-secondary text-xs font-bold tracking-widest uppercase">Contact Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                未来への投資を、<br/>
                <span className="text-brand-secondary">今、始める。</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-10">
                現状のコスト診断は無料です。<br/>
                無駄なコストを利益に変える、最初のステップを踏み出しましょう。<br/>
                専任のコンサルタントが、あなたのビジネスを加速させます。
              </p>
              
              <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                 <Clock size={18} className="text-brand-secondary" />
                 <span>土日祝も対応可能 / 24時間受付中</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Cards Area */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Phone Card */}
            <ScrollReveal delay={100}>
              <a href={`tel:${COMPANY_INFO.phone}`} className="block group bg-white p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-secondary/20 border border-transparent hover:border-brand-secondary">
                <div className="flex justify-between items-start mb-4">
                   <div className="bg-brand-secondary/10 p-3 rounded-xl text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                      <Phone size={28} />
                   </div>
                   <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">代表直通・お急ぎの方</span>
                </div>
                <div className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-1">Call Us Now</div>
                <div className="text-4xl font-black text-brand-primary group-hover:text-brand-secondary transition-colors font-english tracking-tight">
                   {COMPANY_INFO.phone}
                </div>
              </a>
            </ScrollReveal>

            {/* Email Card */}
            <ScrollReveal delay={200}>
              <a href={`mailto:${COMPANY_INFO.email}`} className="block group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:bg-white/10">
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-3 rounded-xl text-white">
                         <Mail size={24} />
                      </div>
                      <div>
                         <div className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-1">Email Support</div>
                         <div className="text-xl font-bold text-white break-all">{COMPANY_INFO.email}</div>
                      </div>
                   </div>
                   <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                </div>
              </a>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};