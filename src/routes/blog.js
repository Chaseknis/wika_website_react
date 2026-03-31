import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import videoBg5 from '../assets/videoBg5.mp4';
import favicon from '../assets/new_logo.png';
import blogContent from '../components/blogContent';

function Blog() {
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
    ['Insights on', ' Multilingual', ' Communication'],
    ['Exploring the', ' Art of', ' Translation'],
    ['Staying Ahead in', ' Language Services', ' Trends'],
  ];
  return (
    <>
      {/* ✅ SEO Metadata & Canonical Tag */}
      <Helmet>
        <title>
          Blog - Wika Translate, Read the latest articles and updates from Wika Translate
          Rwanda
        </title>
        <meta name="description" content="Read the latest articles and updates from Wika Translate, your trusted translation service." />
        <link rel="canonical" href="https://www.wikatranslate.net/blog" />
      </Helmet>
      <div className="about_title_main_container">
        <video src={videoBg5} className="bgVideo" autoPlay loop muted>
          <track kind="captions" srcLang="en" label="English" />
        </video>
        {/* <div className="overlay" /> */}
        <div className="about_main_title_wrapper">
          <div className="about_best_ad">
            <h2>
              Blog
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
              Wika Translate’s blog is your go-to resource for insightful articles, tips, and
              updates on the world of translation and interpretation. Whether you’re looking
              to stay informed about the latest industry trends, explore expert advice on effective
              communication across languages, or dive deeper into the cultural nuances that shape
              our services, our blog provides valuable content for professionals and language
              enthusiasts alike. Stay tuned as we share knowledge and stories that aim to inform,
              inspire, and foster a better understanding of multilingual communication.
            </p>
          </div>
        </div>
        <div className="overlay" />
        <div className="home_container" />
      </div>
      <div className="blog-list">
        {Object.keys(blogContent).map((id) => (
          <div key={id} className="blog-preview">
            <h3>{blogContent[id].title}</h3>
            <p>{blogContent[id].metaDescription}</p>
            <Link to={`/blog/${id}`}>{blogContent[id].anchorText}</Link>
          </div>
        ))}
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
    </>
  );
}

export default Blog;
