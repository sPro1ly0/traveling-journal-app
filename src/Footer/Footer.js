import React from 'react';
import './Footer.css';
import config from '../config';

function Footer() {

  let copyrightYear = new Date();

  return (
    <footer>
      <p>© {copyrightYear.getFullYear()} Sabrina Becker</p>
      <p>{config.APP_VERSION}</p>
    </footer>
  );
}

export default Footer;