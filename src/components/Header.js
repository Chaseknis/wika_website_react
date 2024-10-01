import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import favicon from '../assets/new_logo.png';
import './styles/header.css';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      {!isScrolled && (
      <div className="header_contact_card">
        <div className="contact_card">
          <i className="bx bxl-whatsapp contact_card_icon" />
          <a href="https://api.whatsapp.com/send?phone=250788933063&text=Hello, more information!" className="header_contact_button">
            +250 788 933 063
          </a>
        </div>

        <div className="contact_card">
          <i className="bx bx-mail-send contact_card_icon" />
          <a href="mailto:info@wikatranslate.net" className="header_contact_button">
            info@wikatranslate.net
          </a>
        </div>
      </div>
      )}
      <nav>
        <a href="#home" className="logo" aria-label="logo" onClick={() => setActiveNav('#home')}>
          <img src={favicon} alt="logo" />
        </a>
        <div className={toggle ? 'nav_menu show_menu' : 'nav_menu'}>
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-estate nav_icon" />
                Home
              </a>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-users-alt nav_icon" />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/industries"
                onClick={() => setActiveNav('#industries')}
                className={activeNav === '#industries' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-globe nav_icon" />
                Industries
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setActiveNav('#services')}
                className={activeNav === '#services' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-briefcase-alt nav_icon" />
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/translation"
                onClick={() => setActiveNav('#translation')}
                className={activeNav === '#translation' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-language nav_icon" />
                Translation
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={() => setActiveNav('#faq')}
                className={activeNav === '#faq' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-question nav_icon" />
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-message nav_icon" />
                Contact
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={handleToggle}
            onKeyDown={handleToggle}
            role="button"
            tabIndex={0}
            aria-label="Close navigation"
          />
        </div>

        <div className="nav_toggle" onClick={handleToggle} onKeyDown={handleToggle} role="button" tabIndex={0} aria-label="Open navigation">
          <i className="uil uil-bars" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
