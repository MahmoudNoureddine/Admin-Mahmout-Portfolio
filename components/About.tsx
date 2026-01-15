import React from 'react';
import { SectionId } from '../types';
import { SectionHeader } from './SectionHeader';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader title="System.Profile" subtitle="Professional Philosophy" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12 w-full">
            <div className="bg-[#111] border border-gray-800 rounded-md overflow-hidden shadow-2xl hover:border-neon-blue/50 transition-colors duration-500">
              <div className="bg-[#1a1a1a] px-4 py-2 flex items-center space-x-2 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-500 font-mono">mahmoud@infrastructure: ~</span>
              </div>
              <div className="p-6 font-mono text-sm md:text-base leading-relaxed text-gray-300">
                <p className="mb-4">
                  <span className="text-neon-green">mahmoud@infra:~$</span> cat professional_profile.txt
                </p>
                <p className="mb-4 text-text-primary">
                  I am a Junior IT professional with hands-on experience in help desk support, system administration, and technical troubleshooting. My approach is simple: efficient IT operations must be built on a foundation of security.
                </p>
                <p className="mb-4 text-text-primary">
                  I am proficient in Windows Server, Linux, Microsoft 365, and AWS cloud technologies. I am passionate about making tangible changes in IT environments by implementing robust security monitoring and automating workflows to deliver excellent service and system reliability.
                </p>
                <p>
                    <span className="text-neon-green">mahmoud@infra:~$</span> <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};