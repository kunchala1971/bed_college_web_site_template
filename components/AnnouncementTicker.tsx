import React from 'react';

export default function AnnouncementTicker() {
  return (
    <div className="announcement-ticker">
      <div className="container">
        <div className="ticker-wrap">
          <span className="ticker-title"><i className="fa-solid fa-bullhorn"></i> Latest News</span>
          <div className="ticker-content">
            <span className="ticker-item"><i className="fa-solid fa-star"></i> AP EDCET 2026 B.Ed Admissions Open - 75% Convener Quota & 25% Management Quota Seats Available.</span>
            <span className="ticker-item"><i className="fa-solid fa-circle-check"></i> NCTE Southern Regional Committee Recognition Order Code Verified.</span>
            <span className="ticker-item"><i className="fa-solid fa-trophy"></i> Outstanding 100% University Exam Pass Percentage achieved in Academic Year.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
