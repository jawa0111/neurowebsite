import React from 'react';
import { FileText, Download, Presentation, Video } from 'lucide-react';
import './Documents.css';

const Documents = () => {
  const docs = [
    { name: "Progress Presentation 1", type: "PDF", size: "1.2 MB", category: "presentation", file: "/pdfs/25-26J-334 PP1.pdf" },
    { name: "Progress Presentation 2", type: "PDF", size: "2.5 MB", category: "presentation", file: "/pdfs/25-26J-334 _ Progress Presentation - 2 (1).pdf" },
    { name: "Final Presentation", type: "PDF", size: "8.5 MB", category: "presentation", file: "/pdfs/25-26J-334_Final Presentation .pdf" },
    { name: "Project Charter", type: "PDF", size: "0.3 MB", category: "document", file: "/pdfs/charter.pdf" },
    { name: "Checklist 2", type: "PDF", size: "0.8 MB", category: "document", file: "/pdfs/25-26J-334_Checklist-2.pdf" },
    { name: "Final Documentation", type: "PDF", size: "4.2 MB", category: "document", file: "/pdfs/25-26J-334_Draft - Final Report.pdf" },
    { name: "Presentation Slides", type: "PDF", size: "5.1 MB", category: "presentation", file: "/pdfs/Presentation slides.pdf" },
    { name: "Checklist 1", type: "PDF", size: "0.5 MB", category: "document", file: "/pdfs/checklist .pdf" }
  ];

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                <button className="download-btn" onClick={() => handleDownload(doc.file, doc.name + '.pdf')}>
                  <Download size={18} />
                </button>
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
                <button className="download-btn" onClick={() => handleDownload(doc.file, doc.name + '.pdf')}>
                  <Download size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
