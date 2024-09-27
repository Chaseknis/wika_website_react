import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import videoBg5 from '../assets/videoBg5.mp4';
import './styles/home.css';
import Socials from '../components/socials';
import Carousel from '../components/carousel';
import ScrollDown from '../components/scrollDown';
// import Quotation from '../components/Quotation';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const transition = { type: 'spring', duration: 3 };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Rotate between 0, 1, and 2
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const titles = [
    ['A Home', ' to Professional', ' Language Experts'],
    ['Certified', ' Translation', ' Services in Kigali'],
    ['Simultaneous', ' Interpretation', ' Services in Kigali'],
  ];

  return (
    <section id="home" className="home">
      <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted>
        <track kind="captions" srcLang="en" label="English" />
      </video>
      <div className="overlay" />
      <div className="home_container">
        <div className="home_wrapper">
          <div className="half_one_wrapper">
            <div className="best_ad">
              <motion.div
                initial={{ left: '238px' }}
                whileInView={{ left: '8px' }}
                transition={{ ...transition, type: 'tween' }}
              />
              <span>
                Wika
              </span>
              <span>
                Translate
              </span>
            </div>
            <div className="home_title">
              {titles.map((title, index) => (
                <h1
                  key={title.join('-')}
                  className={`title ${activeIndex === index ? 'active' : 'hidden'}`}
                >
                  <span className="stroke_text">{title[0]}</span>
                  <span>{title[1]}</span>
                  <span>{title[2]}</span>
                </h1>
              ))}
            </div>
            <div>
              <p className="home_paragraph">
                Wika Translate is East Africa’s professional translation provider.
                we have committed ourselves to pushing the boundaries of language service
                through the development of smarter and more efficient solutions based on
                cutting-edge technology and talented people.
              </p>
              <Link to="/contact">
                <button className="quotation_button button" type="button">
                  Get a quick Quotation
                </button>
              </Link>
            </div>
          </div>
          <Carousel />
        </div>

        <div className="socials_and_scroll">
          <ScrollDown />
          <Socials />
        </div>
      </div>
    </section>
  );
}

export default Home;
