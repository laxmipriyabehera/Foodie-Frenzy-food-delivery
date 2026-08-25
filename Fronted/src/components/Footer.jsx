import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column footer-brand">
          <h2>
            Foodie<span>Frenzy</span>
          </h2>

          <p>
            Delicious food, fresh ingredients, and unforgettable flavors.
            Bringing happiness to your plate, one meal at a time.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/menu">Menu</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Menu */}
        <div className="footer-column">
          <h3>Our Menu</h3>

          <ul>
            <li><Link to="/menu">Breakfast</Link></li>
            <li><Link to="/menu">Lunch</Link></li>
            <li><Link to="/menu">Dinner</Link></li>
            <li><Link to="/menu">Dessert</Link></li>
            <li><Link to="/menu">Drinks</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <div className="footer-contact">
            <p>📍 Bhubaneswar, Odisha, India</p>
            <p>📞 +91 89842 26246</p>
            <p>✉️ support@foodiefrenzy.com</p>
          </div>

          <div className="footer-hours">
            <h4>Opening Hours</h4>
            <p>Mon - Sun: 10:00 AM - 11:00 PM</p>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 Foodie Frenzy. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;