import React from 'react';
import TypewriterEffect from '../TypewriterEffect';
import GlowingText from '../GlowingText';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,136,0.1)_0%,_rgba(0,0,0,0)_70%)]" />
      <div className="text-center space-y-6 relative">
        <h1 className="text-6xl font-bold mb-4">
          <GlowingText className="text-green-400">Sonal Jaiswal</GlowingText>
        </h1>
        <div className="text-xl text-gray-400">
          <TypewriterEffect text="Systems Developer. Web Developer . Innovator." />
        </div>
        {/* <div className="flex gap-4 justify-center mt-8">
          <a 
            href="https://drive.google.com/file/d/1cTiXPM6Ce18q6AtcEu_PTrTubzMeZdZY/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 border border-green-500 rounded-full hover:bg-green-500/10 transition-colors"
          >
            View Resume
          </a>
          <a 
            href="#projects" 
            className="px-6 py-2 bg-green-500/10 border border-green-500 rounded-full hover:bg-green-500/20 transition-colors"
          >
            View Work
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;