import React from 'react';
import './NavBar.css';
import MoonIcon from '../assets/half-moon.png'
import SunIcon from '../assets/sun.png'

const Navbar = ({ darkMode, toggleMode }) => {
  return (
    <nav className={`navbar p-4 flex justify-between items-center ${darkMode ? 'bg-202023 text-white' : 'bg-F0E7DB text-1A202C'}`}>
      <div className="brand text-2xl font-bold">
        Joseph Chen
      </div>
      <div className="tabs space-x-4 ml-auto flex items-center">
        <span>Projects</span>
        <span>Experience</span>
        <span>Connect</span>
        <button className={`mode-toggle-button ${darkMode ? 'dark-mode' : 'light-mode'}`} onClick={toggleMode}>
          {darkMode ? <img src={SunIcon} alt="Sun Icon" className="mode-icon"/> : <img src={MoonIcon} alt="Moon Icon" className="mode-icon"/>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
