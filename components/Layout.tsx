import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Sinapsis 3D Bariloche",
  "url": "https://www.sinapsis3dbariloche.com.ar",
  "telephone": "+542944914816",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "José Hernández 228, Altos del Cóndor",
    "addressLocality": "San Carlos de Bariloche",
    "addressRegion": "Río Negro",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-41.1335",
    "longitude": "-71.3103"
  },
  "areaServed": ["San Carlos de Bariloche", "Dina Huapi", "Patagonia", "Argentina"],
  "description": "Taller de diseño e impresión 3D, gráfica personalizada, vinilos, stickers troquelados, merchandising corporativo y cartelería luminosa en Bariloche."
};

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-orange-500 selection:text-white flex flex-col">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
