import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B.Ed Affiliation & Mandatory Affidavits | Vivekananda College Ongole',
  description: 'Official university affiliation letters, safety compliance certificates, building plan blueprints, land title deeds, and legal affidavits of Vivekananda College of Education.',
};

export default function AffidavitsPage() {
  const tableRows = [
    {
      title: 'University Permanent / Temporary Affiliation Order',
      authority: 'Sri Venkateswara University, Tirupati / APSCHE',
      status: 'Active / Verified',
      pdf: '/docs/003_NCTE ORDER - 2026.pdf',
    },
    {
      title: 'NCTE Permitting Change of Premises Application & Fee DD',
      authority: 'NCTE / DD No: 403113 (Rs 1,77,000/- Dt: 28/01/2026)',
      status: 'Submitted 28-09-2024',
      pdf: '/docs/004_SHIFTING APPLICATION.pdf',
    },
    {
      title: 'Sri Ganesh Educational Trust Registration Certificate',
      authority: 'Registration & Stamps Dept (Reg Date: 15-11-2021)',
      status: 'Registered Trust',
      pdf: '/docs/002_REGISTRATION.pdf',
    },
    {
      title: 'Land Title & Certified Sale Deed (4168.23 Sq. Mts.)',
      authority: 'Sub-Registrar Office (Sri Ganesh Educational Trust, Survey Nos: 178/1A1, 178/1A6)',
      status: 'Verified Title',
      pdf: '/docs/005_CERTIFIED SALE DEED.PDF',
    },
    {
      title: 'Land Sale Deed (English Translation)',
      authority: 'Certified Legal Translation Authority',
      status: 'Complied',
      pdf: '/docs/006_SALE DEED ENGLISH.pdf',
    },
    {
      title: 'Encumbrance Certificate (EC)',
      authority: 'Government Registration & Stamps Department',
      status: 'Clear Title',
      pdf: '/docs/007_EC.pdf',
    },
    {
      title: 'Land Use & Conversion Certificate',
      authority: 'Revenue Department / Competent Authority',
      status: 'Educational Land',
      pdf: '/docs/008_LAND USE CERTIFICATE.pdf',
    },
    {
      title: 'Property Mutation Certificate',
      authority: 'District Revenue Authority, Prakasam',
      status: 'Mutated',
      pdf: '/docs/009_MUTATION CERTIFICATE.pdf',
    },
    {
      title: 'Building Completion Certificate',
      authority: 'Competent Local Authority / Engineer',
      status: 'Completed',
      pdf: '/docs/010_BUILDING COMPLETION.pdf',
    },
    {
      title: 'Barrier-Free Environment Certificate',
      authority: 'Certified Engineer / PWD Authority',
      status: 'Certified',
      pdf: '/docs/011_BARRIER FREE.pdf',
    },
    {
      title: 'Approved Campus Building Blueprint & Plan',
      authority: 'Architectural Approval Authority',
      status: 'Approved Plan',
      pdf: '/docs/012_PLAN.pdf',
    },
    {
      title: 'Building Structural Stability Certificate',
      authority: 'Executive Engineer, R&B / Certified Structural Engineer',
      status: 'Complied',
      pdf: '/docs/016_STRUCTURAL STABILITY.pdf',
    },
    {
      title: 'Fire Safety Clearance NOC',
      authority: 'AP State Disaster Response & Fire Services Dept',
      status: 'NOC Issued',
      pdf: '/docs/017_FIRE NOC.pdf',
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>B.Ed Affiliation & Mandatory Affidavits</h1>
          <p style={{ color: '#cbd5e1' }}>Official university affiliation letters, safety compliance certificates, and legal affidavits.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
            <span className="section-tag">UNIVERSITY AFFILIATION & COMPLIANCE</span>
            <h2 className="section-title">Affiliation & Infrastructure Affidavits</h2>
            <p className="section-desc">
              Vivekananda College of Education maintains full compliance with Sri Venkateswara University, Tirupati (NCTE File Code: APSO0285) and Government of Andhra Pradesh higher education standards.
            </p>
          </div>

          {/* Affiliation Table */}
          <div className="custom-table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Affiliation Certificate / Affidavit</th>
                  <th>Issuing Authority</th>
                  <th>Status / Validity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, index) => (
                  <tr key={index}>
                    <td><strong>{row.title}</strong></td>
                    <td>{row.authority}</td>
                    <td>
                      <span className="badge-tag" style={{ background: 'rgba(5, 150, 105, 0.15)', color: '#059669', borderColor: 'rgba(5, 150, 105, 0.3)' }}>
                        {row.status}
                      </span>
                    </td>
                    <td>
                      <a href={row.pdf} target="_blank" rel="noopener noreferrer" className="btn-download">
                        <i className="fa-solid fa-download"></i> PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
