import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    const dropdownLinks = dropdownRef.current?.querySelectorAll("a");
    const handleLinkClick = () => {
      setIsMenuActive(false);
    };

    dropdownLinks?.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      dropdownLinks?.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <header>
      <h1>Welcome to Mihiret Bonda 😊</h1>
      <nav>
        <div className="navContainer">
          <a href="#home">Home</a>
          <a href="#about_us">About Us</a>
          <a href="#product_service">Products & Services</a>
          <a href="#contact">Contact</a>
          <a href="#location">Location</a>
        </div>

        <i
          className="hamburg"
          id="hamburg"
          onClick={toggleMobileMenu}
          aria-label="Open mobile menu"
          aria-expanded={isMenuActive}
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </i>

        <div
          className={`dropdown ${isMenuActive ? "active" : ""}`}
          id="dropdown"
          ref={dropdownRef}
        >
          <i
            className="cancel"
            id="cancel"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          ></i>
          <a href="#home">Home</a>
          <a href="#about_us">About Us</a>
          <a href="#product_service">Products & Services</a>
          <a href="#contact">Contact</a>
          <a href="#location">Location</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;