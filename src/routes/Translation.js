import React, { useState, useRef, useEffect } from 'react';
import './styles/translation.css';

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

  const getDescription = (stepTitle) => {
    switch (stepTitle) {
      case 'Translation':
        return 'We provide highly accurate translations that maintain the original meaning and context of your documents. Every detail is carefully considered to ensure that nothing is lost in translation, resulting in a flawless representation of your message. Our goal is to deliver translations that are clear, precise, and true to the original.';
      case 'Proofreading':
        return 'Your documents undergo a rigorous proofreading process designed to identify and correct errors in verbiage, syntax, spelling, and grammar. Our meticulous attention to detail ensures that your text is polished and error-free, enhancing its clarity and professionalism. We strive to deliver documents that meet the highest standards of quality and accuracy.';
      case 'Editing':
        return 'The editing phase entails a thorough review of your documents with a fresh perspective. Our experienced editors carefully assess the content for clarity, coherence, and flow, ensuring that your message is effectively communicated. This process involves restructuring sentences, refining language, and enhancing overall readability, resulting in polished and engaging documents.';
      case 'Final Review':
        return 'Following extensive edits, we conduct a comprehensive final review of every aspect of the translated material to ensure absolute accuracy. Our meticulous process involves checking for consistency in terminology, clarity of expression, and adherence to original intent. This final step guarantees that the document meets the highest standards of quality and precision.';
      case 'Delivery':
      default:
        return 'The final product is delivered promptly, ensuring that you receive your translated document within the agreed-upon timeframe. Our commitment to timely delivery reflects our dedication to meeting your expectations. We understand the importance of deadlines and strive to provide you with a seamless experience, complete with high-quality translations ready for use.';
    }
  };

  // Define SVG icons for each step
  const getStepIcon = (stepTitle) => {
    switch (stepTitle) {
      case 'Translation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
          </svg>
        );
      case 'Proofreading':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
          </svg>
        );
      case 'Editing':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a3.375 3.375 0 00-4.775 0L3.112 12.462a8.251 8.251 0 00-2.362 5.325l-.117 1.05a1.125 1.125 0 001.25 1.25l1.05-.117a8.25 8.25 0 005.325-2.362l8.975-8.975a3.375 3.375 0 000-4.775zM19.875 8.625l-6 6" />
          </svg>
        );
      case 'Final Review':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg>
        );
      case 'Delivery':
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
          </svg>
        );
    }
  };

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
