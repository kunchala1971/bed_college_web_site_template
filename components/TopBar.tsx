import React from 'react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-info">
          <span><i className="fa-solid fa-phone"></i> +91 94949 99080</span>
          <span><i className="fa-solid fa-envelope"></i> vivekanandaedu73@gmail.com</span>
          <span><i className="fa-solid fa-location-dot"></i> Throvagunta (V), Ongole (Mdl), Prakasam (Dist.) - 523 262</span>
        </div>
        <div className="top-bar-badges">
          <span className="badge-tag">Intake: 100 Seats</span>
        </div>
      </div>
    </div>
  );
}
