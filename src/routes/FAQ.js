import React, { useRef, useEffect, useState } from 'react';
import './styles/faq.css';
import OurPartners from '../components/ourPartners';
import FAQItem from '../components/logic/FAQItem';
import videoBg5 from '../assets/videoBg5.mp4';
import favicon from '../assets/new_logo.png';

function FAQ() {
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
    ['Frequently', ' Asked', ' Questions'],
    ['Need Help?', ' Find', ' Your Answers Here'],
    ['Simplifying', ' Language', ' Solutions for You'],
  ];
  return (
    <section className="main_faq" id="faq">
      <div className="faq_title_main_container">
        <video src={videoBg5} className="bgVideo" autoPlay loop muted>
          <track kind="captions" srcLang="en" label="English" />
        </video>
        {/* <div className="overlay" /> */}
        <div className="about_main_title_wrapper">
          <div className="about_best_ad">
            <h2>
              FAQ
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
              Have questions about our services? Our FAQ section provides clear answers to common
              inquiries about translation, interpretation, pricing, turnaround times, and more.
              Whether you’re curious about certified translations, simultaneous interpretation, or
              document requirements, we’ve got you covered. Explore our frequently asked questions
              to learn more about how Wika Translate can assist you.
            </p>
          </div>
        </div>
        <div className="overlay" />
        <div className="home_container" />
      </div>
      <div className="faq-content-main-container">
        <div className="faq-header">
          <div>
            <h2 className="faq-title">
              FAQ
              <hr />
            </h2>
            <p className="faq-paragraph">
              At Wika Translate Ltd, our clients are at the heart of everything we do.
              We pride ourselves on delivering tailored language solutions that not only meet
              but exceed expectations, with an unwavering commitment to professionalism and
              integrity. Our diverse clientele ranges from multinational corporations to
              individuals, each benefiting from our customized services designed to address
              their unique needs.
            </p>
          </div>
          <p className="faq-paragraph-two">
            By fostering trust and cultivating long-term partnerships, we ensure seamless
            communication across languages and cultures. Our focus is on delivering outstanding
            results, ensuring successful communication outcomes for every client and strengthening
            relationships that endure over time.
          </p>
        </div>

        <div className="faq-content-wrapper">
          <div className="faq-list-container">
            <FAQItem
              question="How do you ensure the accuracy of your translation services?"
              answer="At Wika Translate, we prioritize quality and uphold a strong commitment to our reputation. Each project is assigned to a team of experienced translators specializing in the relevant field, ensuring we deliver the highest standard of service in the industry."
            />
            <FAQItem
              question="What is the difference between a certified and a notarized translation?"
              answer="A certified translation is completed, signed, and sealed by a professional translator, ensuring its accuracy. A notarized translation involves translating official documents that are then authenticated by a public notary. If you're unsure which type of translation you need, feel free to contact us at any time for guidance."
            />
            <FAQItem
              question="Can you translate and certify my birth certificate?"
              answer="Yes, Wika Translate offers certified translations for a wide range of official documents, including birth certificates, degrees, transcripts, police clearances, death certificates, divorce documents, marriage and celibacy certificates, among others."
            />
            <FAQItem
              question="How can I send my documents for translation?"
              answer="You can email your documents to info@wikatranslate.net. We’ll review them and provide you with a FREE quote in less than 10 minutes."
            />
            <FAQItem
              question="How long does it take to translate my documents?"
              answer="The turnaround time depends on the size, complexity, and languages required for your project. We invite you to contact us to discuss your specific needs, and we’ll always strive to exceed your expectations within any deadline."
            />
            <FAQItem
              question="What are your payment methods and terms?"
              answer="We accept payments via Debit/Credit card (POS), Mobile Money, WorldRemit, checks, and bank transfers. Payment is typically requested in advance."
            />
            <FAQItem
              question="What currencies do you accept?"
              answer="We accept payments in USD and Rwandan Francs. However, we are flexible and open to discussing other currency options based on your needs."
            />
          </div>

        </div>
      </div>
      <OurPartners />
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

export default FAQ;
