import React from 'react';
import './styles/services.css';
import cropped from '../assets/cropped.png';

function Services() {
  return (
    <section className="services" id="services">
      <div className="services_container" />
      <div className="services_wrapper">
        <div className="services_header">
          <div data-aos="zoom-in-right">
            <h1 className="services_title">Services</h1>
          </div>
          <div data-aos="zoom-out-up">
            <h2 className="services_subtitle">A Leading Translation Agency</h2>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="services_grid"
        >
          {/* Image */}
          <div
            data-aos="zoom-out"
            className="services_image_wrapper"
          >
            <img
              src={cropped}
              className="services_image"
              alt="cropped"
            />
          </div>

          {/* Translation */}
          <div className="services_card">
            <div className="service_icon_text">
              <i className="fa-solid fa-language service_icon" />
              <h3 className="service_title">Translation</h3>
            </div>
            <p className="service_description">
              We offer professional translation services in 100+ languages in Legal,
              Technical, Science, Agriculture and Business Fields Etc..
            </p>
          </div>

          {/* Interpreting */}
          <div className="services_card">
            <div className="service_icon_text">
              <i className="fa-solid fa-headset service_icon" />
              <h3 className="service_title">Interpreting</h3>
            </div>
            <p className="service_description">
              Simultaneous and Consecutive interpreting, Hiring interpretation equipment
              and Escorting Interpretation.
            </p>
          </div>

          {/* Subtitling */}
          <div className="services_card">
            <div className="service_icon_text">
              <i className="fa-solid fa-closed-captioning service_icon" />
              <h3 className="service_title">Subtitling</h3>
            </div>
            <p className="service_description">
              Translating spoken dialogue From Transcripts, screenplay, commentary in
              films and television programs, Video games into written text on the screen.
            </p>
          </div>

          {/* Transcription */}
          <div className="services_card">
            <div className="service_icon_text">
              <i className="fa-solid fa-file-lines service_icon" />
              <h3 className="service_title">Transcription</h3>
            </div>
            <p className="service_description">
              We provide transcription services for videos or audio-recordings of any length
              or any language.
            </p>
          </div>

          {/* Localization */}
          <div className="services_card">
            <div className="service_icon_text">
              <i className="fa-solid fa-earth-americas service_icon" />
              <h3 className="service_title">Localization</h3>
            </div>
            <p className="service_description">
              We address cultural and non-textual components as well as linguistic issues
              when adapting a product or service for another country or locale.
            </p>
          </div>

          {/* Government */}
          <div className="services_card">
            <div className="service_icon_text">
              <i className="fa-sharp fa-solid fa-landmark service_icon" />
              <h3 className="service_title">Government</h3>
            </div>
            <p className="service_description">
              We work with federal, state and local government offices. With trust
              and outstanding level of confidentiality, we provide high-quality
              services.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Services;
