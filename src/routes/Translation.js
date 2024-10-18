import React, { useState, useRef, useEffect } from 'react';
import './styles/translation.css';
import getDescription from '../components/logic/getDescription';
import getStepIcon from '../components/logic/getStepIcon';

function Translation() {
  const [openSteps, setOpenSteps] = useState([false, false, false, false, false]);
  const contentRefs = useRef([]);

  const toggleContent = (index) => {
    const newOpenSteps = [...openSteps];
    newOpenSteps[index] = !newOpenSteps[index];
    setOpenSteps(newOpenSteps);
  };

  useEffect(() => {
    openSteps.forEach((isOpen, index) => {
      if (isOpen && contentRefs.current[index]) {
        contentRefs.current[index].style.maxHeight = `${contentRefs.current[index].scrollHeight}px`;
      } else if (contentRefs.current[index]) {
        contentRefs.current[index].style.maxHeight = '0px';
      }
    });
  }, [openSteps]);

  return (
    <section className="translation" id="translation">
      <div className="translation_section-container">
        <div className="translation_one">
          <div className="heading-container">
            <div className="translation_page_title">
              <h2>
                Translation
                <hr />
              </h2>

              <p>
                Our document processing undergoes a meticulous five-step procedure, ensuring
                precision, reliability, and timely delivery to clients. The process begins with a
                professional translation, followed by thorough proofreading to eliminate any
                errors. Next, meticulous editing is conducted to enhance clarity and flow,
                ensuring the document is polished. This is followed by a final comprehensive
                review to certify it&apos;s readiness for dissemination.
              </p>
            </div>
            <p className="translation_second_paragraph">
              Once approved, the document is securely delivered to the client. This approach
              guarantees that every document meets our strict quality standards, accurately
              conveying the intended message and instilling confidence in our clients&apos;
              communications.
            </p>
          </div>

        </div>
        <div className="translation_two">
          <div className="steps-container">
            {['Translation', 'Proofreading', 'Editing', 'Final Review', 'Delivery'].map((stepTitle, index) => (
              <div className="step-item" key={stepTitle}>
                <div className="icon-container">
                  <div className="icon_and_title_container">
                    {getStepIcon(stepTitle)}
                    {' '}
                    {/* Dynamically assign icon */}
                    <h3 className="step-title">{stepTitle}</h3>
                  </div>
                  <div className="expand_icons">
                    {!openSteps[index] ? (
                      <button type="button" aria-label="expand" className="expand_icons_button expand" onClick={() => toggleContent(index)}>
                        <i className="uil uil-plus" />
                      </button>
                    ) : (
                      <button type="button" aria-label="close" className="expand_icons_button close" onClick={() => toggleContent(index)}>
                        <i className="uil uil-minus" />
                      </button>
                    )}
                  </div>
                </div>

                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className={`step-content ${openSteps[index] ? 'open' : ''}`}
                >
                  <p className="step-description">
                    {getDescription(stepTitle)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Translation;
