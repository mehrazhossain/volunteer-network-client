import React from 'react';
import './Footer.css';

var today = new Date();
var year = today.getFullYear();
const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <p>
        <small className="text-muted">
          Copyright &copy; {year} <b>Volunteer Network</b>. All rights reserve.
        </small>
      </p>
      <hr />
    </div>
  );
};

export default Footer;
