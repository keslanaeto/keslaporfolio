import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Fashion Website',
    description: 'A clean and elegant fashion website featuring curated collections and a responsive layout, built with React.',
    demoLink: 'https://ellatrends.vercel.app/',
    codeLink: 'https://github.com/keslanaeto/trends',
    skills: ["React.js", "Express.js", "MongoDB", "Node.js"],
  },

  // {
  //   title: 'Budget Tracker',
  //   description: 'A web-based app to track income, expenses, and generate financial reports.',
  //   demoLink: 'https://your-budget-tracker-demo.vercel.app',
  //   codeLink: 'https://github.com/yourusername/budget-tracker',
  // },

  {
    title: 'Brown furnitures',
    description: 'A modern furniture website showcasing elegant brown-themed furniture collections. Built with React for a smooth, responsive user experience.',
    demoLink: 'https://brown-furnitures.vercel.app/',
    codeLink: 'https://github.com/keslanaeto/Brown-furnitures',
    skills: ["HTML", " CSS",  "Javasccript"]

  },

  // {
  //   title: 'Contact Form Backend',
  //   description: 'Node.js backend with MongoDB and Nodemailer for handling contact form submissions.',
  //   demoLink: '',
  //   codeLink: 'https://github.com/yourusername/contact-form-api',
  // },
  {
    title: ' Foodolis ',
    description: 'A visually engaging food ordering website built with React and styled using Tailwind CSS. It features.',
    demoLink: 'https://foodolis.vercel.app/',
    codeLink: 'https://github.com/keslanaeto/myfoods',
    skills: ["HTML", "TailwindCss", "React.JS"],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id='projects'>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">Demo</a>
              )}
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
