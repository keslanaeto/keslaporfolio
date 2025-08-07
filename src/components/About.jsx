import React from 'react';
import './About.css';
import { FiPhoneCall } from "react-icons/fi";


function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>

          <h3>Hello, I am Kesla Chime Naetochukwu</h3>
            <p>A passionate and detail-oriented <strong>Full-Stack Web Developer</strong> focused on 
            building modern, responsive, and scalable web applications.
           </p>

          <p>
            I specialize in <strong>React.js, JavaScript, HTML, and CSS</strong> on the frontend, and I build robust backend systems using
            <strong> Node.js, Express, and MongoDB</strong>. I ensure smooth API integrations, secure data handling, and efficient
            database management.
         </p>

        <p>
            Beyond code, I have a strong background in <strong>data management</strong>, using tools like Google Sheets,
            Microsoft Excel, Notion, and FileZilla for backend operations and website deployment.
        </p>
   <br />
        <p>
            I am diving deep into <strong>AWS Cloud Computing</strong> to deepen my understanding of scalable cloud
            architecture and DevOps workflows because I believe every developer should understand how the web runs under the hood.
        </p>
        
        <p>
          I am driven by curiosity and growth, I value clean code, thoughtful design, and building with purpose.
        </p>
         
         
        </div>

        <div className="contact-info">
          <a href="tel:09017428035" className="btn" target="_blank"><FiPhoneCall /></a> 
          </div>
       
        <div className="elevator-pitch">
  <iframe
    width="100%"
    height="280"
    src="https://www.youtube.com/embed/zQour3itWoI"
    title="Watch Elevator Pitch"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ borderRadius: '10px' }}
  ></iframe>
</div>


        </div>
    </section>
  );
}

export default About;