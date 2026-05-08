import React from 'react';
import { Code, Briefcase, Mail, Trophy } from 'lucide-react';
import './About.css';

const About = () => {
  const supervisors = [
    { name: "Pradeep", role: "Supervisor", bio: "Expert in AI and machine learning with extensive research experience in computer vision and sports analytics.", image: "/images/pradeep.jpeg" },
    { name: "Akshi DeSilva", role: "Co-Supervisor", bio: "Specialist in software engineering and human-computer interaction, focusing on user experience design.", image: "/images/akshi.jpeg" }
  ];

  const team = [
    { name: "Y.Manulakshan", role: "Team Lead", bio: "Expert in project management and AI/ML integration.", image: "/images/maniu.png" },
    { name: "Mathumitha.G", role: "Frontend Developer", bio: "Specializes in React applications and user interface design.", image: "/images/mathumitha.png" },
    { name: "L.M.Sylvester", role: "Backend Developer", bio: "Focused on server-side architecture and database management.", image: "/images/marino.png" },
    { name: "G.JudeJawakker", role: "AI/ML Engineer", bio: "Expert in machine learning models and computer vision.", image: "/images/jude.png" }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="grad-text">Meet The Team</h1>
        <p>A diverse group of researchers and engineers dedicated to revolutionizing sports technology.</p>
      </section>

      <section className="supervisors-section">
        <h2 className="section-title">Supervisors</h2>
        <div className="supervisors-grid">
          {supervisors.map((supervisor, idx) => (
            <div key={idx} className="supervisor-card glass">
              <div className="member-photo" style={{ backgroundImage: `url(${supervisor.image})` }}></div>
              <h3>{supervisor.name}</h3>
              <span className="member-role">{supervisor.role}</span>
              <p>{supervisor.bio}</p>
              <div className="member-socials">
                <Code size={20} />
                <Briefcase size={20} />
                <Mail size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Development Team</h2>
        <div className="team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="team-card glass">
              <div className="member-photo" style={{ backgroundImage: `url(${member.image})` }}></div>
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
      </section>

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
