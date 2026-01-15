import React from 'react';
import { COMPANY_INFO } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-black tracking-tighter">KAO LINK</div>
        <p className="text-xs font-bold text-gray-400">
          &copy; 2025 {COMPANY_INFO.name}
        </p>
      </div>
    </footer>
  );
};