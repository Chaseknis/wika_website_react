import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './styles/translation.css';
import getDescription from '../components/logic/getDescription';
import getStepIcon from '../components/logic/getStepIcon';
import videoBg5 from '../assets/videoBg5.mp4';
import favicon from '../assets/new_logo.png';

function Translation() {
  const [openSteps, setOpenSteps] = useState([false, false, false, false, false]);
  const contentRefs = useRef([]);

  const toggleContent = (index) => {
    const newOpenSteps = [...openSteps];
    newOpenSteps[index] = !newOpenSteps[index];
    setOpenSteps(newOpenSteps);
  };

  useEffect(() => {
    openSteps.forEach((isOpen, index) => {
      if (isOpen && contentRefs.current[index]) {
        contentRefs.current[index].style.maxHeight = `${contentRefs.current[index].scrollHeight}px`;
      } else if (contentRefs.current[index]) {
        contentRefs.current[index].style.maxHeight = '0px';
      }
    });
  }, [openSteps]);

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
    ['Certified', ' Translation', ' Services'],
    ['Accurate', ' Legal', ' Translations'],
    ['Precision in', ' Technical', ' Translations'],
  ];

  return (
    <>
      {/* ✅ SEO Metadata & Canonical Tag */}
      <Helmet>
        <title>
          Translation - Wika Translate, Affordable Professional Translation Services in
          Kigali, Rwanda
        </title>
        <link rel="canonical" href="https://www.wikatranslate.net/translation" />
      </Helmet>
      <section className="translation" id="translation">
        <div className="about_title_main_container">
          <video src={videoBg5} className="bgVideo" autoPlay loop muted>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          {/* <div className="overlay" /> */}
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                Translation
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
                Wika Translate provides high-quality translation services designed to ensure
                accuracy, cultural relevance, and professionalism. Whether you need certified
                translations for legal documents, business contracts, technical manuals, or personal
                records, our expert linguists deliver precise and reliable results. With a
                commitment to linguistic excellence and industry expertise, we help businesses and
                individuals navigate multilingual communication effortlessly.
              </p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="translation_section-container">
          <div className="translation_one">
            <div className="heading-container">
              <div className="translation_page_title">
                <h2>
                  Translation
                  <hr />
                </h2>

                <p>
                  Our document processing undergoes a meticulous five-step procedure, ensuring
                  precision, reliability, and timely delivery to clients. The process begins with a
                  professional translation, followed by thorough proofreading to eliminate any
                  errors. Next, meticulous editing is conducted to enhance clarity and flow,
                  ensuring the document is polished. This is followed by a final comprehensive
                  review to certify it&apos;s readiness for dissemination.
                </p>
              </div>
              <p className="translation_second_paragraph">
                Once approved, the document is securely delivered to the client. This approach
                guarantees that every document meets our strict quality standards, accurately
                conveying the intended message and instilling confidence in our clients&apos;
                communications.
              </p>
            </div>

          </div>
          <div className="translation_two">
            <div className="steps-container">
              {['Translation', 'Proofreading', 'Editing', 'Final Review', 'Delivery'].map((stepTitle, index) => (
                <div className="step-item" key={stepTitle}>
                  <div className="icon-container">
                    <div className="icon_and_title_container">
                      {getStepIcon(stepTitle)}
                      {' '}
                      {/* Dynamically assign icon */}
                      <h3 className="step-title">{stepTitle}</h3>
                    </div>
                    <div className="expand_icons">
                      {!openSteps[index] ? (
                        <button type="button" aria-label="expand" className="expand_icons_button expand" onClick={() => toggleContent(index)}>
                          <i className="uil uil-plus" />
                        </button>
                      ) : (
                        <button type="button" aria-label="close" className="expand_icons_button close" onClick={() => toggleContent(index)}>
                          <i className="uil uil-minus" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className={`step-content ${openSteps[index] ? 'open' : ''}`}
                  >
                    <p className="step-description">
                      {getDescription(stepTitle)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

export default Translation;
