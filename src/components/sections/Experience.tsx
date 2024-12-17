import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          <div className="border border-green-500/20 rounded-lg p-6 hover:bg-green-500/5 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-green-400">Systems Developer</h3>
                <p className="text-gray-400">Google Developer Student Club KIIT</p>
              </div>
              <span className="text-sm text-gray-500">January 2024 – Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Leading technical initiatives and project development</li>
              <li>Collaborating with team members on innovative solutions</li>
              <li>Mentoring junior developers and conducting workshops</li>
            </ul>
          </div>

          <div className="border border-green-500/20 rounded-lg p-6 hover:bg-green-500/5 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-green-400">Web Development Tech Lead</h3>
                <p className="text-gray-400">GeeksforGeeks KIIT Chapter</p>
              </div>
              <span className="text-sm text-gray-500">2023 – Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Leading web development initiatives</li>
              <li>Managing technical projects and team coordination</li>
              <li>Implementing best practices and coding standards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;