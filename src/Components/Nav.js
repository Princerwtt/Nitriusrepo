import React from 'react';
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        LOGO
      </div>
      <div className="navbar__right">
        <ul className="navbar__menu">
          <li>ADMISSION</li>
          <li>COUNSELLING</li>
          <li>MORE</li>
        </ul>
        <button className="enquire__button">Enquire</button>
      </div>
    </nav>
  );
};

export default Navbar;
