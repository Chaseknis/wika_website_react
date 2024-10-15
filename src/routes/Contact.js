import React, { useState } from 'react';
import './styles/contact.css';
// import { useForm, ValidationError } from '@formspree/react';
import Quotation from '../components/Quotation';
import ContactDetails from '../components/contactDetails';

function Contact() {
  const [showContactForm, setShowContactForm] = useState(true); // Default is Contact form

  return (
    <section className="contact" id="contact">
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
    </section>
  );
}

export default Contact;
