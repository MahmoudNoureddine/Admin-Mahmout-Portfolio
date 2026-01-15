import React from 'react';
import { SectionId } from '../types';
import { SectionHeader } from './SectionHeader';
import { SKILL_CATEGORIES } from '../constants';
import { Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-20 bg-[#0c0c0c] border-y border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Capabilities.json" subtitle="Technical Arsenal" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={idx}
              className="bg-[#0A0A0A] p-6 rounded border border-gray-800 hover:border-neon-blue transition-all duration-300 group hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
            >
              <div className="flex items-center mb-6">
                <Cpu className="text-neon-blue w-6 h-6 mr-3 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white font-mono">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 text-xs font-mono border border-gray-700 rounded text-text-muted group-hover:border-neon-blue/40 group-hover:text-neon-blue transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};