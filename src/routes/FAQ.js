import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './styles/faq.css';
import OurPartners from '../components/ourPartners';

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

function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <div>
            <h2 className="faq-title">
              FAQ
              <hr />
            </h2>
            <p className="faq-paragraph">
              At Wika Translate Ltd, our clients are at the heart of everything we do.
              We pride ourselves on delivering tailored language solutions that not only meet
              but exceed expectations, with an unwavering commitment to professionalism and
              integrity. Our diverse clientele ranges from multinational corporations to
              individuals, each benefiting from our customized services designed to address
              their unique needs.
            </p>
          </div>
          <p className="faq-paragraph-two">
            By fostering trust and cultivating long-term partnerships, we ensure seamless
            communication across languages and cultures. Our focus is on delivering outstanding
            results, ensuring successful communication outcomes for every client and strengthening
            relationships that endure over time.
          </p>
        </div>

        <div className="faq-content-wrapper">
          <div className="faq-list-container">
            <FAQItem
              question="How do you ensure the accuracy of your translation services?"
              answer="At Wika Translate, we prioritize quality and uphold a strong commitment to our reputation. Each project is assigned to a team of experienced translators specializing in the relevant field, ensuring we deliver the highest standard of service in the industry."
            />
            <FAQItem
              question="What is the difference between a certified and a notarized translation?"
              answer="A certified translation is completed, signed, and sealed by a professional translator, ensuring its accuracy. A notarized translation involves translating official documents that are then authenticated by a public notary. If you're unsure which type of translation you need, feel free to contact us at any time for guidance."
            />
            <FAQItem
              question="Can you translate and certify my birth certificate?"
              answer="Yes, Wika Translate offers certified translations for a wide range of official documents, including birth certificates, degrees, transcripts, police clearances, death certificates, divorce documents, marriage and celibacy certificates, among others."
            />
            <FAQItem
              question="How can I send my documents for translation?"
              answer="You can email your documents to info@wikatranslate.net. We’ll review them and provide you with a FREE quote in less than 10 minutes."
            />
            <FAQItem
              question="How long does it take to translate my documents?"
              answer="The turnaround time depends on the size, complexity, and languages required for your project. We invite you to contact us to discuss your specific needs, and we’ll always strive to exceed your expectations within any deadline."
            />
            <FAQItem
              question="What are your payment methods and terms?"
              answer="We accept payments via Debit/Credit card (POS), Mobile Money, WorldRemit, checks, and bank transfers. Payment is typically requested in advance."
            />
            <FAQItem
              question="What currencies do you accept?"
              answer="We accept payments in USD and Rwandan Francs. However, we are flexible and open to discussing other currency options based on your needs."
            />
          </div>

        </div>
      </div>
      <OurPartners />
    </section>
  );
}

export default FAQ;
