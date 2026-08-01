import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer__top-line"></div>
      <div className="section-container">
        {/* Contact CTA */}
        <div className="footer__cta">
          <h2 className="footer__cta-title">Ready to Experience <br/><span>Olive & Brew?</span></h2>
          <p className="footer__cta-text">
            Reserve your table and let us craft an unforgettable experience for you.
          </p>
          <div className="footer__cta-actions">
            <a href="tel:+1234567890" className="footer__cta-btn footer__cta-btn--primary">
              <span className="btn-face front">Call to Reserve</span>
              <span className="btn-face back">Call to Reserve</span>
            </a>
            <a href="mailto:hello@oliveandbrew.com" className="footer__cta-btn footer__cta-btn--secondary">
              <span className="btn-face front">Send Email</span>
              <span className="btn-face back">Send Email</span>
            </a>
          </div>
        </div>

        {/* Info Grid */}
        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__brand">
              <span className="footer__brand-icon">🫒</span>
              <div>
                <span className="footer__brand-name">Olive & Brew</span>
                <span className="footer__brand-tagline">Artisan Café</span>
              </div>
            </div>
            <p className="footer__brand-desc">
              Where Mediterranean soul meets artisan coffee culture. Every visit is
              an invitation to slow down and savor.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <span className="social-front">IG</span>
                <span className="social-back">IG</span>
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <span className="social-front">FB</span>
                <span className="social-back">FB</span>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <span className="social-front">TW</span>
                <span className="social-back">TW</span>
              </a>
              <a href="#" className="footer__social-link" aria-label="TikTok">
                <span className="social-front">TK</span>
                <span className="social-back">TK</span>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Visit Us</h4>
            <div className="footer__info">
              <p>247 Mediterranean Lane</p>
              <p>Brooklyn, NY 11201</p>
              <br />
              <p className="footer__link">+1 (234) 567-890</p>
              <p className="footer__link">hello@oliveandbrew.com</p>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Hours</h4>
            <div className="footer__hours">
              <div className="footer__hour-row">
                <span>Mon – Fri</span>
                <span>7:00 AM – 9:00 PM</span>
              </div>
              <div className="footer__hour-row">
                <span>Saturday</span>
                <span>8:00 AM – 10:00 PM</span>
              </div>
              <div className="footer__hour-row">
                <span>Sunday</span>
                <span>8:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Stay Updated</h4>
            <p className="footer__newsletter-text">
              Join our newsletter for exclusive offers and seasonal menu updates.
            </p>
            <div className="footer__newsletter">
              <input
                type="email"
                placeholder="Your email address"
                className="footer__newsletter-input"
              />
              <button className="footer__newsletter-btn">→</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 Olive & Brew. All rights reserved. Crafted with 🫒 and ☕
          </p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
