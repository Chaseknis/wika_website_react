import React, { useRef, useEffect, useState } from 'react';
import './styles/contact.css';
import { Helmet } from 'react-helmet';
import Quotation from '../components/Quotation';
import ContactDetails from '../components/contactDetails';
import videoBg5 from '../assets/videoBg5.mp4';
import favicon from '../assets/new_logo.png';

function Contact() {
  const [showContactForm, setShowContactForm] = useState(true); // Default is Contact form
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Rotate between 0, 1, and 2
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);
  const aboutTitles = [
    ['Reach Out', ' For', ' Language Solutions'],
    ['Connect With', ' Wika Translate', ' Today'],
    ['Your Gateway to', ' Seamless', ' Communication'],
  ];

  return (
    <>
      {/* ✅ SEO Metadata & Canonical Tag */}
      <Helmet>
        <title>Contact Us - Wika Translate, Translation and Interpretation Company in Rwanda</title>
        <link rel="canonical" href="https://www.wikatranslate.net/contact" />
      </Helmet>
      <section className="contact_section" id="contact">
        <div className="contact_title_main_container">
          <video src={videoBg5} className="bgVideo" autoPlay loop muted>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          {/* <div className="overlay" /> */}
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                Contact us
                <hr />
              </h2>
            </div>
            <div className="about_main_title">
              <h1 className="title">
                <span className="stroke_text">{aboutTitles[activeIndex][0]}</span>
                <span>{aboutTitles[activeIndex][1]}</span>
                <span>{aboutTitles[activeIndex][2]}</span>
              </h1>
            </div>
            <div className="about_main_title_paragraph_wrapper">
              <p className="about_main_title_paragraph">
                Need assistance with translation or interpretation services? Get in touch with Wika
                Translate today! Whether you have a project inquiry, need a quote, or simply want
                more details about our services, our team is ready to help. Contact us via phone,
                email, or visit our office—we look forward to assisting you with all your language
                needs.
              </p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="toggle-buttons">
          <button type="button" onClick={() => setShowContactForm(true)} className={`toggle-btn ${showContactForm ? 'active' : ''}`}>
            {/* <i className="bx bx-mail-send contact_card_icon" /> */}
            Contact Us
          </button>
          <button type="button" onClick={() => setShowContactForm(false)} className={`toggle-btn ${!showContactForm ? 'active' : ''}`}>
            Get a Quotation
          </button>
        </div>

        <div className="form-container">
          {showContactForm ? (
            <div className="contact-form-section">
              <div className="text-section">
                <div className="text_section_wrapper">
                  <h2>
                    Contact Us
                    <hr />
                  </h2>
                  <p>
                    Wika Translate serves as a hub for language experts from across the globe,
                    boasting a network of over 800 translators and interpreters. With this extensive
                    pool of talent, we possess the expertise and capability to consistently deliver
                    high-quality services to our clients swiftly and efficiently.
                  </p>
                </div>

                <ContactDetails />

              </div>
              <form id="form" action="https://formspree.io/f/xjvdgezn" method="POST" className="contact-form">
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://127.0.0.1:5555/#contact-us" />

                <div className="contact_details">
                  <input type="text" id="name" name="name" placeholder="Full Name" className="input" required />
                  <input type="text" id="phone" name="phone" placeholder="Phone Number" className="input" />
                  <input type="email" id="email" name="email" placeholder="Email Address" className="input" required />
                </div>
                <textarea id="message" name="message" placeholder="Message" rows="8" className="input" required />

                <button type="submit" className="button">Send Message</button>
              </form>
            </div>
          ) : (
            <Quotation />
          )}
        </div>
        <footer>
          <div className="footer-container">
            <div className="footer-content">
              <div className="brand-section">
                <a href="#home">
                  <img
                    src={favicon}
                    alt="Wika Translate - Professional Translation and Interpretation Services"
                    className="footer_logo"
                    loading="lazy"
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

                    <a target="_blank" href="https://www.goodfirms.co/company/wika-translate" className="socials_icon" rel="noreferrer">
                      <img
                        className="goodFirmsLogo"
                        src="https://assets.goodfirms.co/badges/icon/white-goodfirms-icon.svg"
                        title="Top Translation Services Company"
                        alt="Top Translation Services Company on GoodFirms"
                      />
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
                    <li><a href="#faq" className="link">FAQ</a></li>
                    <li><a href="#terms_and_conditions" className="link">Terms & Conditions</a></li>
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
                      <i className="uil uil-message send-icon" />
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
              <hr className="divider-line" />
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
      </section>
    </>
  );
}

export default Contact;
