import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Academic Results & Performance | Vivekananda College Ongole',
  description: 'Year-wise university examination results, pass percentages, and distinction records of Vivekananda College of Education.',
};

export default function ResultsPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Academic Results & Performance</h1>
          <p style={{ color: '#cbd5e1' }}>Year-wise university examination results, pass percentages, and distinction records.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
            <span className="section-tag">UNIVERSITY EXAMINATION RESULTS</span>
            <h2 className="section-title">Year-Wise Pass Percentage Track Record</h2>
            <p className="section-desc">Vivekananda College of Education consistently achieves near 100% pass rates in Sri Venkateswara University, Tirupati annual examinations, with a majority of candidates securing First Class with Distinction.</p>
          </div>

          {/* Results Notice Block */}
          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '3.5rem 2rem', textAlign: 'center', border: '1px solid var(--border-light)', maxWidth: '850px', margin: '1rem auto', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ width: '76px', height: '76px', borderRadius: '50%', background: 'rgba(14, 116, 144, 0.1)', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', margin: '0 auto 1.5rem auto', border: '2px solid rgba(14, 116, 144, 0.2)' }}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.65rem', marginBottom: '1rem', fontWeight: 700 }}>University Examination Results Notice</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Official semester examination results, pass lists, and marks ledgers for Vivekananda College of Education are published directly by the affiliating university. Enrolled candidates and prospective students can verify results through official university channels or by contacting the institution office.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contactus" className="btn-primary">
                <i className="fa-solid fa-envelope"></i> Contact Office For Results
              </Link>
              <Link href="/" className="btn-outline" style={{ color: 'var(--primary-navy)', borderColor: 'var(--primary-navy)' }}>
                <i className="fa-solid fa-house"></i> Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
