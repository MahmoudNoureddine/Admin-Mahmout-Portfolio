import React from 'react';
import { TerminalText } from './TerminalText';
import { SectionId } from '../types';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-neon-blue/10">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,#00FFFF_1px,transparent_1px)] bg-[size:100%_4px]"></div>
      </div>
      
      <div className="z-10 text-center px-4 max-w-4xl w-full">
        <p className="text-neon-green font-mono mb-4 text-sm md:text-base tracking-widest uppercase">
          // Authentication Successful
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Admin: <br className="md:hidden" />
          <span className="text-neon-blue inline-block">
            <TerminalText text="Mahmoud Noureddien" startDelay={500} typingSpeed={80} />
          </span>
        </h1>

        <div className="h-24 md:h-16 flex items-center justify-center">
            <p className="text-text-muted text-lg md:text-xl font-mono max-w-2xl mx-auto border-l-2 border-neon-blue pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                <TerminalText 
                    text="IT Support Specialist & Junior Security Analyst | Optimizing IT Infrastructure with a Security-First Mindset." 
                    startDelay={2000} 
                    typingSpeed={30}
                    cursor={false}
                />
            </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 rounded font-mono uppercase tracking-wider text-sm w-full sm:w-auto"
          >
            &gt; View_Deployments
          </button>
          <button 
             onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-neon-blue text-background border border-neon-blue hover:bg-neon-blue/80 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300 rounded font-mono uppercase tracking-wider text-sm font-bold w-full sm:w-auto"
          >
            Init_Contact_Protocol()
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
         <ChevronDown className="text-text-muted w-6 h-6 opacity-50" />
      </div>
    </section>
  );
};