import React from 'react';
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
            <li><a href="/">Home</a></li>
            <li><a href="/domain">Domain</a></li>
            <li><a href="/milestones">Milestones</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>SLIIT Northern Campus</p>
          <p>Sri Lanka</p>
          <p>info@neuromotion.ai</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 NeuroMotion Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
