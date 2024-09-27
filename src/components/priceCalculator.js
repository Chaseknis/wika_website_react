import React, { useState } from 'react';
import './styles/priceCalculator.css';
import mammoth from 'mammoth'; // For .docx files
import * as pdfjsLib from 'pdfjs-dist/build/pdf'; // For PDFs

// Manually specify the PDF.js worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

function PriceCalculator() {
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('English');
  const [wordCount, setWordCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [volume, setVolume] = useState('');

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
      calculatedPrice = isSpecialLanguage ? pages * 42900 : pages * 23900;
    } else {
      calculatedPrice = isSpecialLanguage ? wordCount * 145 : wordCount * 110;
    }

    setPrice(calculatedPrice);
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
      alert('Please upload a valid PDF, DOCX, or TXT file.');
    }
  };

  return (
    <div className="price-calculator">
      <h2>Translation Price Calculator</h2>

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

      {/* File Upload */}
      <input type="file" id="fileUpload" onChange={handleFileUpload} accept=".pdf, .docx, .txt" />

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
          Document classified as:
          {' '}
          {volume === 'low' ? 'Low Volume' : 'High Volume'}
        </p>
      )}

      {/* Calculate Price Button */}
      <button type="button" onClick={calculatePrice}>Calculate Price</button>

      {/* Price Display */}
      {price > 0 && (
        <h3>
          Total Price:
          {price}
          {' '}
          RWF
        </h3>
      )}
    </div>
  );
}

export default PriceCalculator;
