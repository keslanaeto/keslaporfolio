import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h2 className="footer-logo">Kesla Chime</h2>
        <p className="footer-tagline">Crafting code and cloud with creativity.</p>

        <div className="footer-socials">
          <a href="https://github.com/keslanaeto" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/chime-kesla-291706317" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">Email</a>
        </div>
        
        {/* <p className="footer-copy">© {new Date().getFullYear()} Kesla Chime. All rights reserved.</p> */}

        <p className="footer-copy">© 2024 Kesla Chime. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
