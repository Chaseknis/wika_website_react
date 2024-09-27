import React, { useState } from 'react';
import './styles/contact.css';
// import { useForm, ValidationError } from '@formspree/react';
import Quotation from '../components/Quotation';

function Contact() {
  const [showContactForm, setShowContactForm] = useState(true); // Default is Contact form

  return (
    <section className="contact" id="contact">
      <div className="toggle-buttons">
        <button type="button" onClick={() => setShowContactForm(true)} className={`toggle-btn ${showContactForm ? 'active' : ''}`}>
          <i className="bx bx-mail-send contact_card_icon" />
          Contact Form
        </button>
        <button type="button" onClick={() => setShowContactForm(false)} className={`toggle-btn ${!showContactForm ? 'active' : ''}`}>
          Quotation Form
        </button>
      </div>

      <div className="form-container">
        {showContactForm ? (
          <div className="contact-form-section">
            <div className="text-section">
              <h1 className="heading">Contact Us</h1>
              <h2 className="subheading">We love our customers, feel free to contact us</h2>
            </div>
            <form id="form" action="https://formspree.io/f/xjvdgezn" method="POST" className="contact-form">
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://127.0.0.1:5555/#contact-us" />

              <input type="text" id="name" name="name" placeholder="Full Name" className="input" required />
              <input type="text" id="phone" name="phone" placeholder="Phone Number" className="input" />
              <input type="email" id="email" name="email" placeholder="Email Address" className="input" required />
              <textarea id="message" name="message" placeholder="Message" rows="4" className="input" required />

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
