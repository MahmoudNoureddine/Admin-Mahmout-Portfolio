import React from 'react';
import { SectionId } from '../types';
import { SectionHeader } from './SectionHeader';
import { EXPERIENCE } from '../constants';
import { Briefcase, MapPin, Calendar, Terminal } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-20 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Operation.History" subtitle="Professional Experience" />
        
        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-800"></div>
              
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                {/* Left Side: Metadata */}
                <div className="md:col-span-4 mb-4 md:mb-0">
                  <div className="flex items-center text-neon-blue mb-2 font-mono text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{exp.role}</h3>
                  <p className="text-neon-green font-mono text-sm flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {exp.company}
                  </p>
                  <p className="text-gray-500 font-mono text-xs flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-2" />
                    {exp.location}
                  </p>
                </div>
                
                {/* Right Side: Impact */}
                <div className="md:col-span-8 bg-[#111] p-6 border border-gray-800 rounded hover:border-neon-blue/30 transition-all duration-300">
                  <div className="flex items-center text-gray-400 mb-4 font-mono text-xs italic">
                     <Terminal className="w-4 h-4 mr-2" />
                     <span>// Key Impact and Responsibilities</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.impact.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start text-gray-300 text-sm font-mono leading-relaxed">
                        <span className="text-neon-blue mr-3 mt-1 text-xs">&gt;</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};