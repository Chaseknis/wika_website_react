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

export default getDescription;
