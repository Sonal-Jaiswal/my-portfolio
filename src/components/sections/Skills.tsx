import React from 'react';

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold mb-2 text-green-400">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skillsData = {
    languages: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL'],
    webDev: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
    cloud: ['AWS', 'Azure', 'Google Cloud Platform (GCP)'],
    tools: ['VS Code', 'Git', 'GitHub', 'Selenium', 'Pandas', 'Android Studio'],
    coursework: ['Data Structures', 'Operating Systems', 'Object-Oriented Programming', 'DBMS'],
    methodologies: ['Agile (Scrum, Kanban, SAFe)', 'Continuous Delivery/Deployment pipelines']
  };

  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Skills & Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Programming Languages" skills={skillsData.languages} />
          <SkillCategory title="Web Development" skills={skillsData.webDev} />
          <SkillCategory title="Cloud Technologies" skills={skillsData.cloud} />
          <SkillCategory title="Developer Tools" skills={skillsData.tools} />
          <SkillCategory title="Core Coursework" skills={skillsData.coursework} />
          <SkillCategory title="Methodologies & Frameworks" skills={skillsData.methodologies} />
        </div>
      </div>
    </section>
  );
};

export default Skills;