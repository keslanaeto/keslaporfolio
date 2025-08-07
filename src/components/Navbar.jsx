
import React, { useState } from 'react';
import './Navbar.css';

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
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#cloud" onClick={closeMenu}>AWS Cloud</a></li>
        <li><a href="#youtube" onClick={closeMenu}>YouTube</a></li>
        <li><a href="#cert" onClick={closeMenu}>Certificate</a></li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? '🌙 ' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


