import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us & Inquiry | Vivekananda College of Education Ongole',
  description: 'Contact Vivekananda College of Education in Throvagunta (V), Ongole (Mdl), Prakasam District. Phone: +91 94949 99080. Email: vivekanandaedu73@gmail.com.',
};

export default function ContactUsPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Contact Us & Inquiry</h1>
          <p style={{ color: '#cbd5e1' }}>Have questions regarding B.Ed admissions or campus visits? Reach out to our team.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <h3>Get In Touch</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
                Visit our campus or contact our administration office during working hours (9:00 AM to 5:00 PM IST).
              </p>

              <div className="contact-detail-list">
                <div className="contact-detail-item">
                  <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
                  <div className="contact-text">
                    <h5>College Address</h5>
                    <p>Vivekananda College of Education<br />Throvagunta (V), Ongole (Mdl),<br />Prakasam District - 523 262, Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                  <div className="contact-text">
                    <h5>Contact Numbers</h5>
                    <p>+91 94949 99080</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
                  <div className="contact-text">
                    <h5>Official Email</h5>
                    <p>vivekanandaedu73@gmail.com</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon"><i className="fa-solid fa-train"></i></div>
                  <div className="contact-text">
                    <h5>Transportation Landmark</h5>
                    <p>Throvagunta Village, Ongole Mandal<br />Nearest Railway Station: Ongole (OGL)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="contact-form-card">
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--primary-navy)' }}>Send Us a Message</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
                Fill out the form below and our admissions counsellor will respond to your query promptly.
              </p>

              <ContactForm />
            </div>
          </div>

          {/* Google Map Card */}
          <div style={{ marginTop: '4rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border-light)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              <i className="fa-solid fa-map-location-dot" style={{ color: 'var(--accent-gold)' }}></i> Campus Location & Access
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Vivekananda College of Education is located at Throvagunta (V), Ongole (Mdl), Prakasam District, AP - 523 262.</p>
            <div style={{ background: 'var(--bg-alt)', height: '280px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: 'var(--text-muted)' }}>
              <i className="fa-solid fa-location-dot" style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}></i>
              <div style={{ fontWeight: 700, color: 'var(--primary-navy)', fontSize: '1.1rem' }}>Vivekananda College of Education</div>
              <div>Throvagunta (V), Ongole (Mdl), Prakasam (Dist.) - 523 262, Andhra Pradesh</div>
              <a href="https://maps.google.com/?q=Throvagunta+Ongole+Prakasam+Andhra+Pradesh" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem', color: 'var(--primary-blue)', borderColor: 'var(--primary-blue)' }}>
                <i className="fa-solid fa-directions"></i> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
