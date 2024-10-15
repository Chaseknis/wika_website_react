import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select'; // Ensure you import Select from react-select
import countryList from 'react-select-country-list'; // Import country list from react-select-country-list
import './styles/quotation.css';
import ContactDetails from './contactDetails';

function Quotation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    organization: '',
    service: '',
    sourceLanguage: '',
    targetLanguage: '',
    message: '',
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(null); // For selected country

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const {
      name, email, sourceLanguage, targetLanguage, message,
    } = formData;

    if (!name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!sourceLanguage.trim() || !targetLanguage.trim()) {
      setError('Source and Target languages are required');
      return false;
    }
    if (!message.trim()) {
      setError('Message is required');
      return false;
    }

    setError('');
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'file' && !formData[key]) return;
      form.append(key, formData[key]);
    });
    form.append('phone', phone); // Add phone number with country code
    form.append('location', country.value); // Add selected country value

    try {
      const response = await fetch('https://getform.io/f/amdpvqrb', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          location: '',
          organization: '',
          service: '',
          sourceLanguage: '',
          targetLanguage: '',
          message: '',
          file: null,
        });
        setPhone(''); // Reset phone input
        setCountry(null); // Reset country selection
        setSuccessMessage('Form submitted successfully!');
      } else {
        setError('Form submission failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quotation-form">
      <div className="text-section">
        <div className="text_section_wrapper">
          <h2>
            Get a Quotation
            <hr />
          </h2>
          <p>
            Wika Translate serves as a hub for language experts from across the globe,
            boasting a network of over 800 translators and interpreters. With this extensive
            pool of talent, we possess the expertise and capability to consistently deliver
            high-quality services to our clients swiftly and efficiently.
          </p>
        </div>
        <ContactDetails />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit} className="contact-form" encType="multipart/form-data">
        <div className="quotation_input_wrapper">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://127.0.0.1:5555/#contact-us" />

          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Phone Number with Country Code */}
          <PhoneInput
            country="us"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputClass="input"
            className="phone_input"
            required
          />

          {/* Email Address */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Country Selection */}
        <Select
          options={countryList().getData()} // Get country list data
          value={country}
          onChange={setCountry}
          placeholder="Select Your Country"
          className="select_country"
          required
        />

        <div className="quotation_input_wrapper">

          {/* Organization */}
          <input
            type="text"
            name="organization"
            placeholder="Organization"
            className="input"
            value={formData.organization}
            onChange={handleChange}
          />

          {/* Service Inquiry */}
          <select
            name="service"
            className="input"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a Service</option>
            <option value="translation">Translation</option>
            <option value="interpretation">Interpretation</option>
            <option value="subtitling">Subtitling</option>
            <option value="transcription">Transcription</option>
            <option value="localization">Localization</option>
            <option value="online-interpretation">Online Interpretation</option>
          </select>
        </div>

        <div className="quotation_input_wrapper">
          {/* Source Language */}
          <input
            type="text"
            name="sourceLanguage"
            placeholder="Source Language"
            className="input"
            value={formData.sourceLanguage}
            onChange={handleChange}
            required
          />

          {/* Target Language */}
          <input
            type="text"
            name="targetLanguage"
            placeholder="Target Language"
            className="input"
            value={formData.targetLanguage}
            onChange={handleChange}
            required
          />

          {/* File Upload */}
          <input
            type="file"
            name="file"
            className="input"
            onChange={handleFileChange}
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          rows="8"
          className="input"
          value={formData.message}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button type="submit" className="button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default Quotation;
