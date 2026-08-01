import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setIsFlipping(true);
    toggleTheme();
    setTimeout(() => setIsFlipping(false), 500);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="/">Olive & Brew</a>
        </div>

        <nav className={`navbar__links ${isDrawerOpen ? 'navbar__links--open' : ''}`}>
          <a href="#menu" className="navbar__link">Menu</a>
          <a href="#about" className="navbar__link">About</a>
          <a href="#gallery" className="navbar__link">Gallery</a>
          <a href="#contact" className="navbar__link">Contact</a>
        </nav>

        <div className="navbar__actions">
          <button 
            className={`navbar__theme-toggle ${isFlipping ? 'navbar__theme-toggle--flipping' : ''}`} 
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
          >
            <div className="navbar__theme-toggle-inner">
              {theme === 'dark' ? '☀' : '🌙'}
            </div>
          </button>
          
          <a href="#reserve" className="navbar__cta">Reserve</a>
          
          <button 
            className={`navbar__hamburger ${isDrawerOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="navbar__gradient-line"></div>
    </header>
  );
};

export default Navbar;
