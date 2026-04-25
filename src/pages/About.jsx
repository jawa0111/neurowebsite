import React from 'react';
import { Code, Briefcase, Mail, Trophy } from 'lucide-react';
import './About.css';

const About = () => {
  const team = [
    { name: "Alex Johnson", role: "AI/ML Lead", bio: "Expert in Computer Vision and MediaPipe integrations." },
    { name: "Sarah Chen", role: "Frontend Architect", bio: "Specializes in high-performance React applications." },
    { name: "Mike Ross", role: "Researcher", bio: "Focused on sports biomechanics and performance analytics." },
    { name: "Elena Rodriguez", role: "UI/UX Designer", bio: "Creates intuitive interfaces for athletic training." }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="grad-text">Meet The Team</h1>
        <p>A diverse group of researchers and engineers dedicated to revolutionizing sports technology.</p>
      </section>

      <div className="team-grid">
        {team.map((member, idx) => (
          <div key={idx} className="team-card glass">
            <div className="member-photo"></div>
            <h3>{member.name}</h3>
            <span className="member-role">{member.role}</span>
            <p>{member.bio}</p>
            <div className="member-socials">
              <Code size={20} />
              <Briefcase size={20} />
              <Mail size={20} />
            </div>
          </div>
        ))}
      </div>

      <section className="achievements glass">
        <h2><Trophy className="ach-icon" /> Project Achievements</h2>
        <div className="ach-grid">
          <div className="ach-item">
            <h4>Technical Excellence Award</h4>
            <p>Recognized for innovative use of AI in sports biomechanics.</p>
          </div>
          <div className="ach-item">
            <h4>98% Accuracy Milestone</h4>
            <p>Achieved record-breaking pose estimation accuracy in dynamic environments.</p>
          </div>
          <div className="ach-item">
            <h4>Published Research</h4>
            <p>Findings presented at the International Sports AI Conference 2026.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
