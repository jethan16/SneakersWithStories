import React, { Link }from "react";
import "./footer.css";

import instaIcon from "../../images/icons/icon-insta.png";

function Footer() {
  return (
    <footer className="lower">
      <div className="footer-box contact">
          <h1>Contact Us</h1>
          <i className="footer-icon fas fa-bullhorn"></i>
      </div>
      <div className="footer-box connect">
        <h1>Keep In Touch</h1>
        <a href="https://www.instagram.com/snkrswithstories/" target="_blank">
        <i class="footer-icon fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-box submit-story">
          <h1>Tell Your Story</h1>
          <i class="footer-icon far fa-comments"></i>
      </div>
    </footer>
  );
}

export default Footer;
