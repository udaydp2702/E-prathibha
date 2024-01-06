import React from 'react';
import './footer.css'; 


function Footer() {
  const phoneNumber = '7059773567';
  const emailAddress = 'eprathibha@137gmail.com';

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
            Email: {emailAddress}
          </p>
          <p onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
            Phone: {phoneNumber}
          </p>
        </div>
        <div className="social-links">
          <h3>Connect with Us</h3>
          <a href="https://www.facebook.com/e-prathibha" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
