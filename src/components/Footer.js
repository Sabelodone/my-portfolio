import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-3 col-sm-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faPhone} /> (+27) 74 642 2396</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> Sabelozondo825.com</li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="col-md-3 col-sm-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="col-md-3 col-sm-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://x.com/sabelod1_?s=11" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/sabelo-sibaya-386076b3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
            </ul>
          </div>
          {/* Newsletter Subscription */}
          <div className="col-md-3 col-sm-6">
            <h5>Newsletter</h5>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; 2024 Sabelo Sibaya. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



