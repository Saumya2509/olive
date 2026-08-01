import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "./ThemeContext";
import heroBg from "../assets/images/hero-bg.jpg";
import "./Hero.css";

const Hero = () => {
  const { theme } = useTheme();
  const [particleCount, setParticleCount] = useState(20);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setParticleCount(window.innerWidth <= 768 ? 8 : 20);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rx", "0deg");
    cardRef.current.style.setProperty("--ry", "0deg");
  };

  return (
    <section className={`hero hero--${theme}`} id="home">
      {/* Background layer */}
      <div className="hero__background">
        <div className="hero__image-wrapper">
          <img src={heroBg} alt="Olive & Brew Hero" className="hero__image" />
        </div>
        <div className="hero__overlay"></div>
        <div className="hero__vignette"></div>
      </div>

      {/* Decorative Elements */}
      <div className="hero__orbs">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
      </div>

      <div className="hero__rays">
        <div className="hero__ray hero__ray--1"></div>
        <div className="hero__ray hero__ray--2"></div>
        <div className="hero__ray hero__ray--3"></div>
      </div>

      <div className="hero__grid-lines"></div>

      <div className="hero__particles">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{
              "--tx": `${(Math.random() - 0.5) * 200}px`,
              "--ty": `${(Math.random() - 0.5) * 200}px`,
              "--delay": `${Math.random() * 5}s`,
              "--duration": `${10 + Math.random() * 10}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
          ></div>
        ))}
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__title-wrapper">
            <h1 className="hero__title">
              <span className="hero__title-word">Where</span>
              <span className="hero__title-word">Coffee</span>
              <span className="hero__title-word">Meets</span>
              <span className="hero__title-word hero__title-word--highlight">
                Nature
              </span>
            </h1>
          </div>

          <p className="hero__description">
            Experience the finest artisanal coffee blends surrounded by lush
            greenery. Olive & Brew is your tranquil escape in the heart of the
            city.
          </p>

          <div className="hero__actions">
            <button className="hero__button hero__button--primary">
              <span>View Menu</span>
            </button>
            <button className="hero__button hero__button--secondary">
              <span>Book a Table</span>
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat-card">
              <span className="hero__stat-value">12+</span>
              <span className="hero__stat-label">Artisanal Blends</span>
            </div>
            <div className="hero__stat-card">
              <span className="hero__stat-value">50+</span>
              <span className="hero__stat-label">Plant Varieties</span>
            </div>
            <div className="hero__stat-card">
              <span className="hero__stat-value">4.9</span>
              <span className="hero__stat-label">Customer Rating</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div
            className="hero__floating-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hero__card-content">
              <div className="hero__card-badge">New Blend</div>
              <h3 className="hero__card-title">Ethiopian Yirgacheffe</h3>
              <p className="hero__card-desc">
                Floral notes with a hint of citrus and jasmine.
              </p>
              <div className="hero__card-footer">
                <span className="hero__card-price">$6.50</span>
                <button className="hero__card-btn">Order Now</button>
              </div>
            </div>
          </div>
          <div className="hero__side-ornament">
            <span>Est. 2024</span>
          </div>
        </div>
      </div>

      <div className="hero__marquee-wrapper">
        <div className="hero__marquee">
          <span>Freshly Roasted</span>
          <span className="hero__marquee-separator">•</span>
          <span>Locally Sourced</span>
          <span className="hero__marquee-separator">•</span>
          <span>Organic Beans</span>
          <span className="hero__marquee-separator">•</span>
          <span>Artisan Pastries</span>
          <span className="hero__marquee-separator">•</span>
          <span>Freshly Roasted</span>
          <span className="hero__marquee-separator">•</span>
          <span>Locally Sourced</span>
          <span className="hero__marquee-separator">•</span>
          <span>Organic Beans</span>
          <span className="hero__marquee-separator">•</span>
          <span>Artisan Pastries</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
