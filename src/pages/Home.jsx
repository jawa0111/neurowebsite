import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, BarChart3, Users, Play, ChevronRight, FileText, Download } from 'lucide-react';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Target className="feature-icon" />,
      title: "Real-time Pose Detection",
      desc: "Achieve >95% accuracy in exercise form analysis using advanced computer vision."
    },
    {
      icon: <BarChart3 className="feature-icon" />,
      title: "Performance Prediction",
      desc: "ML algorithms that forecast your progress and suggest optimal training intensity."
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "Fatigue Monitoring",
      desc: "AI-driven analysis to prevent overtraining and reduce injury risks."
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Multi-exercise Support",
      desc: "Comprehensive support for jumps, squats, push-ups and more."
    },
    {
      icon: <FileText className="feature-icon" />,
      title: "Documentation Hub",
      desc: "Access comprehensive project documentation, research papers, and technical reports."
    },
    {
      icon: <Download className="feature-icon" />,
      title: "Resource Downloads",
      desc: "Download presentation slides, checklists, and project deliverables instantly."
    }
  ];

  const stats = [
    { label: "Accuracy Rate", value: "95%+" },
    { label: "Exercises Supported", value: "12+" },
    { label: "Real-time Latency", value: "<30ms" },
    { label: "User Satisfaction", value: "4.9/5" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="glow-1"></div>
          <div className="glow-2"></div>
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tagline">Athlete Performance and Training AI System</span>
          <h1 className="hero-title grad-text">Elevate Your Performance with NeuroMotion</h1>
          <p className="hero-desc">
            Democratizing professional-grade athletic training through real-time AI pose estimation and predictive analytics.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">
              Live Demo <Play size={18} fill="currentColor" />
            </button>
            <button className="btn-outline">
              Learn More <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="features">
        <div className="section-header">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">Cutting-edge technology integrated for elite training experience.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card glass"
              whileHover={{ scale: 1.05, translateY: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats glass">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h4 className="stat-value">{stat.value}</h4>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
