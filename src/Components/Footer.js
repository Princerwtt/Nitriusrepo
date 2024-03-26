import React from 'react';
import './Footer.css';
import Image from './Image/124010.png';
import ImageIn from './Image/Instagram.webp';
import ImageTw from './Image/twiter.png';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="left">
        <p>Copyright ® 2020. All Rights Reserved</p>
        <p>'GRE® and TOEFL have registered trademarks.</p>
      </div>
      <div className="right">
        <img src={Image} alt="Facebook" className="icon" />
        <img src={ImageIn} alt="Instagram" className="icon" />
        <img src={ImageTw} alt="Twitter" className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
