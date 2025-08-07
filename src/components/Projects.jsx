// Projects.jsx
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Budget Tracker',
    description: 'A web-based app to track income, expenses, and generate financial reports.',
    demoLink: 'https://your-budget-tracker-demo.vercel.app',
    codeLink: 'https://github.com/yourusername/budget-tracker',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects.',
    demoLink: 'https://your-portfolio-site.vercel.app',
    codeLink: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Contact Form Backend',
    description: 'Node.js backend with MongoDB and Nodemailer for handling contact form submissions.',
    demoLink: '',
    codeLink: 'https://github.com/yourusername/contact-form-api',
  },
  {
    title: 'Weather App',
    description: 'A simple app that fetches real-time weather data based on user location.',
    demoLink: 'https://weather-demo-app.vercel.app',
    codeLink: 'https://github.com/yourusername/weather-app',
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
