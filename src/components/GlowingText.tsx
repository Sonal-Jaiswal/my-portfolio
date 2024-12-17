import React from 'react';

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`animate-glow ${className}`}>
      {children}
    </span>
  );
};

export default GlowingText;