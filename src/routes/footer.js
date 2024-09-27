import React from 'react';
import './styles/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="brand-section">
            <a href="#home">
              <img
                src="images/Wika_Icon_logo_with_bg.png"
                alt="Wika Translate Logo"
                className="logo"
              />
            </a>
            <p className="brand-description">
              Wika Translate Ltd offers one-stop solutions to your translation needs.
            </p>
            <div className="social-links">
              <div className="footer_socials_wrapper">
                <a href="https://www.linkedin.com/company/81655771" className="socials_icon socials-2" target="_blank" aria-label="LinkedIn" rel="noreferrer">
                  <i className="uil uil-linkedin" />
                </a>

                <a href="https://www.twitter.com/wikatranslate" className="socials_icon socials-3" target="_blank" aria-label="Twitter" rel="noreferrer">
                  <i className="uil uil-twitter" />
                </a>

                <a href="https://www.instagram.com/wikatranslate" className="socials_icon socials-3" target="_blank" aria-label="Instagram" rel="noreferrer">
                  <i className="uil uil-instagram-alt" />
                </a>

                <a href="https://www.facebook.com/wikatranslate" className="socials_icon socials-1" target="_blank" aria-label="Facebook" rel="noreferrer">
                  <i className="uil uil-facebook" />
                </a>
              </div>
            </div>
          </div>

          <div className="links-section">
            <h3 className="links-title">Useful Links</h3>
            <div className="links-container">
              <ul className="links-list">
                <li><a href="#home" className="link">Home</a></li>
                <li><a href="#contact-us" className="link">Contact Us</a></li>
                <li><a href="#about-us" className="link">About Us</a></li>
                <li><a href="#services" className="link">Services</a></li>
              </ul>
              <ul className="links-list">
                <li><a href="#blog" className="link">Blog</a></li>
                <li><a href="#frequently-asked-questions" className="link">FAQ</a></li>
                <li><a href="#termsandconditions" className="link">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="newsletter-section">
            <h3 className="newsletter-title">Subscribe To Our Newsletter</h3>
            <div className="newsletter-form">
              <form name="submit-to-google-sheet" className="form">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="email-input"
                />
                <button type="submit" className="subscribe-button">
                  Subscribe
                  <i className="uil uil-message" />
                </button>
              </form>
              <span id="msg" className="message" />
            </div>
            <p className="newsletter-description">
              Wika Translate Ltd constantly reaches out to
              translators and interpreters to find the very best.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <img src="images/Line.png" alt="Divider Line" className="divider-line" />
          <div className="footer-bottom-content">
            <span className="terms-text">
              Terms of use | Privacy Environmental Policy
            </span>
            <span className="copyrights">
              &#169; 2024 Wika Translate Ltd. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
