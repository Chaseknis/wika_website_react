import React from 'react';
// import videoBg1 from '../assets/videoBg1.mp4';
// import videoBg2 from '../assets/videoBg2.mp4';
// import videoBg3 from '../assets/videoBg3.mp4';
// import videoBg4 from '../assets/videoBg4.mp4';
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
