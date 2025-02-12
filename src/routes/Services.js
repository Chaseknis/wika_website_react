import React, { useRef, useEffect, useState } from 'react';
import './styles/services.css';
import Banner from '../components/banner';
import videoBg5 from '../assets/videoBg5.mp4';
import favicon from '../assets/new_logo.png';

function Services() {
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
    ['Simultaneous', ' Interpretation', ' Solutions'],
    ['Interpretation', ' Equipment', ' Rentals'],
  ];

  return (
    <section className="services_page_content_section" id="services">
      <div className="about_title_main_container">
        <video src={videoBg5} className="bgVideo" autoPlay loop muted>
          <track kind="captions" srcLang="en" label="English" />
        </video>
        {/* <div className="overlay" /> */}
        <div className="about_main_title_wrapper">
          <div className="about_best_ad">
            <h2>
              Our Services
              <hr />
            </h2>
          </div>
          <div className="about_main_title">
            {aboutTitles.map((title, index) => (
              <h2
                key={title.join('-')}
                className={`title ${activeIndex === index ? 'active' : 'hidden'}`}
              >
                <span className="stroke_text">{title[0]}</span>
                <span>{title[1]}</span>
                <span>{title[2]}</span>
              </h2>
            ))}
          </div>
          <div className="about_main_title_paragraph_wrapper">
            <p className="about_main_title_paragraph">
              At Wika Translate, we offer a comprehensive range of language services designed
              to meet the diverse needs of our clients. From certified translations and
              simultaneous interpretation to interpretation equipment rentals, our solutions
              are tailored to ensure seamless communication in any setting. Whether you’re
              organizing an international conference, need accurate document translations,
              or require professional interpreters, our team of experts is dedicated to
              delivering precision, professionalism, and cultural fluency to help you connect
              with the world effortlessly.
            </p>
          </div>
        </div>
        <div className="overlay" />
        <div className="home_container" />
      </div>
      <div className="services_page_content_wrapper">
        <Banner />
        <div className="header_wrapper">
          <div className="faq-header">
            <div>
              <h2 className="services-title">
                Our Services
                <hr />
              </h2>
              <p className="services-paragraph">
                At Wika Translate Ltd, we specialize in bridging language barriers and enhancing
                communication for businesses and individuals alike. Our diverse range of services
                is designed to meet all your linguistic needs. From precise Translation that
                resonates with your target audience to expert Interpretation services, including
                simultaneous interpretation for conferences and events, we ensure your message
                is conveyed clearly. We also provide rental of advanced tour guide system equipment
                for seamless multilingual experiences. Our Subtitling and Transcription services
                cater to media production and documentation, ensuring clarity and accessibility
                for all.
              </p>
            </div>
            <p className="services-paragraph-two">
              Additionally, our Localization services transform your products and services to align
              with local cultures, making them more relevant and appealing. With a dedicated team of
              professionals and the latest technology at our disposal, Wika Translate Ltd is your
              trusted partner for effective communication in today’s global landscape. Let us help
              you connect with your audience like never before!
            </p>
          </div>
        </div>

        <div className="wrapper">
          <div className="services_container">
            <input type="radio" name="slide" id="c1" checked />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="c1" className="services_card">
              <div className="services_row">
                <div className="services_icon">1</div>
                <div className="services_description">
                  <h3>Translation</h3>
                  <p>
                    We offer professional translation services in 100+ languages in Legal,
                    Technical, Science, Agriculture, and Business Fields, etc.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c2" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="c2" className="services_card">
              <div className="services_row">
                <div className="services_icon">2</div>
                <div className="services_description">
                  <h3>Interpretation</h3>
                  <p>
                    Simultaneous and Consecutive interpreting, Hiring interpretation equipment
                    and Escorting Interpretation.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c3" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="c3" className="services_card">
              <div className="services_row">
                <div className="services_icon">3</div>
                <div className="services_description">
                  <h3>Subtitling</h3>
                  <p>
                    Translating spoken dialogue From Transcripts, screenplay,
                    commentary in films and television programs, Video games into written text
                    on the screen.
                  </p>
                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="c4" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="c4" className="services_card">
              <div className="services_row">
                <div className="services_icon">4</div>
                <div className="services_description">
                  <h3>Transcription</h3>
                  <p>
                    We provide transcription services for videos or audio-recordings of
                    any length or any language.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c5" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="c5" className="services_card">
              <div className="services_row">
                <div className="services_icon">5</div>
                <div className="services_description">
                  <h3>Localization</h3>
                  <p>
                    We address cultural and non-textual components as well as linguistic
                    issues when adapting a product or service for another country or locale.
                  </p>
                </div>
              </div>
            </label>

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
  );
}

export default Services;
