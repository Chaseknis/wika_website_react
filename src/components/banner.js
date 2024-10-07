import React from 'react';
import './styles/banner.css';

function Banner() {
  return (
    <div id="banner" className="banner">
      <div className="banner_container">
        <div className="banner_wrapper">

          {/* 100+ Meetings */}
          <div className="banner_text_container">
            <h4 id="translators" className="banner_text_title">100+</h4>
            <div className="banner_details">
              <h2 id="database" className="banner_text_subtitle">Conferences</h2>
              <p className="banner_description">Passion and dedication</p>
            </div>
          </div>

          {/* 100% Accuracy */}
          <div className="banner_text_container">
            <h4 id="accuracy" className="banner_text_title">100%</h4>
            <div className="banner_details">
              <h2 id="rate" className="banner_text_subtitle">Accuracy</h2>
              <p className="banner_description">Years of Experience</p>
            </div>
          </div>

          {/* 150+ Languages */}
          <div className="banner_text_container">
            <h4 id="languages" className="banner_text_title">150+</h4>
            <div className="banner_details">
              <h2 id="lnggs" className="banner_text_subtitle">Languages</h2>
              <p className="banner_description">We see the clear vision</p>
            </div>
          </div>

          <div className="banner_text_container">
            <h4 id="languages" className="banner_text_title">1000+</h4>
            <div className="banner_details">
              <h2 id="lnggs" className="banner_text_subtitle">Database of Translators</h2>
              <p className="banner_description">Global Presence</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banner;
