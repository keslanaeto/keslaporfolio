import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import AboutMe from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Awscloud from './pages/Awscloud';
import Youtube from './pages/Youtube';
import Certificate from './pages/Certificate';


const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [location]);

  return null;
};

const AppContent = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AboutMe />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route path="/cloud" element={<Awscloud />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/certificate' element={<Certificate />} />
      </Routes>
    </>
  );
};
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
    <Router>
      <AppContent theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
};

export default App;


