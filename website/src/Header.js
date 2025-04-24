import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './images/favicon.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={`${styles.title} ${styles.inActiveStyle} `}>
          <img src={logo} alt="Logo unload" height={60} />
          The Dream Marketing
        </NavLink>
      <div
        className={styles.menu}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? styles.open : ""}>
        <li>
          <NavLink to="/" onClick={handleNavLinkClick} className={({ isActive }) =>
                isActive ? styles.ActiveStyle : styles.inActiveStyle}>Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs" onClick={handleNavLinkClick} className={({ isActive }) =>
                isActive ? styles.ActiveStyle : styles.inActiveStyle}>About
          </NavLink>
        </li>
        <li>
          <NavLink to="/ContactUs" onClick={handleNavLinkClick} className={({ isActive }) =>
                isActive ? styles.ActiveStyle : styles.inActiveStyle}>Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
