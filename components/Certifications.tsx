import React from 'react';
import { SectionId } from '../types';
import { SectionHeader } from './SectionHeader';
import { CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id={SectionId.CERTS} className="py-20 bg-[#0c0c0c] border-t border-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Status.Certificates" subtitle="Professional Credentials" />
        
        <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
                <div 
                    key={idx} 
                    className="flex flex-col md:flex-row items-center justify-between bg-[#0A0A0A] p-4 border border-gray-800 rounded hover:border-neon-blue/50 hover:shadow-[0_0_10px_rgba(0,255,255,0.1)] transition-all duration-300"
                >
                    <div className="flex items-center space-x-4 w-full md:w-auto">
                        <div className="p-2 bg-gray-900 rounded-full border border-gray-700 text-neon-blue">
                            <Award className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">{cert.name}</h3>
                            <p className="text-xs text-text-muted font-mono">{cert.issuer}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 pl-14 md:pl-0 space-x-6">
                         <span className="text-sm font-mono text-gray-400">
                            {cert.date && `[${cert.date}]`}
                         </span>
                         <span className={`px-3 py-1 text-xs font-bold font-mono uppercase rounded ${
                             cert.status === 'Completed' ? 'text-neon-green bg-neon-green/10 border border-neon-green/20' : 
                             cert.status === 'In Progress' ? 'text-yellow-500 bg-yellow-500/10 border border-yellow-500/20' :
                             'text-neon-blue bg-neon-blue/10 border border-neon-blue/20'
                         }`}>
                             {cert.status}
                         </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};