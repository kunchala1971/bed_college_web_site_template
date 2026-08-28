import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>VIVEKANANDA COLLEGE OF EDUCATION</h3>
            <p>
              Managed by Sri Ganesh Educational Trust. Dedicated to empowering future educators through holistic teacher education, modern pedagogy, and value-based training.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent-gold-light)' }}>
              <i className="fa-solid fa-building-columns"></i> Approved by NCTE, New Delhi (Code: APSO0285) | Affiliated to Sri Venkateswara University, Tirupati
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/"><i className="fa-solid fa-angle-right"></i> Home</Link></li>
              <li><Link href="/aboutus"><i className="fa-solid fa-angle-right"></i> About Us</Link></li>
              <li><Link href="/stafflist"><i className="fa-solid fa-angle-right"></i> Faculty & Staff</Link></li>
              <li><Link href="/results"><i className="fa-solid fa-angle-right"></i> Results & Ranks</Link></li>
              <li><Link href="/gallery"><i className="fa-solid fa-angle-right"></i> Photo Gallery</Link></li>
              <li><Link href="/team"><i className="fa-solid fa-angle-right"></i> Management Team</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>B.Ed Program</h4>
            <ul className="footer-links">
              <li><Link href="/ncteinfo"><i className="fa-solid fa-angle-right"></i> NCTE Recognition</Link></li>
              <li><Link href="/admissioncreteria"><i className="fa-solid fa-angle-right"></i> Admission Criteria</Link></li>
              <li><Link href="/coursesoffered"><i className="fa-solid fa-angle-right"></i> Courses & Methodology</Link></li>
              <li><Link href="/affidavits"><i className="fa-solid fa-angle-right"></i> University Affiliation</Link></li>
              <li><Link href="/formalrecognization"><i className="fa-solid fa-angle-right"></i> Govt Recognitions</Link></li>
              <li><Link href="/auditreport"><i className="fa-solid fa-angle-right"></i> Audit Reports</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-links" style={{ lineHeight: 1.8 }}>
              <li style={{ color: '#cbd5e1' }}><i className="fa-solid fa-location-dot" style={{ color: 'var(--accent-gold)' }}></i> Vivekananda College of Education, Throvagunta (V), Ongole (Mdl), Prakasam (Dist.) - 523 262</li>
              <li style={{ color: '#cbd5e1' }}><i className="fa-solid fa-train" style={{ color: 'var(--accent-gold)' }}></i> Nearest Railway: Ongole (OGL)</li>
              <li style={{ color: '#cbd5e1' }}><i className="fa-solid fa-phone" style={{ color: 'var(--accent-gold)' }}></i> +91 94949 99080</li>
              <li style={{ color: '#cbd5e1' }}><i className="fa-solid fa-envelope" style={{ color: 'var(--accent-gold)' }}></i> vivekanandaedu73@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Vivekananda College of Education, Ongole. All Rights Reserved. | Managed by Sri Ganesh Educational Trust | Developed by <strong>SrinivasaRao.K (Telugu IT Tutorials)</strong></p>
        </div>
      </div>
    </footer>
  );
}
