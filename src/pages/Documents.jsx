import React from 'react';
import { FileText, Download, Presentation, Video } from 'lucide-react';
import './Documents.css';

const Documents = () => {
  const docs = [
    { name: "Project Charter", type: "PDF", size: "1.2 MB", category: "document" },
    { name: "Proposal Document", type: "PDF", size: "2.5 MB", category: "document" },
    { name: "Checklist Documents", type: "DOCX", size: "0.8 MB", category: "document" },
    { name: "Final Documentation", type: "PDF", size: "4.2 MB", category: "document" },
    { name: "Proposal Slides", type: "PPTX", size: "5.1 MB", category: "presentation" },
    { name: "Progress Presentation 1", type: "PPTX", size: "6.3 MB", category: "presentation" },
    { name: "Progress Presentation 2", type: "PPTX", size: "7.1 MB", category: "presentation" },
    { name: "Final Presentation", type: "PPTX", size: "8.5 MB", category: "presentation" }
  ];

  return (
    <div className="documents-page">
      <section className="docs-hero">
        <h1 className="grad-text">Resources & Deliverables</h1>
        <p>Access project documentation, presentation slides, and technical reports.</p>
      </section>

      <div className="docs-grid">
        <div className="docs-section">
          <h2><FileText /> Project Documents</h2>
          <div className="file-list">
            {docs.filter(d => d.category === 'document').map((doc, idx) => (
              <div key={idx} className="file-card glass">
                <div className="file-info">
                  <h4>{doc.name}</h4>
                  <span>{doc.type} • {doc.size}</span>
                </div>
                <button className="download-btn"><Download size={18} /></button>
              </div>
            ))}
          </div>
        </div>

        <div className="docs-section">
          <h2><Presentation /> Presentations</h2>
          <div className="file-list">
            {docs.filter(d => d.category === 'presentation').map((doc, idx) => (
              <div key={idx} className="file-card glass">
                <div className="file-info">
                  <h4>{doc.name}</h4>
                  <span>{doc.type} • {doc.size}</span>
                </div>
                <button className="download-btn"><Download size={18} /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
