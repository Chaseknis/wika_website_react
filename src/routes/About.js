import React from 'react';
import './styles/about.css';
import image5 from '../assets/image5.JPG';
import Banner from '../components/banner';

function About() {
  return (
    <section className="about" id="about">
      <Banner />
      <div className="about_container container">
        <div>
          <div className="page_title">
            <h2>
              <span className="stroke_text">About</span>
              <span>Us</span>
            </h2>
          </div>

        </div>

        <div>
          <div>
            <img src={image5} alt="Wika Translate" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
