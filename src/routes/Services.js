import React from 'react';
import './styles/services.css';
import Banner from '../components/banner';

function Services() {
  return (
    <section className="services" id="services">
      <Banner />
      <div className="header_wrapper">
        <div className="faq-header">
          <div>
            <h2 className="services-title">
              Our Services
              <hr />
            </h2>
            <p className="services-paragraph">
              At Wika Translate Ltd, we specialize in bridging language barriers and enhancing
              communication for businesses and individuals alike. Our diverse range of services
              is designed to meet all your linguistic needs. From precise Translation that
              resonates with your target audience to expert Interpretation services, including
              simultaneous interpretation for conferences and events, we ensure your message
              is conveyed clearly. We also provide rental of advanced tour guide system equipment
              for seamless multilingual experiences. Our Subtitling and Transcription services cater
              to media production and documentation, ensuring clarity and accessibility for all.
            </p>
          </div>
          <p className="services-paragraph-two">
            Additionally, our Localization services transform your products and services to align
            with local cultures, making them more relevant and appealing. With a dedicated team of
            professionals and the latest technology at our disposal, Wika Translate Ltd is your
            trusted partner for effective communication in today’s global landscape. Let us help
            you connect with your audience like never before!
          </p>
        </div>
      </div>

      <div className="wrapper">
        <div className="services_container">
          <input type="radio" name="slide" id="c1" checked />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="c1" className="services_card">
            <div className="services_row">
              <div className="services_icon">1</div>
              <div className="services_description">
                <h3>Translation</h3>
                <p>
                  We offer professional translation services in 100+ languages in Legal,
                  Technical, Science, Agriculture, and Business Fields, etc.
                </p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="c2" className="services_card">
            <div className="services_row">
              <div className="services_icon">2</div>
              <div className="services_description">
                <h3>Interpretation</h3>
                <p>
                  Simultaneous and Consecutive interpreting, Hiring interpretation equipment
                  and Escorting Interpretation.
                </p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="c3" className="services_card">
            <div className="services_row">
              <div className="services_icon">3</div>
              <div className="services_description">
                <h3>Subtitling</h3>
                <p>
                  Translating spoken dialogue From Transcripts, screenplay,
                  commentary in films and television programs, Video games into written text
                  on the screen.
                </p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c4" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="c4" className="services_card">
            <div className="services_row">
              <div className="services_icon">4</div>
              <div className="services_description">
                <h3>Transcription</h3>
                <p>
                  We provide transcription services for videos or audio-recordings of
                  any length or any language.
                </p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c5" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="c5" className="services_card">
            <div className="services_row">
              <div className="services_icon">5</div>
              <div className="services_description">
                <h3>Localization</h3>
                <p>
                  We address cultural and non-textual components as well as linguistic
                  issues when adapting a product or service for another country or locale.
                </p>
              </div>
            </div>
          </label>

        </div>
      </div>

    </section>
  );
}

export default Services;
