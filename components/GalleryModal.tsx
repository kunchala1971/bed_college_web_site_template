'use client';

import React from 'react';

interface GalleryModalProps {
  imgSrc: string;
  imgAlt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({ imgSrc, imgAlt, isOpen, onClose }: GalleryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="lightbox-modal active" id="lightboxModal" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close modal">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <img
        src={imgSrc}
        alt={imgAlt || 'Gallery Image'}
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
