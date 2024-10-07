import React from 'react';
import './styles/socials.css';

function Social() {
  return (
    <div className="socials_wrapper">
      <a href="https://www.linkedin.com/company/81655771" className="socials_icon socials-2" target="_blank" aria-label="LinkedIn" rel="noreferrer">
        <i className="uil uil-linkedin" />
      </a>

      <a href="https://www.twitter.com/wikatranslate" className="socials_icon socials-3" target="_blank" aria-label="Twitter" rel="noreferrer">
        <i className="uil uil-twitter" />
      </a>

      <a href="https://www.instagram.com/wikatranslate" className="socials_icon socials-3" target="_blank" aria-label="Instagram" rel="noreferrer">
        <i className="uil uil-instagram-alt" />
      </a>

      <a href="https://www.facebook.com/profile.php?id=100076180103188" className="socials_icon socials-1" target="_blank" aria-label="Facebook" rel="noreferrer">
        <i className="uil uil-facebook" />
      </a>
    </div>
  );
}

export default Social;
