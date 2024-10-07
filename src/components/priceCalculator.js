import React, { useState } from 'react';
import './styles/priceCalculator.css';
import mammoth from 'mammoth'; // For .docx files
import * as pdfjsLib from 'pdfjs-dist/build/pdf'; // For PDFs
import emailjs from 'emailjs-com'; // Import EmailJS

// Manually specify the PDF.js worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

function PriceCalculator() {
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('English');
  const [email, setEmail] = useState(''); // State for email
  const [wordCount, setWordCount] = useState(0);
  const [volume, setVolume] = useState('');
  const [notification, setNotification] = useState(''); // State for notifications

  // Language List
  const languages = [
    'English', 'French', 'Kinyarwanda', 'Arabic', 'Spanish', 'German', 'Italian',
    'Swahili', 'Portuguese', 'Chinese', 'Japanese', 'Russian', 'Hindi', 'Bengali',
    'Urdu', 'Persian', 'Turkish', 'Thai', 'Vietnamese', 'Korean', 'Polish',
    'Dutch', 'Greek', 'Hebrew', 'Czech', 'Hungarian', 'Romanian', 'Serbian',
    'Croatian', 'Malay', 'Filipino', 'Tamil', 'Telugu', 'Punjabi', 'Indonesian',
    'Danish', 'Swedish', 'Norwegian', 'Finnish', 'Icelandic', 'Afrikaans',
    'Amharic', 'Burmese', 'Bulgarian', 'Catalan', 'Cebuano', 'Chichewa', 'Dzongkha',
    'Estonian', 'Fijian', 'Finnish', 'Georgian', 'Gujarati', 'Haitian Creole',
    'Hausa', 'Irish', 'Javanese', 'Kannada', 'Kazakh', 'Khmer', 'Kurdish',
    'Kyrgyz', 'Lao', 'Latvian', 'Lithuanian', 'Luxembourgish', 'Macedonian',
    'Malagasy', 'Maltese', 'Mongolian', 'Nepali', 'Pashto', 'Samoan', 'Shona',
    'Sinhala', 'Slovak', 'Slovenian', 'Somali', 'Sundanese', 'Tajik', 'Tatar',
    'Tigrinya', 'Tongan', 'Turkmen', 'Ukrainian', 'Uzbek', 'Wolof', 'Xhosa',
    'Yoruba', 'Zulu', 'Basque', 'Galician', 'Welsh', 'Scots Gaelic', 'Maori',
    'Inuktitut', 'Quechua', 'Aymara', 'Tswana', 'Faroese', 'Guarani', 'Kirundi',
  ];

  const handleSourceLanguageChange = (e) => setSourceLanguage(e.target.value);
  const handleTargetLanguageChange = (e) => setTargetLanguage(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value); // Update email state

  // Function to send email with calculated price
  const sendEmail = (calculatedPrice) => {
    const templateParams = {
      to_email: email,
      from_email: 'wikatranslate@gmail.com',
      price: calculatedPrice,
      sourceLanguage,
      targetLanguage,
    };

    emailjs.send('service_w3zwqrf', 'template_pyec1ge', templateParams, 'pNQjjYBL7WAJAVeWv')
      .then(() => {
        setNotification('Email sent successfully!'); // Notify user
      })
      .catch(() => {
        setNotification('Failed to send email. Please try again later.'); // Notify user
      });
  };

  // Classify document as low or high volume based on word count
  const classifyVolume = (words) => {
    if (words <= 5000) {
      setVolume('low');
    } else {
      setVolume('high');
    }
  };

  const calculatePrice = () => {
    const isSpecialLanguage = !['English', 'French', 'Kinyarwanda'].includes(sourceLanguage)
      || !['English', 'French', 'Kinyarwanda'].includes(targetLanguage);

    const pages = Math.ceil(wordCount / 300); // Assuming 300 words per page

    let calculatedPrice;

    if (volume === 'low') {
      calculatedPrice = isSpecialLanguage ? pages * 45900 : pages * 23900;
    } else {
      calculatedPrice = isSpecialLanguage ? wordCount * 140 : wordCount * 90;
    }

    // Send price via email
    sendEmail(calculatedPrice);
  };

  // Function to extract text from a PDF file and count words
  const countWordsInPdf = async (file) => {
    const fileReader = new FileReader();
    fileReader.onload = async (e) => {
      const typedarray = new Uint8Array(e.target.result);
      const pdfDoc = await pdfjsLib.getDocument(typedarray).promise;

      // Extract text from each page in parallel
      const pagePromises = Array.from({ length: pdfDoc.numPages }, (_, index) => pdfDoc.getPage(index + 1).then((page) => page.getTextContent().then((content) => content.items.map((item) => item.str).join(' '))));

      const textResults = await Promise.all(pagePromises);
      const text = textResults.join(' ');
      const words = text.trim().split(/\s+/).length;
      setWordCount(words);
      classifyVolume(words);
    };

    fileReader.readAsArrayBuffer(file);
  };

  // Function to extract text from a .docx file using Mammoth and count words
  const countWordsInDocx = async (file) => {
    const fileReader = new FileReader();
    fileReader.onload = async (e) => {
      const arrayBuffer = e.target.result;
      const result = await mammoth.extractRawText({ arrayBuffer });
      const words = result.value.trim().split(/\s+/).length;
      setWordCount(words);
      classifyVolume(words);
    };

    fileReader.readAsArrayBuffer(file);
  };

  // Handle file uploads and detect the file type for word count calculation
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    const fileType = uploadedFile.type;

    if (fileType === 'application/pdf') {
      countWordsInPdf(uploadedFile);
    } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      countWordsInDocx(uploadedFile);
    } else if (fileType === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const words = text.trim().split(/\s+/).length;
        setWordCount(words);
        classifyVolume(words);
      };
      reader.readAsText(uploadedFile);
    } else {
      setNotification('Please upload a valid PDF, DOCX, or TXT file.'); // Notify user
    }
  };

  return (
    <div className="price-calculator">
      <h2>
        Translation Price Calculator
      </h2>

      {/* Source Language Selection */}
      <select id="sourceLanguage" value={sourceLanguage} onChange={handleSourceLanguageChange}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>

      {/* Target Language Selection */}
      <select id="targetLanguage" value={targetLanguage} onChange={handleTargetLanguageChange}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>

      {/* Email Input */}
      <input
        type="email"
        id="emailInput"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        required
      />

      {/* File Upload */}
      <input type="file" className="file_upload" id="fileUpload" onChange={handleFileUpload} accept=".pdf, .docx, .txt" />

      {/* Word Count Display */}
      {wordCount > 0 && (
        <p>
          Word Count:
          {' '}
          {wordCount}
        </p>
      )}

      {/* Volume Classification */}
      {volume && (
        <p>
          Document Classified as:
          {' '}
          {volume === 'low' ? 'Low Volume' : 'High Volume'}
        </p>
      )}

      {/* Notification Message */}
      {notification && <p>{notification}</p>}
      {' '}
      {/* Display notification message */}

      {/* Calculate Price Button */}
      <button type="button" onClick={calculatePrice}>Send Price</button>
    </div>
  );
}

export default PriceCalculator;
