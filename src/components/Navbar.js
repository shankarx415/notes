import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="page-links">
            <NavLink to="/it" className="page-link" onClick={closeMenu}>
              <i className="fas fa-network-wired"></i> Networks & E-commerce
            </NavLink>
            <NavLink to="/english" className="page-link" onClick={closeMenu}>
              <i className="fas fa-language"></i> English Grammar
            </NavLink>
            <NavLink to="/" className="page-link" onClick={closeMenu}>
              <i className="fas fa-bolt"></i> BEEE
            </NavLink>
            {/* Add the C Programming Link Here */}
            <NavLink to="/c-programming" className="page-link" onClick={closeMenu}>
              <i className="fas fa-code"></i> C Programming
            </NavLink>
          </div>
          <a href="https://instagram.com/_shankar_831/" target="_blank" rel="noreferrer" className="social-link">
            <i className="fab fa-instagram"></i> Follow
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;