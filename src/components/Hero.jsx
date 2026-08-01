import { useEffect, useState } from 'react';
import './Hero.css';
import heroBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <section id="home" className={`hero ${loaded ? 'hero--loaded' : ''}`}>
      {/* Background Layers */}
      <div className="hero__bg">
        <img src={heroBg} alt="Olive & Brew Cafe" className="hero__bg-img" />
        <div className="hero__overlay"></div>
        <div className="hero__vignette"></div>
      </div>

      {/* Light Rays */}
      <div className="hero__rays">
        <div className="hero__ray hero__ray--1"></div>
        <div className="hero__ray hero__ray--2"></div>
        <div className="hero__ray hero__ray--3"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="hero__orbs">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
      </div>

      {/* Floating Particles */}
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              opacity: 0.1 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Grid Lines Accent */}
      <div className="hero__grid-lines">
        <div className="hero__grid-line"></div>
        <div className="hero__grid-line"></div>
        <div className="hero__grid-line"></div>
        <div className="hero__grid-line"></div>
        <div className="hero__grid-line"></div>
      </div>

      {/* Marquee Strip */}
      <div className="hero__marquee">
        <div className="hero__marquee-track">
          {[...Array(2)].map((_, set) => (
            <div key={set} className="hero__marquee-group">
              {['Single Origin', 'Slow Brew', 'Artisan Pastries', 'Mediterranean Brunch', 'Organic & Local', 'Handcrafted'].map((item) => (
                <span key={`${set}-${item}`} className="hero__marquee-item">
                  <span className="hero__marquee-dot"></span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Side Ornament */}
      <div className="hero__side-ornament">
        <span className="hero__side-text">Est. 2019</span>
        <span className="hero__side-line"></span>
      </div>

      {/* Main Layout */}
      <div className="hero__layout section-container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-pulse"></span>
            <span className="hero__badge-text">Award-Winning · Handcrafted with Love</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--1">
              <span className="hero__title-word">Where</span>
              <span className="hero__title-word">Every</span>
              <span className="hero__title-word">Sip</span>
            </span>
            <span className="hero__title-line hero__title-line--2">
              <span className="hero__title-accent">Tells a Story</span>
            </span>
          </h1>

          <div className="hero__divider">
            <span className="hero__divider-line"></span>
            <span className="hero__divider-diamond"></span>
            <span className="hero__divider-line"></span>
          </div>

          <p className="hero__description">
            Discover the art of slow coffee and Mediterranean-inspired cuisine,
            crafted from the finest organic ingredients in an ambiance that
            whispers sophistication.
          </p>

          <div className="hero__actions">
            <a href="#menu" className="hero__btn hero__btn--primary">
              <span className="hero__btn-bg"></span>
              <span className="hero__btn-glow"></span>
              <span className="hero__btn-text">View Our Menu</span>
              <svg className="hero__btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            <a href="#experience" className="hero__btn hero__btn--ghost">
              <span className="hero__btn-text">Discover More</span>
              <span className="hero__btn-line"></span>
            </a>
          </div>

          <div className="hero__stats">
            {[
              { number: '12+', label: 'Signature Blends' },
              { number: '4.9', label: 'Guest Rating' },
              { number: '6', label: 'Years of Craft' },
            ].map((stat, i) => (
              <div key={i} className="hero__stat">
                <div className="hero__stat-border"></div>
                <span className="hero__stat-number">{stat.number}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Floating Card — Menu Anchor Teaser */}
        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-glow"></div>
            <div className="hero__card-inner">
              <div className="hero__card-header">
                <span className="hero__card-label">Curated Selection</span>
                <span className="hero__card-badge">New</span>
              </div>
              <div className="hero__card-preview">
                <div className="hero__card-item">
                  <span className="hero__card-item-name">Tandoori Fries</span>
                  <span className="hero__card-item-price">₹229</span>
                </div>
                <div className="hero__card-item">
                  <span className="hero__card-item-name">Crackling Paneer</span>
                  <span className="hero__card-item-price">₹369</span>
                </div>
                <div className="hero__card-item">
                  <span className="hero__card-item-name">Quesadilla</span>
                  <span className="hero__card-item-price">₹309</span>
                </div>
              </div>
              <a href="#menu" className="hero__card-link">
                <span>Explore Full Menu</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="hero__card-ring"></div>
          </div>

          <div className="hero__floating-badge">
            <span className="hero__floating-badge-icon">★</span>
            <div className="hero__floating-badge-text">
              <span>Best Café</span>
              <span>2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb"></div>
        </div>
        <span className="hero__scroll-text">Scroll</span>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="hero__bottom-fade"></div>
    </section>
  );
};

export default Hero;
