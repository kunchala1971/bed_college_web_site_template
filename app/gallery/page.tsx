'use client';

import React, { useState } from 'react';
import GalleryModal from '@/components/GalleryModal';

interface GalleryItemData {
  src: string;
  title: string;
  desc: string;
}

const galleryItems: GalleryItemData[] = [
  { src: '/images/hero-campus.jpg', title: 'Main Campus Building', desc: 'Spacious, serene campus building at Throvagunta, Ongole' },
  { src: '/images/BLOCK B.jpeg', title: 'Academic Block B', desc: 'Modern academic & lecture hall building block' },
  { src: '/images/CLASS ROOM -1.jpeg', title: 'Classroom - 1', desc: 'Spacious lecture hall for teacher training sessions' },
  { src: '/images/CLASS ROOM - 2.jpeg', title: 'Classroom - 2', desc: 'Interactive pedagogy classroom with ergonomic seating' },
  { src: '/images/CLASS ROOM -3.jpeg', title: 'Classroom - 3', desc: 'Well-ventilated lecture room equipped for methodologies' },
  { src: '/images/CLASS ROOM - 4.jpeg', title: 'Classroom - 4', desc: 'Interactive lecture environment for student teachers' },
  { src: '/images/COMPUTER LAB & ICT RESEARCH CENTER.jpeg', title: 'Computer & ICT Research Center', desc: 'High-speed networked computer lab for digital pedagogy' },
  { src: '/images/SCIENCE LAB - 1.jpeg', title: 'Science Laboratory - 1', desc: 'Physical & Chemical science practical experiment lab' },
  { src: '/images/SCIENCE LAB 2 (2).jpeg', title: 'Science Laboratory - 2', desc: 'Biological science specimen & practical experiment lab' },
  { src: '/images/PSYCHOLOGY LAB.jpeg', title: 'Educational Psychology Lab', desc: 'Psychology testing & assessment apparatus facility' },
  { src: '/images/ARTS & CRAFTS LAB.jpeg', title: 'Arts & Crafts Resource Center', desc: 'TLM preparation & creative art activity lab' },
  { src: '/images/SPORTS LAB.jpeg', title: 'Sports & Physical Education Lab', desc: 'Athletic equipment & sports inventory facility' },
  { src: '/images/LIBRARY.jpeg', title: 'Educational Library', desc: 'Extensive reference book repository & reading lounge' },
  { src: '/images/MULTIPURPSE HALL.jpeg', title: 'Multipurpose Seminar Hall', desc: 'Auditorium hall for college events & cultural programs' },
  { src: '/images/SATFF ROOM.jpeg', title: 'Faculty & Staff Lounge', desc: 'Comfortable lounge for academic staff & meetings' },
  { src: '/images/MALE WAITING HALL.jpeg', title: 'Student Waiting Hall', desc: 'Spacious student lounge & waiting hall facility' },
];

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Campus & Event Gallery</h1>
          <p style={{ color: '#cbd5e1' }}>A visual glimpse into our classrooms, laboratories, campus, and student activities.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div
                className="gallery-item"
                key={index}
                onClick={() => setSelectedImg({ src: item.src, alt: item.title })}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.src} alt={item.title} />
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryModal
        isOpen={!!selectedImg}
        imgSrc={selectedImg?.src || ''}
        imgAlt={selectedImg?.alt || ''}
        onClose={() => setSelectedImg(null)}
      />
    </>
  );
}
