import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-neon-blue selection:text-black">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Articles />
        <Contact />
      </main>
      
      <footer className="py-8 bg-[#050505] border-t border-gray-900 text-center">
        <p className="text-gray-600 font-mono text-xs mb-2">
          &gt; SYSTEM STATUS: <span className="text-neon-green uppercase animate-pulse">Online</span>
        </p>
        <p className="text-gray-600 font-mono text-xs">
          © {new Date().getFullYear()} SECURE_INFRASTRUCTURE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}

export default App;