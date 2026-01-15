import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, TrendingDown } from 'lucide-react';
import { ScrollReveal } from '../UI/ScrollReveal';

export const CostChart: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 簡易的な表示トリガー（実際はScrollReveal等と連動させるのがベストだが、今回はマウント後のアニメーションとして実装）
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-sm mx-auto transform transition-all duration-500 hover:scale-105">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-bold text-gray-700 flex items-center gap-2">
          <BarChart3 size={20} className="text-brand-secondary" />
          コスト削減イメージ
        </h4>
        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <TrendingDown size={14} /> -30%
        </span>
      </div>

      <div className="flex items-end justify-center gap-8 h-48 relative">
        {/* Before */}
        <div className="flex flex-col items-center gap-2 w-20 group">
          <span className="text-xs font-bold text-gray-400">導入前</span>
          <div className="w-full bg-gray-200 rounded-t-lg relative overflow-hidden transition-all duration-1000" style={{ height: isVisible ? '100%' : '0%' }}>
             <div className="absolute top-0 w-full text-center text-xs font-bold text-gray-500 py-1">100%</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="mb-12 text-gray-300">
           <ArrowRight size={24} />
        </div>

        {/* After */}
        <div className="flex flex-col items-center gap-2 w-20 group">
          <span className="text-xs font-bold text-brand-secondary">導入後</span>
          <div className="w-full bg-brand-secondary/90 rounded-t-lg relative overflow-hidden transition-all duration-1000 delay-300 shadow-lg shadow-brand-secondary/30" style={{ height: isVisible ? '70%' : '0%' }}>
             <div className="absolute top-0 w-full text-center text-xs font-bold text-white py-1">70%</div>
             {/* Shine effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-center text-gray-400 mt-4 border-t border-gray-100 pt-3">
        ※お客様の使用状況により変動します
      </p>
    </div>
  );
};