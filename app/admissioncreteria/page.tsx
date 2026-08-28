import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B.Ed Admission Criteria & Quota | Vivekananda College Ongole',
  description: 'B.Ed admissions eligibility guidelines, AP EDCET convener quota (75%), management quota (25%), required documents checklist at Vivekananda College of Education.',
};

export default function AdmissionCriteriaPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>B.Ed Admission Criteria & Quota</h1>
          <p style={{ color: '#cbd5e1' }}>Comprehensive guidelines for B.Ed admissions as prescribed by APSCHE, Tadepalli & NCTE.</p>
        </div>
      </section>

      {/* Admission Guidelines Section */}
      <section className="section">
        <div className="container">
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '3.5rem' }}>
            {/* Eligibility Card */}
            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-user-graduate"></i></div>
              <h3>Academic Qualifying Criteria</h3>
              <p style={{ marginBottom: '1rem' }}>Candidate should secure the required minimum percentage of marks in their qualifying degree examination (B.A / B.Sc / B.Com / B.C.A / B.B.M / B.Tech):</p>
              <ul className="course-features-list">
                <li><i className="fa-solid fa-check"></i> <strong>General / OC Category:</strong> Minimum <strong>50% Marks</strong> in Degree.</li>
                <li><i className="fa-solid fa-check"></i> <strong>Reserved Categories (SC / ST / BC / PHC):</strong> Minimum <strong>40% Marks</strong> in Degree.</li>
                <li><i className="fa-solid fa-check"></i> <strong>B.Tech / B.E Graduates:</strong> Eligible with Mathematics & Science subjects background.</li>
              </ul>
            </div>

            {/* Quota Allocation Card */}
            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-chart-pie"></i></div>
              <h3>Seat Intake & Quota Distribution</h3>
              <p style={{ marginBottom: '1rem' }}>Vivekananda College of Education has a total sanctioned annual intake of <strong>100 Seats</strong> divided into two categories:</p>
              <ul className="course-features-list">
                <li><i className="fa-solid fa-check"></i> <strong>Category &apos;A&apos; (Convener Quota - 75%):</strong> 75 Seats filled through AP EDCET web counselling conducted by APSCHE, Tadepalli, A.P.</li>
                <li><i className="fa-solid fa-check"></i> <strong>Category &apos;B&apos; (Management Quota - 25%):</strong> 25 Seats filled directly by Management following government eligibility norms.</li>
              </ul>
            </div>
          </div>

          {/* Admission Procedure Steps */}
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
            <span className="section-tag">STEP-BY-STEP PROCESS</span>
            <h2 className="section-title">How to Join Vivekananda College of Education</h2>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>01</div>
              <h3>Appear for AP EDCET</h3>
              <p>Register and clear the Andhra Pradesh Education Common Entrance Test (AP EDCET) entrance examination.</p>
            </div>

            <div className="feature-card">
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>02</div>
              <h3>Select College Code</h3>
              <p>During web options counselling, select Vivekananda College of Education, Throvagunta, Ongole as your top preferred institution.</p>
            </div>

            <div className="feature-card">
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>03</div>
              <h3>Document Verification</h3>
              <p>Report to the college office with original certificates, allotment order, fee payment receipt, and ID proofs.</p>
            </div>
          </div>

          {/* Required Documents List */}
          <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', marginTop: '3.5rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ marginBottom: '1.2rem', color: 'var(--primary-navy)' }}>
              <i className="fa-solid fa-folder-open" style={{ color: 'var(--accent-gold)' }}></i> Checklist of Required Original Documents
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><i className="fa-solid fa-circle-right" style={{ color: 'var(--primary-blue)' }}></i> AP EDCET Hall Ticket & Rank Card</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><i className="fa-solid fa-circle-right" style={{ color: 'var(--primary-blue)' }}></i> Degree Original Degree / Provisional Certificate</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><i className="fa-solid fa-circle-right" style={{ color: 'var(--primary-blue)' }}></i> Degree Consolidated Marks Memo</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><i className="fa-solid fa-circle-right" style={{ color: 'var(--primary-blue)' }}></i> Intermediate (10+2) Certificate</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><i className="fa-solid fa-circle-right" style={{ color: 'var(--primary-blue)' }}></i> SSC / 10th Class Certificate (Date of Birth)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><i className="fa-solid fa-circle-right" style={{ color: 'var(--primary-blue)' }}></i> Study & Conduct Certificates (Class 9 to Degree)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><i className="fa-solid fa-circle-right" style={{ color: 'var(--primary-blue)' }}></i> Integrated Community / Caste Certificate</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><i className="fa-solid fa-circle-right" style={{ color: 'var(--primary-blue)' }}></i> Income Certificate / Jagananna Vidya Deevena Eligibility</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><i className="fa-solid fa-circle-right" style={{ color: 'var(--primary-blue)' }}></i> Transfer Certificate (TC) & Passport Size Photos</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
