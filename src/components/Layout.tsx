import React from 'react';
import { Code2, Github, Linkedin, Twitter } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen transition-colors duration-200 dark:bg-black dark:text-white bg-white text-black font-mono">
      <nav className="fixed top-0 w-full backdrop-blur-sm border-b border-green-500/20 z-50 transition-colors duration-200 dark:bg-black/50 bg-white/50">
        <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
          {/* Logo and Theme Toggle */}
          <div className="flex items-center gap-4">
            <Code2 className="w-7 h-7 text-green-400" />
            <ThemeToggle />
          </div>
          {/* Navigation Links */}
          <div className="flex gap-6 mt-2 lg:mt-0 flex-wrap justify-center lg:flex-nowrap">
            <a href="#about" className="hover:text-green-400 transition-colors text-sm lg:text-base">About</a>
            <a href="#skills" className="hover:text-green-400 transition-colors text-sm lg:text-base">Skills</a>
            <a href="#experience" className="hover:text-green-400 transition-colors text-sm lg:text-base">Experience</a>
            <a href="#publications" className="hover:text-green-400 transition-colors text-sm lg:text-base">Publications</a>
            <a href="#contact" className="hover:text-green-400 transition-colors text-sm lg:text-base">Contact</a>
          </div>
        </div>
      </nav>
      <main className="pt-20 px-4 sm:px-6">{children}</main>
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
    //   </footer>
    // </div>
  );
};

export default Layout;
