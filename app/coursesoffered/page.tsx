import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B.Ed Courses & Methodologies Offered | Vivekananda College Ongole',
  description: 'B.Ed 2-Year Professional Teacher Degree syllabus, teaching methodologies offered (Mathematics, Physical Science, Biological Science, Social Studies, English, Telugu) at Vivekananda College of Education.',
};

export default function CoursesOfferedPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>B.Ed Courses & Methodologies Offered</h1>
          <p style={{ color: '#cbd5e1' }}>Comprehensive 2-Year Bachelor of Education Professional Teacher Degree Syllabus.</p>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="section">
        <div className="container">
          <div className="about-preview-grid" style={{ marginBottom: '3.5rem' }}>
            <div>
              <span className="section-tag">2-YEAR PROFESSIONAL DEGREE</span>
              <h2 className="section-title">Bachelor of Education (B.Ed.) Program</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1.05rem' }}>
                The Bachelor of Education (B.Ed.) is a two-year professional degree program designed to prepare students for a fulfilling career in teaching at secondary and senior secondary school levels.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                The curriculum blends core pedagogical theoretical foundations (Educational Psychology, Philosophy, Sociology, Inclusive Education) with practical school internship observation and micro-teaching practice.
              </p>
              <div style={{ background: 'var(--bg-alt)', padding: '1.2rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Program Duration:</strong> 2 Academic Years (4 Semesters)<br />
                <strong>Sanctioned Intake:</strong> 100 Seats<br />
                <strong>Medium of Instruction:</strong> English & Telugu
              </div>
            </div>
            <div>
              <img src="/images/CLASS ROOM -1.jpeg" alt="B.Ed Classroom Learning" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>

          {/* Detailed Methodologies Grid */}
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
            <span className="section-tag">TEACHING METHODOLOGY SUBJECTS</span>
            <h2 className="section-title">Pedagogy Specializations Offered</h2>
            <p className="section-desc">Students select two methodology subjects (Methodology-I & Methodology-II) based on their graduate specialization.</p>
          </div>

          <div className="cards-grid">
            {/* Math */}
            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-calculator"></i></div>
              <h3>1) Methods of Teaching Mathematics</h3>
              <p>Covers objectives of teaching math, unit planning, blooms taxonomy, math laboratory tools, error analysis, and innovative problem-solving pedagogies.</p>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>Eligible: B.Sc (Maths), B.Tech</div>
            </div>

            {/* Physical Science */}
            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-atom"></i></div>
              <h3>2) Methods of Teaching Physical Sciences</h3>
              <p>Focuses on Physics and Chemistry pedagogical methods, scientific attitude development, laboratory apparatus handling, and audio-visual demonstrations.</p>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>Eligible: B.Sc (Physics, Chemistry), B.Tech</div>
            </div>

            {/* Biological Science */}
            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-dna"></i></div>
              <h3>3) Methods of Teaching Biological Sciences</h3>
              <p>Explores Botany, Zoology, and Environmental Science instruction, specimen preservation techniques, microscope work, and field trip organization.</p>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>Eligible: B.Sc (Botany, Zoology, Bio-Tech)</div>
            </div>

            {/* Social Studies */}
            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-earth-americas"></i></div>
              <h3>4) Methods of Teaching Social Studies</h3>
              <p>Includes pedagogy of History, Geography, Civics, and Economics, map reading skills, current affairs integration, and civic responsibility education.</p>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>Eligible: B.A, B.Com</div>
            </div>

            {/* English */}
            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-language"></i></div>
              <h3>5) Methods of Teaching English</h3>
              <p>Enhances LSRW (Listening, Speaking, Reading, Writing) language skills teaching, phonetics, grammar pedagogy, poetry appreciation, and communicative language teaching (CLT).</p>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>Eligible: B.A (English Lit), Graduate Proficiency</div>
            </div>

            {/* Telugu / Regional */}
            <div className="feature-card">
              <div className="card-icon-box"><i className="fa-solid fa-book-journal-whills"></i></div>
              <h3>6) Methods of Teaching Telugu</h3>
              <p>Dedicated to regional language pedagogy, Telugu literature appreciation, grammar, composition writing, and vernacular language instructional design.</p>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>Eligible: B.A (Telugu), Regional Language Students</div>
            </div>
          </div>

          {/* Practicum & Internship Summary */}
          <div style={{ background: 'var(--bg-alt)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', marginTop: '3.5rem', border: '1px solid var(--border-light)' }}>
            <h3 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
              <i className="fa-solid fa-person-chalkboard" style={{ color: 'var(--accent-gold)' }}></i> Practical Teacher Internship Program
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
              As per NCTE guidelines, B.Ed student-teachers undergo a rigorous 16-week continuous school internship program in recognized government and high-repute private schools. During this phase, trainees deliver 40 lesson plans in each methodology subject, practice classroom management, conduct action research projects, and organize co-curricular school activities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
