import React from 'react';
import './styles/translation.css';

function Translation() {
  return (
    <section className="translation" id="translation">
      <div className="section-container">
        <div className="heading-container">
          <div data-aos="zoom-in-right">
            <h1 className="main-title">Translation</h1>
          </div>
          <div data-aos="zoom-out-up">
            <h2 className="sub-title">Our Essential 5-Step Quality Control</h2>
          </div>
        </div>

        <div className="steps-container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          {/* Translation Step */}
          <div className="step-item">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
              </svg>
            </div>
            <div className="step-content">
              <h3 className="step-title">Translation</h3>
              <p className="step-description">
                Your documents are translated accurately to perfection while preserving the meaning.
              </p>
            </div>
          </div>

          {/* Proofreading Step */}
          <div className="step-item">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            </div>
            <div className="step-content">
              <h3 className="step-title">Proofreading</h3>
              <p className="step-description">
                Your documents pass through an intense proofreading to check verbiage, syntax,
                spelling, and grammar.
              </p>
            </div>
          </div>

          {/* Editing Step */}
          <div className="step-item">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a3.375 3.375 0 00-4.775 0L3.112 12.462a8.251 8.251 0 00-2.362 5.325l-.117 1.05a1.125 1.125 0 001.25 1.25l1.05-.117a8.25 8.25 0 005.325-2.362l8.975-8.975a3.375 3.375 0 000-4.775zM19.875 8.625l-6 6" />
              </svg>
            </div>
            <div className="step-content">
              <h3 className="step-title">Editing</h3>
              <p className="step-description">
                The editing phase involves going through all your documents with a fresh set
                of eyes.
              </p>
            </div>
          </div>

          {/* Final Review Step */}
          <div className="step-item">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            </div>
            <div className="step-content">
              <h3 className="step-title">Final Review</h3>
              <p className="step-description">
                After thorough edits, we review every part of the translated material for accuracy.
              </p>
            </div>
          </div>

          {/* Delivery Step */}
          <div className="step-item">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.485 0 4.5 2.015 4.5 4.5S14.485 12 12 12 7.5 9.985 7.5 7.5 9.515 3 12 3zm0 0c2.485 0 4.5 2.015 4.5 4.5S14.485 12 12 12 7.5 9.985 7.5 7.5 9.515 3 12 3zm0 6.75v4.75m0 0v4.75m0-9.75v4.75m0-4.75v4.75" />
              </svg>
            </div>
            <div className="step-content">
              <h3 className="step-title">Delivery</h3>
              <p className="step-description">
                The final product is delivered on time, ensuring you receive your translated
                document as expected.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Translation;
