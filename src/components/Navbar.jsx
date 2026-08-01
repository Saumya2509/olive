import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__glass"></div>
      <div className="navbar__gradient-line"></div>
      <div className="navbar__ambient"></div>

      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-emblem">
            <span className="navbar__logo-emblem-inner">O</span>
            <span className="navbar__logo-emblem-ring"></span>
          </span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Olive & Brew</span>
            <span className="navbar__logo-tagline">Artisan Café</span>
          </div>
        </a>

        <div className="navbar__actions">
          <a href="#menu" className="navbar__menu-link">
            <span className="navbar__menu-link-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
              </svg>
            </span>
            <span className="navbar__menu-link-text">Menu</span>
            <span className="navbar__menu-link-shine"></span>
          </a>

          <a href="#contact" className="navbar__cta">
            <div className="navbar__cta-bg"></div>
            <span>Reserve</span>
            <svg className="navbar__cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <div className="navbar__drawer-bg"></div>
        <div className="navbar__drawer-content">
          <a href="#menu" className="navbar__drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="navbar__drawer-link-num">01</span>
            <span className="navbar__drawer-link-label">Our Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a href="#roastery" className="navbar__drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="navbar__drawer-link-num">02</span>
            <span className="navbar__drawer-link-label">Roastery Craft</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a href="#contact" className="navbar__drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="navbar__drawer-link-num">03</span>
            <span className="navbar__drawer-link-label">Contact</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
