import React from 'react';
import Link from 'next/link';
import StatsBanner from '@/components/StatsBanner';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-subtitle">
              <i className="fa-solid fa-graduation-cap"></i> Shape the Future of Education
            </div>
            <h1 className="hero-title">Empowering Next-Generation Educators & Teachers</h1>
            <p className="hero-desc">
              Welcome to Vivekananda College of Education. Managed by Sri Ganesh Educational Trust.
              Affiliated to Sri Venkateswara University, Tirupati (NCTE Code: APSO0285). Providing world-class teacher
              education, micro-teaching practicums, modern science & ICT labs, and placement assistance.
            </p>
            <div className="hero-buttons">
              <Link href="/admissioncreteria" className="btn-primary">
                <i className="fa-solid fa-paper-plane"></i> Apply For Admission
              </Link>
              <Link href="/coursesoffered" className="btn-outline">
                <i className="fa-solid fa-book"></i> Explore Methodologies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner Component */}
      <StatsBanner />

      {/* Welcome & About Preview Section */}
      <section className="section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-image-wrapper">
              <img src="/images/hero-campus.jpg" alt="Vivekananda College of Education Campus" />
              <div className="experience-badge">
                <h4>20+</h4>
                <span>Years of Trust</span>
              </div>
            </div>
            <div>
              <span className="section-tag">WELCOME TO OUR INSTITUTION</span>
              <h2 className="section-title">Dedicated to Excellence in Teacher Training</h2>
              <p style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                Vivekananda College of Education is situated in a serene campus environment at Throvagunta (V), Ongole
                (Mdl), Prakasam District, AP - 523 262. Affiliated to Sri Venkateswara University, Tirupati.
              </p>
              <p style={{ marginBottom: '1.8rem', color: 'var(--text-muted)' }}>
                Our institution is committed to producing compassionate, skilled, and innovative teaching professionals.
                Equipped with state-of-the-art educational psychology labs, digital ICT computer labs, science laboratories,
                and an extensive library.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--secondary-emerald)' }}></i> NCTE Code Approved
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--secondary-emerald)' }}></i> University Affiliated
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--secondary-emerald)' }}></i> 75% Convener Quota
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--secondary-emerald)' }}></i> Practice Teaching Program
                </div>
              </div>

              <Link href="/aboutus" className="btn-primary" style={{ padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}>
                Read Full History & Vision <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights & Facilities */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHY CHOOSE VIVEKANANDA B.ED</span>
            <h2 className="section-title">World-Class Infrastructure & Pedagogy</h2>
            <p className="section-desc">
              We foster holistic teacher development through modern infrastructure, digital tools, and hands-on teaching practice.
            </p>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-laptop-code"></i></div>
              <h3>ICT & Computer Lab</h3>
              <p>Equipped with high-speed internet, smart boards, and digital educational resources to prepare teachers for modern digital classrooms.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-flask"></i></div>
              <h3>Science & Psychology Lab</h3>
              <p>Comprehensive physical science, biological science, and educational psychology lab equipment for hands-on experimentation.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-book-bookmark"></i></div>
              <h3>Rich Academic Library</h3>
              <p>Thousands of reference books, national educational journals, encyclopedia sets, and quiet reading lounges for student teachers.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-chalkboard-user"></i></div>
              <h3>Micro-Teaching Sessions</h3>
              <p>Supervised micro-teaching practice sessions and school internships in top partner schools across Prakasam district.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-user-graduate"></i></div>
              <h3>Experienced Faculty</h3>
              <p>Highly qualified M.Ed, Ph.D, and NET-qualified lecturers dedicated to individual student mentoring and guidance.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-handshake-angle"></i></div>
              <h3>Placement & Career Support</h3>
              <p>Guidance for AP DSC, TET, CTET, and direct campus recruitment placement assistance in reputed private and corporate institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies Summary */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SPECIALIZED METHODOLOGIES</span>
            <h2 className="section-title">B.Ed Pedagogy Subjects Offered</h2>
            <p className="section-desc">Students can select major teaching methodologies based on their undergraduate degree qualifications.</p>
          </div>

          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="course-card">
              <div className="course-header">
                <h4>Mathematics Methodology</h4>
              </div>
              <div className="course-body">
                <p>Pedagogy of teaching Mathematics, analytical reasoning, and geometric problem-solving techniques for secondary schools.</p>
                <ul className="course-features-list">
                  <li><i className="fa-solid fa-check"></i> Math Lab Instruments</li>
                  <li><i className="fa-solid fa-check"></i> Lesson Plan Framing</li>
                </ul>
              </div>
            </div>

            <div className="course-card">
              <div className="course-header">
                <h4>Physical Sciences Methodology</h4>
              </div>
              <div className="course-body">
                <p>Teaching Physics and Chemistry concepts, laboratory demonstration methods, and scientific inquiry skills.</p>
                <ul className="course-features-list">
                  <li><i className="fa-solid fa-check"></i> Practical Experiments</li>
                  <li><i className="fa-solid fa-check"></i> Audio-Visual Aids</li>
                </ul>
              </div>
            </div>

            <div className="course-card">
              <div className="course-header">
                <h4>Biological Sciences Methodology</h4>
              </div>
              <div className="course-body">
                <p>Pedagogy of Botany, Zoology, and Environmental Science with interactive specimen study and field projects.</p>
                <ul className="course-features-list">
                  <li><i className="fa-solid fa-check"></i> Bio-Lab Specimens</li>
                  <li><i className="fa-solid fa-check"></i> Environmental Studies</li>
                </ul>
              </div>
            </div>

            <div className="course-card">
              <div className="course-header">
                <h4>Social Studies Methodology</h4>
              </div>
              <div className="course-body">
                <p>Instructional strategies for History, Geography, Civics, and Economics with map-reading and civic project models.</p>
                <ul className="course-features-list">
                  <li><i className="fa-solid fa-check"></i> Map & Globe Studies</li>
                  <li><i className="fa-solid fa-check"></i> Historical Excursions</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/coursesoffered" className="btn-primary">
              View All Courses & Eligibility <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Management Message Preview */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-preview-grid">
            <div>
              <span className="section-tag">MANAGEMENT LEADERSHIP</span>
              <h2 className="section-title">Message from the Leadership</h2>
              <blockquote
                style={{
                  fontStyle: 'italic',
                  color: 'var(--text-dark)',
                  fontSize: '1.1rem',
                  borderLeft: '4px solid var(--accent-gold)',
                  paddingLeft: '1.2rem',
                  marginBottom: '1.5rem',
                }}
              >
                "Our mission is to empower student teachers with profound pedagogical knowledge, ethical values, and innovative teaching competencies to build an enlightened nation."
              </blockquote>
              <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                Under the visionary stewardship of President <strong>Divi Ramesh</strong> and Secretary & Correspondent <strong>Gutlapalli Veera Babu</strong>, Vivekananda College of Education continues to shine as a beacon of educational quality in Andhra Pradesh.
              </p>
              <Link href="/team" className="btn-outline" style={{ color: 'var(--primary-navy)', borderColor: 'var(--primary-navy)' }}>
                Meet Our Management Team <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* President Card */}
              <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderLeft: '5px solid var(--accent-gold)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(217, 119, 6, 0.2)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0, border: '1px solid rgba(217, 119, 6, 0.4)' }}>
                    <i className="fa-solid fa-user-tie"></i>
                  </div>
                  <div>
                    <h3 style={{ color: '#ffffff', margin: '0 0 0.25rem 0', fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.3px' }}>Divi Ramesh</h3>
                    <span style={{ display: 'inline-block', background: 'rgba(217, 119, 6, 0.2)', color: 'var(--accent-gold-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>President</span>
                  </div>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: '1rem 0 0 0', lineHeight: 1.5 }}>
                  Sri Ganesh Educational Trust • Vivekananda College of Education
                </p>
              </div>

              {/* Secretary & Correspondent Card */}
              <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderLeft: '5px solid var(--accent-gold)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(217, 119, 6, 0.2)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0, border: '1px solid rgba(217, 119, 6, 0.4)' }}>
                    <i className="fa-solid fa-user-tie"></i>
                  </div>
                  <div>
                    <h3 style={{ color: '#ffffff', margin: '0 0 0.25rem 0', fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.3px' }}>Gutlapalli Veera Babu</h3>
                    <span style={{ display: 'inline-block', background: 'rgba(217, 119, 6, 0.2)', color: 'var(--accent-gold-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Secretary & Correspondent</span>
                  </div>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: '1rem 0 0 0', lineHeight: 1.5 }}>
                  Sri Ganesh Educational Trust • Vivekananda College of Education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
