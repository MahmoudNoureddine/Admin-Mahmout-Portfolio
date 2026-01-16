import React from 'react';
import { SectionId } from '../types';
import { SectionHeader } from './SectionHeader';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-20 bg-background pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Connect()" subtitle="Initialize Communication Protocol" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <p className="text-gray-400 mb-8 font-mono text-sm leading-relaxed">
              Currently available for Junior IT Specialist or Security Analyst roles. I am focused on delivering high-reliability infrastructure with modern security standards.
            </p>
            
            <div className="space-y-6">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-neon-blue transition-colors group">
                <div className="p-3 bg-gray-900 border border-gray-700 rounded group-hover:border-neon-blue group-hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all">
                    <Github className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">/github/MahmoudNoureddine</span>
              </a>
              
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-neon-blue transition-colors group">
                 <div className="p-3 bg-gray-900 border border-gray-700 rounded group-hover:border-neon-blue group-hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all">
                    <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">/in/mahmoud-noureddine</span>
              </a>

              <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center space-x-4 text-gray-300 hover:text-neon-blue transition-colors group">
                 <div className="p-3 bg-gray-900 border border-gray-700 rounded group-hover:border-neon-blue group-hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all">
                    <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm uppercase">{SOCIAL_LINKS.email}</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#111] p-6 border border-gray-800 rounded hover:border-gray-700 transition-colors">
            <form 
              action="https://formspree.io/f/xnjjjqqo" 
              method="POST" 
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-neon-blue mb-1">&gt; Input.Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#0A0A0A] border border-gray-700 rounded p-2 text-white font-mono text-sm focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-neon-blue mb-1">&gt; Input.Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-[#0A0A0A] border border-gray-700 rounded p-2 text-white font-mono text-sm focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-neon-blue mb-1">&gt; Input.Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="System query..."
                  required
                  className="w-full bg-[#0A0A0A] border border-gray-700 rounded p-2 text-white font-mono text-sm focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 mt-4 rounded font-mono font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 bg-neon-blue text-background hover:bg-white hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]"
              >
                  <span>&gt; EXECUTE_SEND</span>
                  <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
