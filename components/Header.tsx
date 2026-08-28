'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const bedRoutes = [
    '/ncteinfo',
    '/admissioncreteria',
    '/coursesoffered',
    '/affidavits',
    '/formalrecognization',
    '/auditreport',
  ];

  const isBedActive = bedRoutes.includes(pathname);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="brand-logo">
            <img src="/images/logo.jpg" alt="Vivekananda College of Education Logo" />
            <div className="brand-text">
              <h2>VIVEKANANDA</h2>
              <span>COLLEGE OF EDUCATION • ONGOLE</span>
            </div>
          </Link>

          <button
            className="mobile-toggle"
            aria-label="Toggle navigation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>

            <li className={`nav-item dropdown ${isBedActive || isDropdownOpen ? 'active' : ''}`}>
              <a
                href="#"
                className={`nav-link ${isBedActive ? 'active' : ''}`}
                onClick={(e) => {
                  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  }
                }}
              >
                B.Ed <i className="fa-solid fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    href="/ncteinfo"
                    className={`dropdown-link ${pathname === '/ncteinfo' ? 'active' : ''}`}
                  >
                    <i className="fa-solid fa-certificate"></i> NCTE Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admissioncreteria"
                    className={`dropdown-link ${pathname === '/admissioncreteria' ? 'active' : ''}`}
                  >
                    <i className="fa-solid fa-user-check"></i> Admission Criteria
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coursesoffered"
                    className={`dropdown-link ${pathname === '/coursesoffered' ? 'active' : ''}`}
                  >
                    <i className="fa-solid fa-book-open"></i> Courses Offered
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affidavits"
                    className={`dropdown-link ${pathname === '/affidavits' ? 'active' : ''}`}
                  >
                    <i className="fa-solid fa-file-contract"></i> B.Ed Affiliation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/formalrecognization"
                    className={`dropdown-link ${pathname === '/formalrecognization' ? 'active' : ''}`}
                  >
                    <i className="fa-solid fa-stamp"></i> Formal Recognitions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auditreport"
                    className={`dropdown-link ${pathname === '/auditreport' ? 'active' : ''}`}
                  >
                    <i className="fa-solid fa-chart-line"></i> Audit Report
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/aboutus" className={`nav-link ${pathname === '/aboutus' ? 'active' : ''}`}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/stafflist" className={`nav-link ${pathname === '/stafflist' ? 'active' : ''}`}>
                Staff List
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/results" className={`nav-link ${pathname === '/results' ? 'active' : ''}`}>
                Results
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/gallery" className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/team" className={`nav-link ${pathname === '/team' ? 'active' : ''}`}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contactus" className={`nav-link ${pathname === '/contactus' ? 'active' : ''}`}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="btn-header-cta">
                Admissions 2026
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
