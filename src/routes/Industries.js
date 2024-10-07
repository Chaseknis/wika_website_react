import React from 'react';
import './styles/industries.css';

function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <div className="industries-title-section">
          <div data-aos="zoom-in-right">
            <h1 className="industries-main-title">
              Industries
            </h1>
          </div>
          <div data-aos="zoom-out-up">
            <h2 className="industries-sub-title">
              We help your business expand Globally
            </h2>
          </div>
        </div>
        <div>
          <div className="industries-grid" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <div className="industry-item">
              <div className="industry-icon-container">
                <div className="industry-icon-background">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-scale"
                    width="2.5rem"
                    height="2.5rem"
                    viewBox="0 0 24 24"
                    strokeWidth="0.5"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="7" y1="20" x2="17" y2="20" />
                    <path d="M6 6l6 -1l6 1" />
                    <line x1="12" y1="3" x2="12" y2="20" />
                    <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
                    <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
                  </svg>
                </div>
              </div>
              <div className="industry-content">
                <h3 className="industry-title">
                  Legal
                </h3>
                <p className="industry-description">
                  Sworn, notarized, and certified legal document translations and court
                  interpreting services for any case. Our team of legal translators is comprised
                  of experts in every field of law.
                </p>
              </div>
            </div>
            <div className="industry-item">
              <div className="industry-icon-container">
                <div className="industry-icon-background">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-bank" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" strokeWidth="0.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="3" y1="21" x2="21" y2="21" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <polyline points="5 6 12 3 19 6" />
                    <line x1="4" y1="10" x2="4" y2="21" />
                    <line x1="20" y1="10" x2="20" y2="21" />
                    <line x1="8" y1="14" x2="8" y2="17" />
                    <line x1="12" y1="14" x2="12" y2="17" />
                    <line x1="16" y1="14" x2="16" y2="17" />
                  </svg>
                </div>
              </div>
              <div className="industry-content">
                <h3 className="industry-title">
                  Banking & Finance
                </h3>
                <p className="industry-description">
                  Professional translations for statements of assets and liabilities,
                  bank statements, financial models, and conference interpreting with
                  world-leading, certified language professionals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

export default Industries;
