import React from 'react';
import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-media">
          <h3>We Are Social</h3>
          <div className="social-icons">
            <a href="#">
              <span className="icon"><FaFacebook /></span>
            </a>
            <a href="#">
              <span className="icon"><FaXTwitter /></span>
            </a>
            <a href="#">
              <span className="icon"><FaInstagram /></span>
            </a>
            <a href="#">
              <span className="icon"><FaYoutube /></span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p style={{ paddingTop: 20 }}>
        © 2024 Imomotimi Foundation. All rights reserved.
      </p>
      <a href="#" id="scroll" title="Go to top">
        <FaArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
