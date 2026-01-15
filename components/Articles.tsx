import React from 'react';
import { SectionId } from '../types';
import { SectionHeader } from './SectionHeader';
import { ARTICLES } from '../constants';
import { ExternalLink, BookOpen, Calendar } from 'lucide-react';

export const Articles: React.FC = () => {
  return (
    <section id={SectionId.ARTICLES} className="py-20 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Published.Thoughts" subtitle="Technical Writing & Research" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article, idx) => (
            <a 
              key={idx} 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-[#111] border border-gray-800 p-6 rounded-lg hover:border-neon-blue transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-gray-900 border border-gray-700 rounded text-neon-blue group-hover:bg-neon-blue group-hover:text-background transition-colors duration-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex items-center text-gray-500 font-mono text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{article.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono uppercase border border-gray-700 px-2 py-0.5 rounded text-gray-500 group-hover:border-neon-blue/30 group-hover:text-neon-blue/70">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-neon-blue font-mono text-xs font-bold uppercase tracking-widest mt-auto">
                <span>Read on Medium</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-neon-blue transition-all duration-500 group-hover:w-full rounded-b-lg"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};