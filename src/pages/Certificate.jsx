import React from 'react';
import './Certificate.css';

const Certificate = () => {
  return (
    <div className="certificate-page">
      <h2>My Certifications</h2>
      <div className="certificate-card">
        <h3>ALX Professional Foundation Certificate</h3>
        <p>Issued by: ALX Africa</p>
        <p>Issued on: 5th August 2025</p>
        <a
          href="https://savanna.alxafrica.com/certificates/pZFCexhPn3"
          target="_blank"
          rel="noopener noreferrer"
          className="view-button"
        >
          View Verification
        </a>
      </div>
    </div>
  );
};

export default Certificate;
