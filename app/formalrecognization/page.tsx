import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B.Ed Formal Recognitions | Vivekananda College Ongole',
  description: 'Government of Andhra Pradesh Higher Education Department Permission & NCTE Gazette Recognitions for Vivekananda College of Education.',
};

export default function FormalRecognizationPage() {
  const docs = [
    {
      title: 'NCTE Recognition Order (2026)',
      desc: 'Official SRC NCTE Approval Order Copy (APSO0285)',
      pdf: '/docs/003_NCTE ORDER - 2026.pdf',
    },
    {
      title: 'NCTE Recognition Order (2003)',
      desc: 'Original SRC NCTE Establishment Approval Order',
      pdf: '/docs/003_NCTE ORDER - 2003.pdf',
    },
    {
      title: 'NCTE Shifting Permission Application',
      desc: 'Official Change of Premises Application Order Copy',
      pdf: '/docs/004_SHIFTING APPLICATION.pdf',
    },
    {
      title: 'NCTE Visiting Team Assessment',
      desc: 'Visiting Team (VT) Inspection & Approval Report',
      pdf: '/docs/004_VT APPLICATION.pdf',
    },
    {
      title: 'Sri Ganesh Educational Trust Registration',
      desc: 'Official Trust Registration & Incorporation Certificate',
      pdf: '/docs/002_REGISTRATION.pdf',
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>B.Ed Formal Recognitions</h1>
          <p style={{ color: '#cbd5e1' }}>Government of Andhra Pradesh Higher Education Department Permission & NCTE Gazette Recognitions.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
            <span className="section-tag">GOVERNMENT & STATUTORY ORDERS</span>
            <h2 className="section-title">Government Permission Orders (G.O.)</h2>
            <p className="section-desc">Details of State Government permission orders, APSCHE approvals, and Gazette notifications granting formal establishment and recognition for Vivekananda College of Education (File Code: APSO0285).</p>
          </div>

          <div className="document-grid">
            {docs.map((doc, index) => (
              <div className="document-card" key={index}>
                <div className="document-icon"><i className="fa-solid fa-stamp"></i></div>
                <div className="document-info">
                  <h4>{doc.title}</h4>
                  <p>{doc.desc}</p>
                  <a href={doc.pdf} target="_blank" rel="noopener noreferrer" className="btn-download">
                    <i className="fa-solid fa-download"></i> View / Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
