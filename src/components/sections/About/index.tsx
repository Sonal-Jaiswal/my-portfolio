import React from 'react';
import AboutCard from './AboutCard';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <AboutCard email="22051285@kiit.ac.in" />
      </div>
    </section>
  );
};

export default About;