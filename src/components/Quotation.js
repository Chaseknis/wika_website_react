import React from 'react';
import './styles/quotation.css';

function Quotation() {
  return (
    <div className="quotation-form">
      <h1>Get a Quick Quotation</h1>
      <form>

        <input type="text" id="name" name="name" aria-label="Enter your name" />

        <input type="email" id="email" name="email" aria-label="Enter your email" />

        <textarea id="projectDetails" name="projectDetails" aria-label="Enter project details" />

        <button type="submit" aria-label="Submit the form">Submit</button>
      </form>
    </div>

  );
}

export default Quotation;
