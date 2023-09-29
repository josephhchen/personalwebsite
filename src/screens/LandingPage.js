import React, { useState } from 'react';
import './LandingPage.css';
import Navbar from '../components/NavBar';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container h-screen flex flex-col ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="cube">
          <div className="side front"></div>
          <div className="side back"></div>
          <div className="side right"></div>
          <div className="side left"></div>
          <div className="side top"></div>
          <div className="side bottom"></div>
        </div>
        <p className="introtext mt-4 text-2xl font-bold">Hello, I'm a developer based in New York!</p>
      </div>
    </div>
  );
};

export default LandingPage;

