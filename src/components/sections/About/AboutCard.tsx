import React from 'react';
import { Mail } from 'lucide-react';

interface AboutCardProps {
  email: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ email }) => {
  return (
    <div className="border border-green-500/20 rounded-lg p-8 backdrop-blur-sm hover:bg-green-500/5 transition-colors">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <span className="text-4xl">👋🏻</span>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-300">
              Hi there! I'm <span className="text-green-400 font-semibold">Sonal Jaiswal</span>, 
              currently pursuing my B.Tech in Computer Science and Engineering at KIIT University, 
              Bhubaneshwar. I'm passionate about exploring new ideas, building innovative projects, 
              and advancing my skills in full-stack development, AI, and machine learning.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <a 
                href={`mailto:${email}`}
                className="hover:text-green-400 transition-colors"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;