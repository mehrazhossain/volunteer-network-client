import React from 'react';
import './Footer.css';

var today = new Date();
var year = today.getFullYear();
const Footer = () => {
  return (
    <div className="footer">
      <p>
        <small>
          Copyright &copy; {year} <b>Volunteer Network</b>. All rights reserve.
        </small>
      </p>
    </div>
  );
};

export default Footer;
