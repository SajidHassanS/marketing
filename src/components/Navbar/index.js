import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imagess/logo.png";
import "./style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg p-3">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon white-toggler-icon" />
        </button>

        {/* Nav Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/Aboutus" },
              { label: "Services", to: "/Services" },
              { label: "Price", to: "/Price" },
              { label: "Our Team", to: "/team" },
              { label: "Contact Us", to: "/Contactus" },
            ].map(({ label, to }) => (
              <li className="nav-item" key={label}>
                <Link className="nav-link" to={to} onClick={handleLinkClick}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
