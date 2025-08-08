import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: "Brand you creative agency, Dublin",
    role: "Internship",
    startDate: "July, 2024",
    endDate: "January 2025",
    experience: [
      "Edited and updated existing WordPress websites for clients to improve performance",
      "Resolved password issues on CPanel",
      "Contributed to layout updates, content formatting, and visual styling on live websites",
      "Created user-friendly interfaces based on client specifications",
      "updated and installed plugins to enhance website functionality"
    ]
  },
  {
    company: "Treacy's Carpet and Furniture",
    role: "Data Entry",
    startDate: "September, 2024",
    endDate: "February 2025",
    experience: [
        "Accurately entered and organized large datasets for inventory and customer records using Excel and Google Sheets",
        "Used FileZilla for FTP transfers",
       "Ensured confidentiality and data integrity when uploading CSVs through the website backend with Filezilla",
       "Uploaded product data in CSV format through the company's website backend, ensuring formatting and data integrity",
       "Collaborated with web team to verify that product uploads and pricing updates were reflected on the live site",
       "Performed regular data validation and cleanup to maintain consistency and avoid duplicates",

    ]
  },
  {
    company: "Personal Projects",
    role: "Freestyle",
    startDate: "July, 2024",
    endDate: "Present",
    experience: [
      "Designed and deployed responsive websites using HTML, CSS, JavaScript, and React.js",
      "Fetched data from backend APIs and displayed it in the frontend using React and useEffect",
      "Connected frontend to backend using REST API to fetch and display data",
      "Used Axios/fetch to retrieve product data from Node.js + Express API and displayed it dynamically",
      "Connected frontend forms to backend using Node.js and handled form submissions securely",
      "Built personal portfolio website to showcase web projects and skills",
      "Implemented clean UI with Tailwind CSS and handled form inputs and components in React",
      "Deployed projects using GitHub Pages"
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id='experience'>
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-card ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
          >
            <h3 className="role">{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="period">{exp.startDate} - {exp.endDate}</p>
            <ul className="exp-points">
              {exp.experience.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
