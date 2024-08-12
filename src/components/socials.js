import React from 'react';
import './styles/socials.css';

const Social = () => (
  <div className="socials_wrapper">
    <a href="https://www.linkedin.com/company/81655771" className="socials_icon socials-2" target="_blank" rel="noreferrer">
      <i className="uil uil-linkedin" />
    </a>

    <a href="https://www.twitter.com/wikatranslate" className="socials_icon socials-3" target="_blank" rel="noreferrer">
      <i className="uil uil-twitter" />
    </a>

    <a href="https://www.instagram.com/wikatranslate" className="socials_icon socials-3" target="_blank" rel="noreferrer">
      <i className="uil uil-instagram-alt" />
    </a>

    <a href="https://www.facebook.com/wikatranslate" className="socials_icon socials-1" target="_blank" rel="noreferrer">
      <i className="uil uil-facebook" />
    </a>
  </div>
);

export default Social;
