import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

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

export default FAQItem;
