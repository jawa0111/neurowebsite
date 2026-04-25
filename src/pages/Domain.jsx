import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, AlertCircle, Goal, Layers, Cpu } from 'lucide-react';
import './Domain.css';

const Domain = () => {
  const sections = [
    {
      id: "literature",
      icon: <BookOpen className="domain-icon" />,
      title: "Literature Survey",
      content: [
        "Computer Vision in Sports: Review of existing pose detection technologies.",
        "Athletic Training Systems: Analysis of current digital training solutions.",
        "AI in Performance Analysis: Research on machine learning applications.",
        "User Experience Studies: Findings from sports technology adoption."
      ]
    },
    {
      id: "gap",
      icon: <Search className="domain-icon" />,
      title: "Research Gap",
      content: [
        "Real-time Processing Limitations: Current systems' inability to provide instant feedback.",
        "Multi-exercise Integration: Lack of comprehensive training platforms.",
        "Personalization Deficits: Generic training vs. AI-adaptive systems.",
        "Accessibility Issues: High-cost professional systems vs. consumer solutions."
      ]
    },
    {
      id: "problem",
      icon: <AlertCircle className="domain-icon" />,
      title: "Research Problem",
      content: [
        "Core Challenge: Developing accessible AI-powered athletic training.",
        "Technical Hurdles: Real-time pose estimation accuracy and performance.",
        "User Adoption: Creating intuitive interfaces for non-technical users.",
        "Integration Complexity: Combining multiple AI models seamlessly."
      ]
    },
    {
      id: "objectives",
      icon: <Goal className="domain-icon" />,
      title: "Research Objectives",
      content: [
        "Develop Real-time Pose Detection: Achieve >95% accuracy.",
        "Create Predictive Analytics: Implement performance forecasting algorithms.",
        "Build User-friendly Interface: Design intuitive web application.",
        "Implement Multi-exercise Support: Support jumps, squats, and push-ups."
      ]
    }
  ];

  const methodology = [
    { title: "Technology Stack", desc: "Streamlit, MediaPipe, OpenCV, SQLite" },
    { title: "Development Approach", desc: "Agile methodology with iterative testing" },
    { title: "Testing Strategy", desc: "Unit tests, UAT, performance benchmarks" }
  ];

  const techStack = [
    { name: "MediaPipe", role: "Pose Estimation" },
    { name: "OpenCV", role: "Video Processing" },
    { name: "Scikit-learn", role: "Performance Prediction" },
    { name: "Groq", role: "AI Chatbot Integration" }
  ];

  return (
    <div className="domain-page">
      <section className="domain-hero">
        <motion.h1 
          className="grad-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Research Domain
        </motion.h1>
        <p>In-depth look at the problem landscape and our proposed technical solution.</p>
      </section>

      <div className="domain-grid">
        {sections.map((section, idx) => (
          <motion.div 
            key={idx} 
            className="domain-card glass"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-header">
              {section.icon}
              <h2>{section.title}</h2>
            </div>
            <ul>
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <section className="methodology-tech">
        <div className="meth-column">
          <div className="section-header">
            <Layers className="header-icon" />
            <h2>Methodology</h2>
          </div>
          <div className="meth-list">
            {methodology.map((m, i) => (
              <div key={i} className="meth-item glass">
                <strong>{m.title}</strong>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-column">
          <div className="section-header">
            <Cpu className="header-icon" />
            <h2>Technologies Used</h2>
          </div>
          <div className="tech-grid">
            {techStack.map((t, i) => (
              <div key={i} className="tech-item glass">
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Domain;
