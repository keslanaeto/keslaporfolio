import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-header">
        <div className="logo">KeslA</div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/#home" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/#skills" onClick={closeMenu}>Skills</Link></li>
        <li><Link to="/#experience" onClick={closeMenu}>Experience</Link></li>
        <li><Link to="/#projects" onClick={closeMenu}>Projects</Link></li>
       
        
        <li className="dropdown">
  <Link to="/cloud" className="dropdown-toggle" onClick={closeMenu}>AWS Cloud</Link>
  <ul className="dropdown-menu">
  <li><Link to="/youtube" onClick={closeMenu}>YouTube</Link></li>
  </ul>
</li>

<li><Link to="/certificate" onClick={closeMenu}>Certificate</Link></li>


        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;



