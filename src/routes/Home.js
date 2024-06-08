import React, { useRef, useEffect } from 'react';
import videoBg5 from '../assets/videoBg5.mp4';
import './styles/home.css';

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
    </section>
  );
};

export default Home;
