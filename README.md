# Vivekananda College of Education — Official Website (Next.js)

Official web application for **Vivekananda College of Education**, a premier NCTE-approved Bachelor of Education (B.Ed) institution situated at **Throvagunta (V), Ongole (Mdl), Prakasam District, Andhra Pradesh - 523 262**.

Managed by **Sri Ganesh Educational Trust** (Registered 15-11-2021) and affiliated to **Sri Venkateswara University, Tirupati**.

---

## 📌 Key Institutional Information

| Field | Official Value |
| :--- | :--- |
| **Institution Name** | Vivekananda College of Education |
| **NCTE File Code** | **APSO0285** |
| **Management Trust** | **Sri Ganesh Educational Trust** |
| **Campus Address** | Throvagunta (V), Ongole (Mdl), Prakasam (Dist.) - 523 262, Andhra Pradesh |
| **Contact Phone** | **+91 94949 99080** |
| **Contact Email** | **vivekanandaedu73@gmail.com** |
| **Course Offered** | Bachelor of Education (B.Ed) |
| **Annual Seat Intake** | **100 Seats** (75% Convener Quota via AP EDCET, 25% Management Quota) |
| **Campus Land Area** | 4168.23 Sq. Mts. (1.03 Acres) \| Survey Nos: 178/1A1, 178/1A6 |

---

## 🌐 Routes Directory

The website is built with **Next.js (App Router)** and includes 13 routes:

1. **`/`** — Main homepage featuring hero banner, latest news ticker, feature cards, methodology overview, management leadership cards, and quick contact details.
2. **`/aboutus`** — Vision, mission, institutional history, trust management, and campus infrastructure highlights.
3. **`/ncteinfo`** — Mandatory NCTE Disclosure Matrix, shifting application details, and official PDF download cards.
4. **`/affidavits`** — Land ownership deed affidavits, encumbrance certificates (EC), land use, building completion, structural stability, and Fire NOC download table.
5. **`/formalrecognization`** — Government orders, NCTE Southern Regional Committee recognition orders (2026 & 2003), and shifting permission applications.
6. **`/stafflist`** — Official 16-member approved teaching faculty profile grid (Principal Dr. B. Krishnaiah & Lecturers) and direct PDF download.
7. **`/team`** — Governing body leadership profile cards for President Divi Ramesh, Secretary & Correspondent Gutlapalli Veera Babu, and Treasurer Pentrala Subba Rao.
8. **`/gallery`** — Interactive photo gallery showcasing campus photos with full-screen lightbox modal.
9. **`/coursesoffered`** — B.Ed course structure, methodology subjects (Mathematics, Physical Science, Biological Science, Social Studies, English, Telugu), and syllabus details.
10. **`/admissioncreteria`** — Admission eligibility rules, AP EDCET web counselling selection steps, and seat matrix.
11. **`/auditreport`** — Financial audit statements, CA balance sheets, and statutory Fixed Deposit Receipt (FDR) PDF download.
12. **`/results`** — Official university examination results notice and academic contact guidance.
13. **`/contactus`** — Interactive inquiry form, phone, email, full postal address, transport landmark guides, and Google Maps location.

---

## 📁 Repository Structure

```
bed_college_web_site_template/
├── app/                         # Next.js App Router Pages & Layouts
│   ├── globals.css              # Custom CSS Design System
│   ├── layout.tsx               # Root Layout (TopBar, Header, Ticker, Footer)
│   ├── page.tsx                 # Home Page
│   ├── aboutus/page.tsx
│   ├── admissioncreteria/page.tsx
│   ├── affidavits/page.tsx
│   ├── auditreport/page.tsx
│   ├── contactus/page.tsx
│   ├── coursesoffered/page.tsx
│   ├── formalrecognization/page.tsx
│   ├── gallery/page.tsx
│   ├── ncteinfo/page.tsx
│   ├── results/page.tsx
│   ├── stafflist/page.tsx
│   └── team/page.tsx
├── components/                  # Reusable UI Components
│   ├── AnnouncementTicker.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── GalleryModal.tsx
│   ├── Header.tsx
│   ├── StatsBanner.tsx
│   └── TopBar.tsx
├── public/                      # Static Assets
│   ├── docs/                    # Official Statutory PDF Documents
│   └── images/                  # Campus Photos & Logos
├── next.config.js               # Next.js Configuration (output: 'export')
├── package.json                 # Project Dependencies & Scripts
└── tsconfig.json                # TypeScript Configuration
```

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript / React 18
- **Styling**: Custom CSS (Vanilla CSS Design System - No Bootstrap, No Tailwind)
- **Icons**: FontAwesome 6
- **Build Output**: Static Export Enabled (`output: 'export'`)

---

## 🚀 Development & Build Scripts

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Build production static export (generates out/ directory)
npm run build
```

---

## 📦 Hosting & Deployment

- **Standard cPanel / Shared Hosting / Web Root**: Upload the contents of the generated **`out/`** folder directly to your web server (`public_html/`).
- **Vercel / Render / Cloud Hosting**: Connect this repository; the build system will automatically execute `npm run build`.

---

## 📄 License & Ownership

© 2026 **Vivekananda College of Education, Ongole**. All Rights Reserved.  
**Developed by**: **SrinivasaRao.K (Telugu IT Tutorials)**
