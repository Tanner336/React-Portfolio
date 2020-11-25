import React from 'react';
import "./Footer.css"

function Footer() {


  return (
    <div className="footer-container">
      <div className="footer-text">
          <a href="https://github.com/Tanner336">
            <img src={"./github.png"} alt="github-logo"></img>
          </a>
          <a href="https://www.linkedin.com/in/tanner-cook-3b78421ab/">
            <img src={"./linkedin.png"} alt="linkedIn-logo"></img>
          </a>
      </div>
    </div>
  );

};

export default Footer;