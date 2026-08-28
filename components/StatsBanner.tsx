'use client';

import React, { useEffect, useState, useRef } from 'react';

interface StatItem {
  target: number;
  label: string;
  suffix?: string;
  icon: string;
}

const statsData: StatItem[] = [
  { target: 100, label: 'Annual Seat Intake', suffix: '+', icon: 'fa-user-gradient fa-user-graduate' },
  { target: 100, label: 'Pass Percentage', suffix: '%', icon: 'fa-chart-line' },
  { target: 4168, label: 'Built-up Area (Sq. Mts)', suffix: '', icon: 'fa-building-columns' },
  { target: 15, label: 'Years of Legacy', suffix: '+', icon: 'fa-award' },
];

export default function StatsBanner() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current && !hasAnimated) {
        const rect = bannerRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setHasAnimated(true);
          statsData.forEach((stat, index) => {
            let start = 0;
            const duration = 1200; // ms
            const stepTime = 30;
            const steps = duration / stepTime;
            const increment = stat.target / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= stat.target) {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = stat.target;
                  return updated;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = Math.ceil(start);
                  return updated;
                });
              }
            }, stepTime);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <section className="stats-banner" ref={bannerRef}>
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-number">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
