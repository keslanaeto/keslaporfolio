import React from 'react';
import './Skills.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Tailwind CSS',
  'Python',
  'Django',
  'Git',
  'Github',
  'Google Sheets',
  'Excel',
  'Notion',
  'FileZilla',
   'English language proficency',
  'AWS (Learning)',
];

function Skills() {
  return (
    <section className="skills-section" id="skills" >
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;


