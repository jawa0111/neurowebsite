import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import './Milestones.css';

const Milestones = () => {
  const milestones = [
    {
      title: "Project Proposal",
      status: "completed",
      date: "Oct 2025",
      marks: "10%",
      desc: "Project proposal document and initial research compilation."
    },
    {
      title: "Progress Presentation 1",
      status: "completed",
      date: "Dec 2025",
      marks: "20%",
      desc: "Core functionality demonstration, basic jump detection."
    },
    {
      title: "Progress Presentation 2",
      status: "completed",
      date: "Feb 2026",
      marks: "20%",
      desc: "Advanced features, multi-exercise support, UI improvements."
    },
    {
      title: "Final Assessment",
      status: "in-progress",
      date: "April 2026",
      marks: "30%",
      desc: "Complete system deployment, user testing, final documentation."
    },
    {
      title: "Viva",
      status: "pending",
      date: "May 2026",
      marks: "20%",
      desc: "Technical questions and comprehensive system demonstration."
    }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle2 className="status-icon completed" />;
      case 'in-progress': return <Clock className="status-icon in-progress" />;
      default: return <Circle className="status-icon pending" />;
    }
  };

  return (
    <div className="milestones-page">
      <section className="milestones-hero">
        <h1 className="grad-text">Project Milestones</h1>
        <p>Tracking our journey from conception to final delivery.</p>
      </section>

      <div className="timeline">
        {milestones.map((ms, idx) => (
          <motion.div 
            key={idx} 
            className={`milestone-item ${ms.status}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="milestone-status">
              {getStatusIcon(ms.status)}
              <div className="status-line"></div>
            </div>
            
            <div className="milestone-content glass">
              <div className="ms-header">
                <h3>{ms.title}</h3>
                <span className="ms-date">{ms.date}</span>
              </div>
              <p>{ms.desc}</p>
              <div className="ms-footer">
                <span className="ms-marks">Weight: {ms.marks}</span>
                <span className={`ms-status-label ${ms.status}`}>
                  {ms.status.replace('-', ' ')}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
