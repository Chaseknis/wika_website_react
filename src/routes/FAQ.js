import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './styles/faq.css';

function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="faq_container" />
      <div className="faq-container">
        <div className="faq-header">
          <div data-aos="zoom-in-right">
            <h1 className="faq-title">FAQ</h1>
          </div>
          <div data-aos="zoom-out-up">
            <h2 className="faq-subtitle">
              What People are curious about.
            </h2>
          </div>
        </div>

        <div className="faq-content-wrapper">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="faq-list-container"
          >
            <FAQItem
              question="How can I trust your translation Services accuracy?"
              answer="At Wika Translate we put quality first, and we are very protective when it comes to our reputation. We assign your project to the experienced team of translators in your related field, in order for us to deliver the best services in the industry."
            />
            <FAQItem
              question="What’s the difference between a certified and a notarized translation?"
              answer="Certified translation refers to translations done, signed and sealed by a professional translator. Notarized translation refers to official documents thoroughly and accurately translated from the source into the target language which are then authenticated by a public notary. We are always a call away if you happen to not be sure of what type of document you need, Contact us at anytime."
            />
            <FAQItem
              question="I have a birth certificate that I want translated and certified. Can you provide this service?"
              answer="Yes, Wika Translate provides certified translations for all official documents, such as Degrees, Transcripts, Police clearance, birth/death certificates, Divorce certificates, celibacy and marriage certificates etc.."
            />
            <FAQItem
              question="How can I send my documents to Wika Translate?"
              answer="You can Email your documents to info@wikatranslate.com and we will provide you with a FREE quote in less than 10 minutes."
            />
            <FAQItem
              question="How long will it take for my documents to be translated?"
              answer="The time we take to translate your documents will depend on your project size, document complexity and required language(s). We welcome you to contact us to discuss your individual requirements. We’ll always do our best to exceed your expectations, within any deadline."
            />
            <FAQItem
              question="What are your payment terms and methods?"
              answer="You can pay using your Debit/Credit card with our POS or Mobile Money, worldRemit, checks and bank transfers. Payment is requested in advance."
            />
            <FAQItem
              question="What currencies do you accept?"
              answer="We accept USD and Rwandan Francs, but we are flexible. Talk to us in case you want other options."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Define prop types for FAQItem
function FAQItem({ question, answer }) {
  return (
    <details className="faq-item">
      <summary className="faq-question">{question}</summary>
      <p className="faq-answer">{answer}</p>
    </details>
  );
}

// Add PropTypes validation
FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQ;
