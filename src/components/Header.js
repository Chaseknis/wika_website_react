import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import favicon from '../assets/new_logo.png';
import './styles/header.css';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <nav>
        <Link to="/" className="logo" onClick={() => setActiveNav('#home')}>
          <img src={favicon} alt="" />
        </Link>
        <div className={toggle ? 'nav_menu show_menu' : 'nav_menu'}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'nav_link active_link' : 'nav_link'}
              >
                <i className="uil uil-estate nav_icon" />
                Home
              </Link>
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
          >
            <span className="visually-hidden">Close navigation</span>
          </i>
        </div>

        <div className="nav_toggle" onClick={handleToggle} onKeyDown={handleToggle} role="button" tabIndex={0} aria-label="Open navigation">
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
