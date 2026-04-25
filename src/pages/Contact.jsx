import React from 'react';
import { Mail, Phone, MapPin, Send, Code, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="grad-text">Get In Touch</h1>
        <p>Have questions about the project or interested in collaboration? Reach out to us.</p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card glass">
            <Mail className="info-icon" />
            <div>
              <h4>Email Us</h4>
              <p>contact@neuromotion.ai</p>
            </div>
          </div>
          <div className="info-card glass">
            <Code className="info-icon" />
            <div>
              <h4>Source Code</h4>
              <p>github.com/neuromotion-project</p>
            </div>
          </div>
          <div className="info-card glass">
            <MessageSquare className="info-icon" />
            <div>
              <h4>Technical Support</h4>
              <p>support@neuromotion.ai</p>
            </div>
          </div>
        </div>

        <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Topic" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell us more..."></textarea>
          </div>
          <button className="btn-primary form-btn">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
