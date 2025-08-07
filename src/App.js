// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css'; // Ensure your global theme styles are here
import AboutMe from './components/Home';
import About from './components/About';
import Skills from './components/Skills';


const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <AboutMe />
      <About />
      <Skills />
    </>
  );
};

export default App;
