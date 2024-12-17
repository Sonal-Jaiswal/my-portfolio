import React from 'react';
import { Code2, Github, Linkedin, Twitter } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen transition-colors duration-200 dark:bg-black dark:text-white bg-white text-black font-mono">
      <nav className="fixed top-0 w-full backdrop-blur-sm border-b border-green-500/20 z-50 transition-colors duration-200 dark:bg-black/50 bg-white/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Code2 className="w-8 h-8 text-green-400" />
            <ThemeToggle />
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-green-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-green-400 transition-colors">Experience</a>
            <a href="#publications" className="hover:text-green-400 transition-colors">Publications</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer className="py-6 border-t border-green-500/20">
        <div className="container mx-auto px-6 flex justify-center gap-6">
          <a href="https://github.com/Sonal-Jaiswal" className="hover:text-green-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sonal-jaiswal1103/" className="hover:text-green-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/sonal__here" className="hover:text-green-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;