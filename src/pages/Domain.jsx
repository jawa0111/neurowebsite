import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, AlertCircle, Goal, Layers, Cpu, ChevronDown, ChevronUp } from 'lucide-react';
import './Domain.css';

const Domain = () => {
  const [literatureExpanded, setLiteratureExpanded] = useState(false);
  const sections = [
    {
      id: "literature",
      icon: <BookOpen className="domain-icon" />,
      title: "Literature Survey",
      content: [
        "The integration of computer vision and machine learning in athletic training has seen significant advancement in recent years. Research focuses on real-time pose estimation, exercise classification, and performance analysis to enhance training effectiveness.",
        "Modern approaches utilize deep learning techniques like convolutional neural networks and transformer-based models to achieve high accuracy in human pose estimation and activity recognition.",
        "Key challenges identified in existing research include real-time processing constraints, multi-exercise support, and the need for personalized training adaptations.",
        "Recent developments in mobile-friendly models like BlazePose and efficient architectures like MobileNetV2 have enabled on-device deployment, reducing latency and improving accessibility.",
        "The convergence of sensor fusion techniques combining inertial measurement units with computer vision provides more robust motion tracking in dynamic athletic environments.",
        "[1] C. Chen, R. Jafari, and N. Kehtarnavaz, A real-time human action recognition system using depth and inertial sensor fusion, IEEE Sensors J., vol. 16, no. 3, pp. 773–781, Feb. 2016.",
        "[2] M. A. O'Reilly et al., Technology in strength and conditioning: Assessing body weight squat performance, J. Strength Cond. Res., vol. 31, no. 2, pp. 549–555, Feb. 2017.",
        "[3] T. Dressler, J. Witt, and M. Schmitt, Comparison of optical motion capture and inertial measurement unit methods for measuring joint angles in athletic movements, Sensors, vol. 21, no. 9, pp. 3159–3169, Apr. 2021.",
        "[4] Y. Liao, J. Vakanski, and M. Xian, A deep learning framework for assessing physical rehabilitation exercises, IEEE Trans. Neural Syst. Rehabil. Eng., vol. 28, no. 2, pp. 468–477, Feb. 2020.",
        "[5] Z. Cao et al., OpenPose: Realtime multi-person 2D pose estimation using part affinity fields, IEEE Trans. Pattern Anal. Mach. Intell., vol. 43, no. 1, pp. 172–186, Jan. 2021.",
        "[6] V. Bazarevsky et al., BlazePose: On-device real-time body pose tracking, in Proc. CVPR Workshop Comput. Vis. Sports, 2020, pp. 1–8.",
        "[7] H. Fang et al., RMPE: Regional multi-person pose estimation, in Proc. IEEE Int. Conf. Comput. Vis. (ICCV), Venice, Italy, 2017, pp. 2334–2343.",
        "[8] A. Ignatov, Real-time human activity recognition from accelerometer data using convolutional neural networks, Appl. Soft Comput., vol. 62, pp. 915–922, Jan. 2018.",
        "[9] A. Pestana, J. Lima, and J. S. Marques, Automatic exercise classification using deep learning, in Proc. IEEE Int. Conf. Auton. Robot Syst. (ICARS), Lisbon, Portugal, 2022, pp. 1–6.",
        "[10] K. He et al., Deep residual learning for image recognition, in Proc. IEEE Conf. Comput. Vis. Pattern Recognit. (CVPR), Las Vegas, NV, USA, 2016, pp. 770–778."
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
        {sections.map((section, idx) => {
          const isLiterature = section.id === 'literature';
          const visibleContent = isLiterature && !literatureExpanded
            ? section.content.slice(0, 3)
            : section.content;

          return (
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
              <ul className={isLiterature ? 'literature-list' : ''}>
                {visibleContent.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {isLiterature && (
                <button
                  className="expand-btn"
                  onClick={() => setLiteratureExpanded(!literatureExpanded)}
                >
                  {literatureExpanded ? (
                    <><ChevronUp size={20} /> Show Less</>
                  ) : (
                    <><ChevronDown size={20} /> View All References</>
                  )}
                </button>
              )}
            </motion.div>
          );
        })}
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
