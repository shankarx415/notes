import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      <div className="subtitle">{subtitle}</div>
      <div className="author-badge">
        <i className="fas fa-user-graduate"></i> Prepared by Shankar | Academic Resource
      </div>
    </header>
  );
};

export default Header;
