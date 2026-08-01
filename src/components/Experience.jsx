import { useEffect } from 'react';
import './Experience.css';

const experiences = [
  {
    num: '01',
    category: 'Workshop',
    title: 'Coffee Masterclass',
    description: 'Join our expert baristas for a hands-on journey through the art of pour-over, latte art, and cupping.',
    time: 'Every Saturday · 10 AM',
    seats: '8 Seats Left',
    price: '$85',
  },
  {
    num: '02',
    category: 'Tasting',
    title: 'Wine & Olive Pairing',
    description: 'Explore the harmony of Mediterranean wines paired with our signature olive oil collection.',
    time: 'First Friday · 7 PM',
    seats: 'Waitlist',
    price: '$120',
  },
  {
    num: '03',
    category: 'Workshop',
    title: 'Baking Workshop',
    description: 'Learn to craft artisan pastries with our head pastry chef using traditional techniques.',
    time: 'Every Sunday · 9 AM',
    seats: '4 Seats Left',
    price: '$95',
  },
  {
    num: '04',
    category: 'Tour',
    title: 'Farm to Cup Tour',
    description: 'Visit our partner farms and roastery to see the journey from bean to your morning cup.',
    time: 'Monthly · Reservations Only',
    seats: 'Available',
    price: '$150',
  },
];

const testimonials = [
  {
    text: 'The olive oil latte changed everything I thought I knew about coffee. This place is pure magic.',
    author: 'Sarah M.',
    role: 'Food Critic',
    rating: 5,
    date: 'Oct 12, 2023',
    platform: 'Google Reviews',
  },
  {
    text: 'An oasis of calm and sophistication. The brunch is worth traveling across the city for.',
    author: 'James L.',
    role: 'Regular Guest',
    rating: 5,
    date: 'Nov 05, 2023',
    platform: 'TripAdvisor',
  },
  {
    text: 'From the ambiance to the last crumb of croissant, everything here speaks of genuine care and artistry.',
    author: 'Amara K.',
    role: 'Lifestyle Blogger',
    rating: 5,
    date: 'Dec 18, 2023',
    platform: 'Yelp',
  },
];

const Experience = () => {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="experience__bg-gradient"></div>
      <div className="section-container">
        
        {/* Experiences Section */}
        <div className="experience__header reveal-scale">
          <span className="experience__label">Beyond Coffee</span>
          <h2 className="experience__title">Curated Experiences</h2>
          <p className="experience__subtitle">
            Immerse yourself in the world of artisan craft through our exclusive workshops and events.
          </p>
        </div>

        <div className="experience__grid">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience__card glass reveal`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="experience__card-glow"></div>
              
              <span className="experience__card-number">{exp.num}</span>
              <div className="experience__card-header">
                <span className="experience__card-tag">{exp.category}</span>
              </div>
              
              <div className="experience__card-content">
                <h3 className="experience__card-title">{exp.title}</h3>
                <p className="experience__card-desc">{exp.description}</p>
                
                <div className="experience__card-meta">
                  <span className={`experience__card-seats ${exp.seats === 'Waitlist' ? 'waitlist' : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {exp.seats}
                  </span>
                  <span className="experience__card-price">{exp.price}</span>
                </div>
              </div>

              <div className="experience__card-footer">
                <span className="experience__card-time">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {exp.time}
                </span>
                <button className="experience__card-btn">Book Now →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Ornamental Divider */}
        <div className="experience__divider reveal">
          <div className="experience__divider-line"></div>
          <div className="experience__divider-ornament"></div>
          <div className="experience__divider-line"></div>
        </div>

        {/* Testimonials Section */}
        <div className="experience__testimonials">
          <div className="experience__header reveal-scale">
            <span className="experience__label">Guest Voices</span>
            <h2 className="experience__title">What They Say</h2>
          </div>

          <div className="experience__testimonials-grid">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="experience__testimonial glass reveal"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="experience__testimonial-quote-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 17H17L19 13V7H13V13H16L14 17ZM6 17H9L11 13V7H5V13H8L6 17Z" opacity="0.2"/>
                  </svg>
                </div>
                
                <div className="experience__testimonial-stars">
                  {[...Array(test.rating)].map((_, i) => (
                    <span key={i} className="experience__star">★</span>
                  ))}
                </div>
                
                <p className="experience__testimonial-text">"{test.text}"</p>
                
                <div className="experience__testimonial-bottom">
                  <div className="experience__testimonial-author">
                    <div className="experience__testimonial-avatar">
                      {test.author.charAt(0)}
                    </div>
                    <div className="experience__testimonial-info">
                      <div className="experience__testimonial-name-row">
                        <span className="experience__testimonial-name">{test.author}</span>
                        <svg className="experience__testimonial-verified" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="experience__testimonial-role">{test.role}</span>
                    </div>
                  </div>
                  
                  <div className="experience__testimonial-meta">
                    <span className="experience__testimonial-date">{test.date}</span>
                    <span className="experience__testimonial-platform">on {test.platform}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
