'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      alert('Thank you! Your message has been sent successfully. The Vivekananda College of Education admissions team will contact you shortly.');
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name *</label>
          <input type="text" id="name" name="name" className="form-control" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input type="tel" id="phone" name="phone" className="form-control" placeholder="Enter 10-digit phone number" required />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input type="email" id="email" name="email" className="form-control" placeholder="name@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="form-label">Inquiry Type *</label>
          <select id="subject" name="subject" className="form-control" required defaultValue="">
            <option value="" disabled>Select Inquiry Type</option>
            <option value="B.Ed Admissions 2026">B.Ed Admissions 2026</option>
            <option value="Management Quota Seat">Management Quota Seats</option>
            <option value="NCTE & Affiliation Info">NCTE & Affiliation Info</option>
            <option value="Fee Structure & Scholarship">Fee Structure & Scholarship</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message / Details *</label>
        <textarea id="message" name="message" className="form-control" rows={4} placeholder="Type your message or inquiry questions here..." required></textarea>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <i className="fa-solid fa-spinner fa-spin"></i> Sending Message...
          </>
        ) : (
          <>
            <i className="fa-solid fa-paper-plane"></i> Submit Inquiry Message
          </>
        )}
      </button>

      {submitted && (
        <p style={{ marginTop: '1rem', color: 'var(--secondary-emerald)', fontWeight: 600, textAlign: 'center' }}>
          ✓ Message sent successfully! We will get back to you soon.
        </p>
      )}
    </form>
  );
}
