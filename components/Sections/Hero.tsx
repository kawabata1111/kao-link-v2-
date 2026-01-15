import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col gap-12">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black leading-[0.9]">
          成果を、<br/>
          繋ぐ。
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-gray-200 pt-8">
          <p className="text-sm md:text-base font-medium text-gray-500 max-w-md leading-relaxed">
            株式会社KAO LINKは、電気・ガス・通信の最適化を通じて、<br className="hidden md:block"/>
            企業のコスト削減と利益最大化を実現する営業代行会社です。<br className="hidden md:block"/>
            無駄を削ぎ落とし、本質的な価値のみを提供します。
          </p>
          
          <a
            href="#cta"
            className="inline-block px-8 py-4 bg-black text-white font-bold hover:bg-brand-primary transition-colors text-sm"
          >
            ご相談はこちら
          </a>
        </div>
      </div>
    </section>
  );
};