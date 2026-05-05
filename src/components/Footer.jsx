import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Code, Briefcase, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <Activity className="logo-icon" />
            <span>NeuroMotion</span>
          </div>
          <p>Revolutionizing athletic training with state-of-the-art AI technology.</p>
          <div className="footer-socials">
            <Code size={20} />
            <Briefcase size={20} />
            <Send size={20} />
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/domain">Domain</Link></li>
            <li><Link to="/milestones">Milestones</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>SLIIT Malabe Campus</p>
          <p>Sri Lanka</p>
          <p>neuromotion@gmail.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 NeuroMotion Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
