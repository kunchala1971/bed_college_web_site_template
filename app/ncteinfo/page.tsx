import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NCTE Recognition & Compliance Info | Vivekananda College Ongole',
  description: 'Mandatory disclosure, recognition orders from Southern Regional Committee (SRC), NCTE New Delhi (File Code APSO0285) for Vivekananda College of Education.',
};

export default function NcteInfoPage() {
  const tableData = [
    { particulars: 'Name of Institution', details: 'Vivekananda College of Education' },
    { particulars: 'NCTE File Code Number', details: 'APSO0285', isBold: true },
    { particulars: 'Management Trust / Society', details: 'Sri Ganesh Educational Trust (Date of Reg: 15-11-2021)' },
    { particulars: 'Course & Intake Sanctioned', details: 'Bachelor of Education (B.Ed.) - 100 Seats Intake' },
    { particulars: 'Present Affiliating University', details: 'Sri Venkateswara University, Tirupati (SV University, Tirupati)' },
    { particulars: 'Initial Recognition Premises', details: 'Puthalapattu (Vlg & Mdl.), Chittoor (Dist.) A.P. 517 124' },
    { particulars: 'Proposed Premises (Shifting Address)', details: 'Throvagunta (V), Ongole (Mdl), Prakasam (Dist.) - 523 262' },
    { particulars: 'NCTE Application Status', details: 'Application for Permitting Change of Premises submitted on 28-09-2024' },
    { particulars: 'Application Processing Fee DD', details: 'Rs. 1,77,000/- (Including GST) | DD No: 403113 Date: 28/01/2026' },
    { particulars: 'Land Area & Survey Extent', details: '4168.23 Sq. Mts. (1.03 Acres) | Survey Nos: 178/1A1, 178/1A6' },
    { particulars: 'Official Contact Phone', details: '+91 94949 99080' },
    { particulars: 'Official Contact Email', details: 'vivekanandaedu73@gmail.com' },
  ];

  const pdfDocs = [
    { title: 'NCTE Recognition Order (2026)', desc: 'Official SRC NCTE Latest Approval Order Copy', pdf: '/docs/003_NCTE ORDER - 2026.pdf' },
    { title: 'NCTE Recognition Order (2003)', desc: 'Original SRC NCTE Initial Approval Order Copy', pdf: '/docs/003_NCTE ORDER - 2003.pdf' },
    { title: 'NCTE Shifting Application', desc: 'Application for Permitting Change of Premises (APSO0285)', pdf: '/docs/004_SHIFTING APPLICATION.pdf' },
    { title: 'NCTE Visiting Team (VT) Application', desc: 'Visiting Team Assessment & Inspection Document', pdf: '/docs/004_VT APPLICATION.pdf' },
    { title: 'Approved Staff List', desc: 'NCTE & University Approved Staff List Copy', pdf: '/docs/013_STAFF LIST.PDF' },
    { title: 'Building Plan Blueprint', desc: 'Approved Campus Architectural Layout & Floor Plan', pdf: '/docs/012_PLAN.pdf' },
    { title: 'Fixed Deposit Receipt (FDR)', desc: 'Statutory Reserve & Endowment Fund Receipt', pdf: '/docs/014_F.D.R.pdf' },
    { title: 'Land Use Certificate', desc: 'Revenue Department Educational Land Use Permission', pdf: '/docs/008_LAND USE CERTIFICATE.pdf' },
    { title: 'Barrier-Free Environment Certificate', desc: 'Accessibility Certificate for Persons with Disabilities', pdf: '/docs/011_BARRIER FREE.pdf' },
  ];

  return (
    <>
      {/* Page Header Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>NCTE Recognition & Compliance Info</h1>
          <p style={{ color: '#cbd5e1' }}>Official details and recognition orders from Southern Regional Committee (SRC), NCTE New Delhi.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
            <span className="section-tag">NATIONAL COUNCIL FOR TEACHER EDUCATION</span>
            <h2 className="section-title">Mandatory Disclosure & Approval Summary</h2>
            <p className="section-desc">
              Vivekananda College of Education is fully recognized by the National Council for Teacher Education (NCTE), Southern Regional Committee, Bangalore to offer 2-Year B.Ed Degree Program with an sanctioned annual intake of 100 students (2 basic units).
            </p>
          </div>

          {/* Information Matrix Table */}
          <div className="custom-table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Details / Official Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td><strong>{row.particulars}</strong></td>
                    <td>{row.isBold ? <strong>{row.details}</strong> : row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Document Download Cards Grid */}
          <h3 style={{ margin: '2.5rem 0 1.5rem 0', fontSize: '1.5rem', color: 'var(--primary-navy)' }}>
            Official NCTE PDF Downloads & Statutory Documents
          </h3>

          <div className="document-grid">
            {pdfDocs.map((doc, index) => (
              <div className="document-card" key={index}>
                <div className="document-icon"><i className="fa-solid fa-file-pdf"></i></div>
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
