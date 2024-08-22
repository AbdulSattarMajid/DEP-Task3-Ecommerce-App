import React from 'react';
import github from '../Images/Github.png';
import gmail from '../Images/Gmail.png';
import linkedin from '../Images/Linkedin.png';
import '../App.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Your one-stop shop for the latest tech products, from laptops and smartphones to games and software.</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Products</a></li>
            <li><a href="/help">Contact</a></li>
            <li><a href="/about">about</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: malikabdulsattarmajid@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-media">
            <a href="https://github.com/AbdulSattarMajid" className="social-link">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/abdulsattar-majid-949a97300" className="social-link">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="mailto:MalikAbdulSattarMajid@gmail.com" className="social-link">
              <img src={gmail} alt="Email" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tech Heaven. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
