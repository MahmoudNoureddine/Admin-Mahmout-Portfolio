import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X, ShieldCheck } from 'lucide-react';

export const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: SectionId.HOME, label: './home' },
    { id: SectionId.ABOUT, label: './about' },
    { id: SectionId.EXPERIENCE, label: './experience' },
    { id: SectionId.SKILLS, label: './skills' },
    { id: SectionId.PROJECTS, label: './projects' },
    { id: SectionId.ARTICLES, label: './articles' },
    { id: SectionId.CONTACT, label: './contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-neon-blue/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection(SectionId.HOME)}>
            <ShieldCheck className="text-neon-blue w-6 h-6 group-hover:text-neon-green transition-colors duration-300" />
            <span className="font-bold text-xl tracking-tighter text-white group-hover:text-neon-blue transition-colors duration-300 uppercase">
              Secure.Ops
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-text-muted hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-glow font-mono"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-neon-blue p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-neon-blue/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-text-muted hover:text-neon-blue block w-full text-left px-3 py-2 rounded-md text-base font-medium font-mono"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};