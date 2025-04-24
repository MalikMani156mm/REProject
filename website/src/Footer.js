import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Social media icons

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:usamaali@gmail.com">usamaali@gmail.com</a></p>
        <p>Phone: <a href="tel:+923355181828">+92 335 5181828</a></p>
      </div>

      <div className="footer-section">
        <h2>Quick Links</h2>
        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/AboutUs")}>About Us</p>
        <p onClick={() => navigate("/ContactUs")}>Contact</p>
      </div>

      <div className="footer-section">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/198b9nEe4n/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/usama_ali1828?igsh=MXQ5OHZoYnVqYjd2eA==&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/923355181828" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
