import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Management Leadership Team | Vivekananda College Ongole',
  description: 'Visionary leaders of Sri Ganesh Educational Trust steering Vivekananda College of Education: President Divi Ramesh, Secretary Gutlapalli Veera Babu, Treasurer Pentrala Subba Rao.',
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Divi Ramesh',
      role: 'President',
      bio: '"Education is the cornerstone of societal advancement. Our goal is to cultivate visionary teachers who inspire confidence, moral ethics, and academic rigor in young minds across the nation."',
    },
    {
      name: 'Gutlapalli Veera Babu',
      role: 'Secretary & Correspondent',
      bio: '"We provide our teacher trainees with modern infrastructural resources, smart technology, and hands-on practicums to ensure they emerge as outstanding educators."',
    },
    {
      name: 'Pentrala Subba Rao',
      role: 'Treasurer',
      bio: '"Ensuring financial integrity, infrastructural expansion, and student welfare facilities to maintain Vivekananda College of Education as a premier institute in the state."',
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Management Leadership Team</h1>
          <p style={{ color: '#cbd5e1' }}>Visionary leaders of Sri Ganesh Educational Trust steering Vivekananda College of Education.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-tag">SRI GANESH EDUCATIONAL TRUST</span>
            <h2 className="section-title">Governing Body Leadership</h2>
            <p className="section-desc">Guiding the institution with dedication, ethical leadership, and a steadfast commitment to high standards in teacher education.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary-gradient)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', margin: '0 auto 1.2rem auto', boxShadow: 'var(--shadow-md)', border: '2px solid var(--accent-gold)' }}>
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
                <div style={{ marginTop: '1.2rem' }}>
                  <Link href="/contactus" className="btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', color: 'var(--primary-navy)', borderColor: 'var(--border-light)' }}>
                    <i className="fa-solid fa-envelope"></i> Connect with me
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
