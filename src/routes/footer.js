import React from 'react';
import './styles/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <a href="#home" className="logo footer_logo">Chase</a>
        <ul>
          <li>
            <a href="#about" className="footer_link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">Projects</a>
          </li>

          <li>
            <a href="#contact" className="footer_link">Contact</a>
          </li>
        </ul>

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

        <span className="copyrights">
          &#169; 2023 Chase. All rights reserved
        </span>

      </div>
    </footer>
  );
}

export default Footer;
