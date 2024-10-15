import React from 'react';
import './styles/about.css';
import LazyLoad from 'react-lazyload'; // Import LazyLoad
import image3 from '../assets/image3.jpg';
import Carousel from '../components/cardItem';

function About() {
  return (
    <section className="about" id="about">
      <Carousel />
      <div className="about_container">
        <div className="about_wrapper">
          <div className="about_title_container">
            <div className="about_page_title">
              <h2>
                About Us
                <hr />
              </h2>
              <p>
                Wika Translate is a fast-growing, professional translation agency offering expert
                language solutions for businesses and individuals worldwide. Specializing in legal,
                technical, and certified translations, we deliver fast, accurate, and culturally
                relevant services in over 150 languages, including Kinyarwanda, English, French,
                Swahili, Arabic, and German. Trusted by global companies and organizations,
                we also provide conference interpreting, business translation,
                interpretation equipment rental, and multilingual support,
                ensuring clear communication across diverse industries in Rwanda, Africa,
                and globally.
              </p>
            </div>
            <p className="second_paragraph">
              Wika Translate serves as a hub for language experts from across the globe,
              boasting a network of over 800 translators and interpreters. With this extensive
              pool of talent, we possess the expertise and capability to consistently
              deliver high-quality services to our clients swiftly and efficiently.
            </p>
            <div className="about_banner_wrapper">
              <div className="about_banner_card_wrapper">
                <span>10,000,000+</span>
                <p>Words Translated</p>
              </div>
              <div className="about_banner_card_wrapper">
                <span>10,000+</span>
                <p>Clients Served</p>
              </div>
            </div>
          </div>

          <div className="about_image_container">
            <div className="about_image_wrapper">
              <LazyLoad height={200} offset={100} placeholder={<div>Loading...</div>}>
                <img src={image3} alt="Wika Translate" style={{ width: '100%', height: 'auto' }} />
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
