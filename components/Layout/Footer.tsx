import React from 'react';
import { COMPANY_INFO, NAV_ITEMS } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Brand */}
          <div className="max-w-xs">
            <div className="text-2xl font-bold text-white mb-6 tracking-tight">KAO LINK</div>
            <p className="text-sm leading-relaxed text-slate-400">
              電気・ガス・通信のコスト最適化を通じて、<br/>
              企業の持続的な成長を支援する<br/>
              プロフェッショナル・エージェンシー。
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-bold mb-6">Menu</h4>
              <ul className="space-y-3 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-brand-secondary transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2025 {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};