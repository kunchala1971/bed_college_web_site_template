import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Vivekananda College of Education Ongole',
  description: 'Learn about Vivekananda College of Education in Throvagunta (V), Ongole (Mdl), managed by Sri Ganesh Educational Trust. Affiliated to Sri Venkateswara University, Tirupati (NCTE Code APSO0285).',
};

export default function AboutUsPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>About Vivekananda College of Education</h1>
          <p style={{ color: '#cbd5e1' }}>Discover our legacy, vision, mission, and peaceful campus environment in Ongole.</p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="section">
        <div className="container">
          <div className="about-preview-grid" style={{ marginBottom: '4rem' }}>
            <div>
              <span className="section-tag">OUR INSTITUTION</span>
              <h2 className="section-title">A Beacon of Teacher Training & Pedagogy</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1rem' }}>
                Vivekananda College of Education is located in a serene campus environment at Throvagunta (V), Ongole (Mdl), Prakasam District, AP - 523 262. Affiliated to <strong>Sri Venkateswara University, Tirupati</strong> and recognized by NCTE (File Code: <strong>APSO0285</strong>).
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                The college boasts a modern library, digital ICT lab, psychology laboratory, physical and biological science laboratories, and comprehensive infrastructure spread over 4168.23 Sq. Mts. of land.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                Managed under the aegis of <strong>Sri Ganesh Educational Trust</strong>, our primary objective is to nurture aspiring teacher trainees into dedicated, skilled, and visionary educators capable of transforming modern classrooms.
              </p>
            </div>
            <div>
              <img src="/images/hero-campus.jpg" alt="Vivekananda College of Education Campus Building" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="cards-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="feature-card" style={{ background: 'linear-gradient(135deg, #ffffff 0%, var(--bg-alt) 100%)' }}>
              <div className="card-icon-box" style={{ background: 'var(--accent-gold)' }}><i className="fa-solid fa-eye"></i></div>
              <h3 style={{ fontSize: '1.5rem' }}>Our Vision</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-dark)' }}>
                To emerge as a benchmark institution in teacher education by fostering pedagogical innovation, moral integrity, scientific temperament, and lifelong commitment to educational excellence in Andhra Pradesh.
              </p>
            </div>

            <div className="feature-card" style={{ background: 'linear-gradient(135deg, #ffffff 0%, var(--bg-alt) 100%)' }}>
              <div className="card-icon-box" style={{ background: 'var(--primary-blue)' }}><i className="fa-solid fa-bullseye"></i></div>
              <h3 style={{ fontSize: '1.5rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-dark)' }}>
                To impart high-quality theoretical and practical teacher education, equip student teachers with digital ICT tools, provide inclusive educational training, and inspire student-centered teaching methodologies.
              </p>
            </div>
          </div>

          {/* Campus Infrastructure Highlights */}
          <div style={{ marginTop: '4rem' }}>
            <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
              <span className="section-tag">CAMPUS FACILITIES</span>
              <h2 className="section-title">Infrastructure Designed for Professional Growth</h2>
            </div>

            <div className="cards-grid">
              <div className="feature-card">
                <div className="card-icon-box"><i className="fa-solid fa-book-reader"></i></div>
                <h3>Central Library & Reading Room</h3>
                <p>House thousands of text books, reference volumes, NCTE journals, competitive exam guides (TET/DSC/CTET), and quiet study tables.</p>
              </div>

              <div className="feature-card">
                <div className="card-icon-box"><i className="fa-solid fa-desktop"></i></div>
                <h3>Smart ICT Computer Lab</h3>
                <p>Equipped with internet-enabled computers, multimedia projectors, interactive whiteboards, and educational software modules.</p>
              </div>

              <div className="feature-card">
                <div className="card-icon-box"><i className="fa-solid fa-brain"></i></div>
                <h3>Psychology Laboratory</h3>
                <p>Contains psychological testing apparatus, intelligence scales, personality inventories, aptitude test kits, and memory apparatus for practical teacher training.</p>
              </div>

              <div className="feature-card">
                <div className="card-icon-box"><i className="fa-solid fa-icons"></i></div>
                <h3>Curriculum & Art Lab</h3>
                <p>Dedicated space for preparing teaching-learning materials (TLM), charts, models, puppets, and art & craft instructional aids.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
