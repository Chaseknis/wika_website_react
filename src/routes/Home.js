import React, { useRef, useEffect } from 'react';
import videoBg5 from '../assets/videoBg5.mp4';
import './styles/home.css';
import Carousel from '../components/carousel';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <section id="home" className="home">
      <video ref={videoRef} src={videoBg5} className="bgVideo" autoPlay loop muted>
        <track kind="captions" srcLang="en" label="English" />
      </video>
      <div className="overlay" />
      <div className="header_container">

        <div className="half_one_wrapper">
          <h1 className="home_title">A Home to Professional Language Experts</h1>
          <h2>Wika Translate</h2>
        </div>

        <Carousel />
      </div>
    </section>
  );
};

export default Home;
