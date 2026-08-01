import { useState, useEffect } from 'react';
import './RoasteryStory.css';

const roastOrigins = [
  {
    id: 'ethiopia',
    country: 'Yirgacheffe, Ethiopia',
    elevation: '2,100m ASL',
    process: 'Natural / Sun-Dried',
    roastLevel: 'Light-Medium',
    flavorNotes: ['Wild Jasmine', 'Bergamot', 'Dried Apricot', 'Honeyed Floral'],
    description: 'Harvested from smallholder heirloom gardens in the misty highlands of Yirgacheffe. Slow-dried on raised African beds for intense floral complexity.',
    quote: '"Notes of crushed jasmine blossom, silky peach nectar, and a vibrant tea-like acidity that dances across the palate."',
    accentColor: 'rgba(201, 169, 110, 0.8)',
    stats: { body: 65, acidity: 92, sweetness: 88, aroma: 96 }
  },
  {
    id: 'colombia',
    country: 'Huila, Colombia',
    elevation: '1,850m ASL',
    process: 'Anaerobic Fermentation',
    roastLevel: 'Medium Roast',
    flavorNotes: ['Cacao Nibs', 'Red Apple', 'Salted Caramel', 'Orange Blossom'],
    description: 'Sourced from volcanic soil micro-lots in Huila. 72-hour extended anaerobic tank fermentation creates deep fruit complexity and velvety richness.',
    quote: '"Dark chocolate intensity layered with crisp red apple sweetness and an intoxicating warm caramel finish."',
    accentColor: 'rgba(139, 154, 70, 0.8)',
    stats: { body: 84, acidity: 70, sweetness: 90, aroma: 88 }
  },
  {
    id: 'greece',
    country: 'Kalamata, Greece',
    elevation: 'Coastal Terraces',
    process: 'Cold Cold-Pressed Infusion',
    roastLevel: 'Artisan Olive Infusion',
    flavorNotes: ['Fresh Olive Leaf', 'Butterscotch', 'Green Apple', 'Velvet Cream'],
    description: 'Our crown jewel blend: Single-origin espresso cold-steeped with first-press extra virgin Koroneiki olive oil for an unprecedented silky mouthfeel.',
    quote: '"A velvety, buttery texture that completely redefines specialty coffee, leaving a warm, luxurious golden glow on the palate."',
    accentColor: 'rgba(194, 212, 104, 0.8)',
    stats: { body: 98, acidity: 60, sweetness: 85, aroma: 94 }
  }
];

const roastSteps = [
  {
    step: '01',
    title: 'Ethical Selection',
    subtitle: 'Direct Trade Micro-Lots',
    desc: 'We partner directly with family farms paying 3x Fair Trade minimums to secure only top 1% specialty microlots.'
  },
  {
    step: '02',
    title: 'Precision Roasting',
    subtitle: 'Thermal Profile Control',
    desc: 'Roasted in small 5kg batches using custom infrared roasting profiles to preserve delicate floral terpenes and natural sugars.'
  },
  {
    step: '03',
    title: 'Olive Oil Infusion',
    subtitle: 'Signature Alchemy',
    desc: 'Cold-emulsified with high-polyphenol Greek Koroneiki extra virgin olive oil at exact thermal equilibrium.'
  },
  {
    step: '04',
    title: 'Artisan Extraction',
    subtitle: 'Perfection in Every Cup',
    desc: 'Rested for 7 days then extracted on custom dual-boiler lever espresso machinery tuned to 9.2 bars.'
  }
];

const RoasteryStory = () => {
  const [activeOrigin, setActiveOrigin] = useState('greece');
  const currentOrigin = roastOrigins.find(o => o.id === activeOrigin);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.roastery .reveal, .roastery .reveal-scale');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="roastery" className="roastery">
      <div className="roastery__bg-glow"></div>
      <div className="roastery__bg-particles"></div>

      <div className="section-container">
        {/* Section Header */}
        <div className="roastery__header reveal-scale">
          <span className="roastery__label">Bean to Cup Journey</span>
          <h2 className="roastery__title">The Art of Our Roastery</h2>
          <p className="roastery__subtitle">
            From misty high-altitude volcanic terraces to our signature olive oil infusion process, explore the science and passion behind every sip.
          </p>
        </div>

        {/* Origin Explorer Section */}
        <div className="roastery__explorer reveal">
          <div className="roastery__tabs">
            {roastOrigins.map((origin) => (
              <button
                key={origin.id}
                className={`roastery__tab ${activeOrigin === origin.id ? 'roastery__tab--active' : ''}`}
                onClick={() => setActiveOrigin(origin.id)}
              >
                <span className="roastery__tab-dot"></span>
                <span className="roastery__tab-title">{origin.country.split(',')[1] || origin.country}</span>
              </button>
            ))}
          </div>

          <div className="roastery__card glass glow-card">
            <div className="roastery__card-grid">
              {/* Left Info Column */}
              <div className="roastery__info">
                <div className="roastery__origin-tag">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {currentOrigin.country}
                </div>

                <h3 className="roastery__origin-title">{currentOrigin.process}</h3>
                <p className="roastery__origin-desc">{currentOrigin.description}</p>
                <blockquote className="roastery__quote">{currentOrigin.quote}</blockquote>

                {/* Flavor Notes Chips */}
                <div className="roastery__notes">
                  <span className="roastery__notes-label">Flavor Profile:</span>
                  <div className="roastery__notes-chips">
                    {currentOrigin.flavorNotes.map((note, idx) => (
                      <span key={idx} className="roastery__chip">{note}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Specs Column */}
              <div className="roastery__specs">
                <div className="roastery__spec-badge">
                  <span className="roastery__spec-label">Elevation</span>
                  <span className="roastery__spec-value">{currentOrigin.elevation}</span>
                </div>
                <div className="roastery__spec-badge">
                  <span className="roastery__spec-label">Roast Level</span>
                  <span className="roastery__spec-value">{currentOrigin.roastLevel}</span>
                </div>

                {/* Taste Meter Bars */}
                <div className="roastery__meters">
                  <h4 className="roastery__meters-heading">Sensory Analysis</h4>
                  
                  {Object.entries(currentOrigin.stats).map(([stat, val]) => (
                    <div key={stat} className="roastery__meter-row">
                      <div className="roastery__meter-info">
                        <span className="roastery__meter-name">{stat}</span>
                        <span className="roastery__meter-num">{val}%</span>
                      </div>
                      <div className="roastery__meter-track">
                        <div
                          className="roastery__meter-fill"
                          style={{ width: `${val}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roast Process Steps */}
        <div className="roastery__process">
          <div className="roastery__header reveal-scale" style={{ marginBottom: '50px' }}>
            <span className="roastery__label">Craft & Precision</span>
            <h2 className="roastery__title" style={{ fontSize: '2.5rem' }}>Our Craftsmanship</h2>
          </div>

          <div className="roastery__steps-grid">
            {roastSteps.map((step, index) => (
              <div
                key={index}
                className="roastery__step-card glass reveal"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="roastery__step-number">{step.step}</div>
                <h4 className="roastery__step-title">{step.title}</h4>
                <div className="roastery__step-subtitle">{step.subtitle}</div>
                <p className="roastery__step-desc">{step.desc}</p>
                <div className="roastery__step-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoasteryStory;
