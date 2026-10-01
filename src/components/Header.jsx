import React from "react";

function Header() {
  return (
    <div>
      <nav>
        <div className="nav-logo"><img src="public/Bonsai Logo.png" alt="Logo" /></div>

        <div className="nav-links--container">
          <ul className="nav-links">
            <li><a href="#">product</a></li>
            <li><a href="#">templates</a></li>
            <li><a href="#">pricing</a></li>
            <li><a href="#">reviews</a></li>
          </ul>
          <a className="btn btn-login" href="#">Login</a>
          <a className="btn btn-start" href="#">Start free</a>
          <button className="hamburger" id="hamburger" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobileMenu">
        <a href="#product" onclick="closeMobile()">Product</a>
        <a href="#templates" onclick="closeMobile()">Template</a>
        <a href="#pricing" onclick="closeMobile()">Pricing</a>
        <a href="#reviews" onclick="closeMobile()">Reviews</a>
      </div>
    </div>
  );
}

export default Header;