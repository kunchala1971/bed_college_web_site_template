import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import AnnouncementTicker from '@/components/AnnouncementTicker';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vivekananda College of Education | Premier Teacher Education Institute, Ongole',
  description: 'Vivekananda College of Education in Throvagunta (V), Ongole (Mdl), Prakasam District, AP. NCTE Approved (File Code APSO0285), Sri Venkateswara University Affiliated Bachelor of Education degree college. 100 Seats Intake.',
  keywords: 'Vivekananda College of Education, B.Ed admissions AP, College of Education Ongole, NCTE info APSO0285, BEd methodologies, Sri Ganesh Educational Trust',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <TopBar />
        <Header />
        <AnnouncementTicker />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
