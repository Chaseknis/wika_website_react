import React from 'react';
import videoBg5 from '../assets/videoBg5.mp4';
import './styles/home.css';

const Home = () => (
  <section id="home">
    <video src={videoBg5} className="bgVideo" autoPlay loop muted>
      <track kind="captions" srcLang="e`1n" label="English" />
    </video>
  </section>
);

export default Home;
