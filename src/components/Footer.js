import React from 'react';

const Footer = ({ title }) => {
  return (
    <footer>
      <p>{title}</p>
      <div className="timestamp">
        <i className="far fa-calendar-check"></i> Last Updated: {new Date().toLocaleDateString()}
      </div>
      <div className="contact-section">
        <h3>Connect with Me</h3>
        <p>For questions or discussions about these notes:</p>
        <a href="https://instagram.com/_shankar_831/" target="_blank" rel="noreferrer" className="contact-link">
          <i className="fab fa-instagram"></i>
          Instagram: @_shankar_831
        </a>
      </div>
    </footer>
  );
};

export default Footer;
