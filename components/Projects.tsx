import React from 'react';
import { SectionId } from '../types';
import { SectionHeader } from './SectionHeader';
import { PROJECTS } from '../constants';
import { Lock, CheckCircle } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Engagements.Log" subtitle="Labs & Projects" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="relative group bg-[#111] border-l-4 border-l-gray-700 border-y border-r border-gray-800 p-6 rounded-r hover:border-l-neon-blue hover:border-neon-blue/30 transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                   <span className="text-xs font-mono text-neon-blue mb-1 block">ID: {project.id}</span>
                   <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">{project.title}</h3>
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded text-xs font-bold font-mono ${
                    project.status === 'SUCCESS' || project.status === 'COMPLETE' 
                    ? 'bg-neon-green/10 text-neon-green border border-neon-green/30' 
                    : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/30'
                }`}>
                    <CheckCircle className="w-3 h-3" />
                    <span>{project.status}</span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-sm font-mono text-gray-500 mb-2">// {project.category}</p>
                <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-gray-800 pl-4 py-1">
                  {project.summary}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              {/* Link Button */}
              {project.link && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono text-neon-blue hover:text-white transition-colors group/link"
                  >
                    <span className="mr-2">&gt;</span>
                    git view_source
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              )}

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Lock className="w-4 h-4 text-neon-blue/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
