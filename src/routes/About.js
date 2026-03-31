import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/about.css';
import LazyLoad from 'react-lazyload'; // Import LazyLoad
import image3 from '../assets/image3.webp';
import videoBg5 from '../assets/videoBg5.mp4';
import favicon from '../assets/new_logo.png';

function About() {
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
    ['Global', ' Communication', ' Made Easy'],
    ['Precision in', ' Multilingual', ' Services'],
    ['Dedicated to', ' Bridging', ' Language Gaps'],
  ];

  return (
    <>
      {/* ✅ SEO Metadata & Canonical Tag */}
      <Helmet>
        <title>About Us - Know who we are, our experience speaks for itself</title>
        <link rel="canonical" href="https://www.wikatranslate.net/about" />
      </Helmet>
      <section className="about" id="about">
        <div className="about_title_main_container">
          <video src={videoBg5} className="bgVideo" autoPlay loop muted>
            <track kind="captions" srcLang="en" label="English" />
          </video>
          {/* <div className="overlay" /> */}
          <div className="about_main_title_wrapper">
            <div className="about_best_ad">
              <h2>
                About Us
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
                Wika Translate is your gateway to seamless communication in a multilingual world.
                Based in Kigali, we specialize in certified translation, simultaneous
                interpretation, and language solutions tailored to your needs. Our team of
                seasoned language experts is committed to bridging cultural and linguistic
                gaps with precision and professionalism. Whether it’s legal documents,
                international conferences, or everyday communication, Wika Translate ensures
                clarity, accuracy, and excellence in every service we provide.
              </p>
            </div>
          </div>
          <div className="overlay" />
          <div className="home_container" />
        </div>
        <div className="about_main_title_content_container">
          <div className="about_wrapper">
            <div className="about_title_container">
              <div className="about_page_title">
                <h2>
                  About Us
                  <hr />
                </h2>
                <p>
                  Wika Translate is a fast-growing, professional translation agency offering expert
                  language solutions for businesses and individuals worldwide. Specializing in
                  legal, technical, and certified translations, we deliver fast, accurate,
                  and culturally relevant services in over 150 languages, including Kinyarwanda,
                  English, French, Swahili, Arabic, and German. Trusted by global companies
                  and organizations, we also provide conference interpreting, business translation,
                  interpretation equipment rental, and multilingual support,
                  ensuring clear communication across diverse industries in Rwanda, Africa,
                  and globally.
                </p>
              </div>
              <p className="second_paragraph">
                Wika Translate serves as a hub for language experts from across the globe,
                boasting a network of over 800 translators and interpreters. With this extensive
                pool of talent, we possess the expertise and capability to consistently
                deliver high-quality services to our clients swiftly and efficiently.
              </p>
              <div className="about_banner_wrapper">
                <div className="about_banner_card_wrapper">
                  <span>10,000,000+</span>
                  <p>Words Translated</p>
                </div>
                <div className="about_banner_card_wrapper">
                  <span>10,000+</span>
                  <p>Clients Served</p>
                </div>
                <div>
                  <a target="_blank" href="https://www.goodfirms.co/company/wika-translate" rel="noreferrer">
                    <img
                      className="goodFirms"
                      src="https://assets.goodfirms.co/badges/color-badge/translation-services-companies.svg"
                      title="Top Translation Services Company"
                      alt="Top Translation Services Company on GoodFirms"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="about_image_container">
              <div className="about_image_wrapper">
                <LazyLoad height={200} offset={100} placeholder={<div>Loading...</div>}>
                  <img src={image3} alt="Wika Translate" style={{ width: '100%', height: 'auto' }} />
                </LazyLoad>
              </div>
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

export default About;
