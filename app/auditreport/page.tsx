import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Audit Reports | Vivekananda College of Education',
  description: 'Annual audited balance sheets certified by Chartered Accountants for Sri Ganesh Educational Trust and Vivekananda College of Education.',
};

export default function AuditReportPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Financial Audit Reports & Transparency</h1>
          <p style={{ color: '#cbd5e1' }}>Annual audited balance sheets certified by Chartered Accountants for Sri Ganesh Educational Trust.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
            <span className="section-tag">FINANCIAL TRANSPARENCY</span>
            <h2 className="section-title">Audited Statements of Accounts</h2>
            <p className="section-desc">In compliance with NCTE norms and statutory regulations, Vivekananda College of Education publishes its annual financial audit reports certified by independent Chartered Accountants.</p>
          </div>

          <div className="document-grid">
            <div className="document-card">
              <div className="document-icon"><i className="fa-solid fa-file-pdf"></i></div>
              <div className="document-info">
                <h4>Fixed Deposit Receipt (FDR)</h4>
                <p>Statutory Endowment & Endowment Reserve Fund FDR Copy</p>
                <a href="/docs/014_F.D.R.pdf" target="_blank" rel="noopener noreferrer" className="btn-download">
                  <i className="fa-solid fa-download"></i> View / Download FDR PDF
                </a>
              </div>
            </div>

            <div className="document-card">
              <div className="document-icon"><i className="fa-solid fa-chart-line"></i></div>
              <div className="document-info">
                <h4>Audit Report 2024-2025</h4>
                <p>Audited Balance Sheet & Income Statement</p>
                <a href="/docs/014_F.D.R.pdf" target="_blank" rel="noopener noreferrer" className="btn-download">
                  <i className="fa-solid fa-download"></i> Download Audit PDF
                </a>
              </div>
            </div>

            <div className="document-card">
              <div className="document-icon"><i className="fa-solid fa-chart-line"></i></div>
              <div className="document-info">
                <h4>Audit Report 2023-2024</h4>
                <p>Audited Balance Sheet & Income Statement</p>
                <a href="/docs/014_F.D.R.pdf" target="_blank" rel="noopener noreferrer" className="btn-download">
                  <i className="fa-solid fa-download"></i> Download Audit PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
