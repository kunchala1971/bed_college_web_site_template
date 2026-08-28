import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faculty & Staff Directory | Vivekananda College Ongole',
  description: 'NCTE & University approved teaching faculty members, Principal Dr. B. Krishnaiah, lecturers, and administrative support staff at Vivekananda College of Education.',
};

export default function StaffListPage() {
  const teachingStaff = [
    { sno: 1, name: 'Dr. B. Krishnaiah', desig: 'Principal', qual: 'M.A (Philosophy), Ph.D, B.Ed, M.Ed', subj: 'Education & Perspectives in Education', exp: '15 Years', status: 'Full Time Regular' },
    { sno: 2, name: 'Srinivas Pulle', desig: 'Lecturer in Psychology', qual: 'M.Sc (Psychology), T.S. SET (2019), B.Ed, M.Ed', subj: 'Educational Psychology', exp: '5 Years', status: 'Full Time Regular' },
    { sno: 3, name: 'Dr. G. Lakshmi Prasad', desig: 'Lecturer in Philosophy', qual: 'M.A (Philosophy), Ph.D, B.Ed, M.Ed', subj: 'Perspectives in Education', exp: '11 Years', status: 'Full Time Regular' },
    { sno: 4, name: 'Saidulu Morapaka', desig: 'Lecturer in Philosophy', qual: 'M.A (Philosophy), A.P. SET (2021), B.Ed, M.Ed', subj: 'Perspectives in Education', exp: '14 Years', status: 'Full Time Regular' },
    { sno: 5, name: 'V. Gangadhar', desig: 'Lecturer in Sociology', qual: 'M.A (Sociology), T.S. SET (2023), B.Ed, M.Ed', subj: 'Sociology of Education', exp: '5 Years', status: 'Full Time Regular' },
    { sno: 6, name: 'B. Venkateswarlu', desig: 'Lecturer in English', qual: 'M.A (English), T.S. SET (2019), B.Ed, M.Ed', subj: 'Pedagogy of English', exp: '5 Years', status: 'Full Time Regular' },
    { sno: 7, name: 'Dr. Are Srinivasa Reddy', desig: 'Lecturer in Mathematics', qual: 'M.Sc (Maths), Ph.D, B.Ed, M.Ed', subj: 'Pedagogy of Mathematics', exp: '13 Years', status: 'Full Time Regular' },
    { sno: 8, name: 'Balu Nirmala', desig: 'Lecturer in Telugu', qual: 'M.A (Telugu), NET, B.Ed, M.Ed', subj: 'Pedagogy of Telugu', exp: '9 Years', status: 'Full Time Regular' },
    { sno: 9, name: 'T. Shiva Kumar', desig: 'Lecturer in Telugu', qual: 'M.A (Telugu), T.S. SET (2022), B.Ed, M.Ed', subj: 'Pedagogy of Telugu', exp: '6 Years', status: 'Full Time Regular' },
    { sno: 10, name: 'Veera Swamy Kandikonda', desig: 'Lecturer in Social Studies', qual: 'M.A (Political Sci), A.P. SET (2012), B.Ed, M.Ed', subj: 'Pedagogy of Social Studies', exp: '15 Years', status: 'Full Time Regular' },
    { sno: 11, name: 'G. Sankar', desig: 'Lecturer in Social Studies', qual: 'M.A (Political Sci), A.P. SET (2023), B.Ed, M.Ed', subj: 'Pedagogy of Social Studies', exp: '13 Years', status: 'Full Time Regular' },
    { sno: 12, name: 'Mahender Kappala', desig: 'Lecturer in Biological Science', qual: 'M.Sc (Zoology), T.S. SET (2019), B.Ed, M.Ed', subj: 'Pedagogy of Biological Science', exp: '14 Years', status: 'Full Time Regular' },
    { sno: 13, name: 'Bhonagiri Naga Raju', desig: 'Lecturer in Physical Science', qual: 'M.Sc (Physics), NET, B.Ed, M.Ed', subj: 'Pedagogy of Physical Science', exp: '4 Years', status: 'Full Time Regular' },
    { sno: 14, name: 'K. Sandhya Rani', desig: 'Lecturer in Performing Arts', qual: 'M.P.A (Master of Performing Arts)', subj: 'Art & Performing Education', exp: '10 Years', status: 'Full Time Regular' },
    { sno: 15, name: 'Thunga Vamsikrishna', desig: 'Lecturer in Fine Arts', qual: 'M.F.A (Master of Fine Arts)', subj: 'Fine Arts Education', exp: '15 Years', status: 'Full Time Regular' },
    { sno: 16, name: 'C. Govardhan', desig: 'Physical Director', qual: 'M.P.E.D (Master of Physical Education)', subj: 'Health & Physical Education', exp: '10 Years', status: 'Full Time Regular' },
  ];

  const nonTeachingStaff = [
    { sno: 1, name: 'K. Ramanjaneyulu', desig: 'Librarian', qual: 'M.L.I.Sc' },
    { sno: 2, name: 'T. Subrahmanyam', desig: 'Senior Assistant / Accountant', qual: 'B.Com' },
    { sno: 3, name: 'P. Srinivas', desig: 'ICT / Computer Lab Assistant', qual: 'B.Sc (Comp. Sci)' },
    { sno: 4, name: 'M. Venkateswarlu', desig: 'Office Attender / Caretaker', qual: '10th Pass' },
  ];

  return (
    <>
      {/* Page Banner */}
      <section className="section" style={{ background: 'var(--primary-gradient)', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container">
          <h1 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Faculty & Staff Directory</h1>
          <p style={{ color: '#cbd5e1' }}>NCTE approved teaching faculty and administrative support team.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }}>
            <span className="section-tag">TEACHING FACULTY</span>
            <h2 className="section-title">Academic Faculty Profiles</h2>
            <p className="section-desc">
              Our faculty members hold Post-Graduate (M.Ed / M.A / M.Sc), Ph.D., and NET/SET qualifications with extensive experience in teacher education.
            </p>
            <div style={{ marginTop: '1.2rem' }}>
              <a href="/docs/013_STAFF LIST.PDF" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="fa-solid fa-file-pdf"></i> Download Official Approved Staff List (PDF)
              </a>
            </div>
          </div>

          {/* Teaching Staff Table */}
          <div className="custom-table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name of the Faculty Member</th>
                  <th>Designation</th>
                  <th>General & Professional Qualifications</th>
                  <th>Subject / Methodology</th>
                  <th>Experience</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {teachingStaff.map((staff) => (
                  <tr key={staff.sno}>
                    <td>{staff.sno}</td>
                    <td><strong>{staff.name}</strong></td>
                    <td>{staff.desig}</td>
                    <td>{staff.qual}</td>
                    <td>{staff.subj}</td>
                    <td>{staff.exp}</td>
                    <td>
                      <span className="badge-tag" style={{ background: 'rgba(5, 150, 105, 0.15)', color: '#059669', borderColor: 'rgba(5, 150, 105, 0.3)' }}>
                        {staff.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Non-Teaching Staff Table */}
          <h3 style={{ margin: '3rem 0 1.5rem 0', color: 'var(--primary-navy)' }}>Administrative & Support Staff</h3>
          <div className="custom-table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Qualification</th>
                </tr>
              </thead>
              <tbody>
                {nonTeachingStaff.map((staff) => (
                  <tr key={staff.sno}>
                    <td>{staff.sno}</td>
                    <td><strong>{staff.name}</strong></td>
                    <td>{staff.desig}</td>
                    <td>{staff.qual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
