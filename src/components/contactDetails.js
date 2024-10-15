import React from 'react';
import './styles/contactDetails.css';

function ContactDetails() {
  return (
    <div className="contact_details_container">
      <div className="contact-wrapper">
        <div className="contact-info">
          <div data-aos="fade-left" className="contact-item">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffca7a" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <span className="contact-text">+250 788 933 063</span>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="contact-item">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffca7a" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </div>
            <span className="contact-text">info@wikatranslate.net</span>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="contact-item">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffca7a" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
          </div>
          <span className="address-text">Kn 84 Street Kigali, Nyarugenge, M. Peace Plaza</span>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
