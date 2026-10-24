import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Grafica from './pages/Grafica';
import Impresion3D from './pages/Impresion3D';
import PortfolioPage from './pages/PortfolioPage';
import Contacto from './pages/Contacto';
import Souvenirs from './pages/Souvenirs';
import Merchandising from './pages/Merchandising';
import Mayorista from './pages/Mayorista';
import Eventos from './pages/Eventos';
import ProductoCategoria from './pages/ProductoCategoria';
import LlaverosCorporativos from './pages/LlaverosCorporativos';
import LamparasLightbox from './pages/LamparasLightbox';
import TrofeosPersonalizados from './pages/TrofeosPersonalizados';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="grafica" element={<Grafica />} />
        <Route path="impresion-3d" element={<Impresion3D />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="mayorista" element={<Mayorista />} />
        
        {/* Landings locales de alta intención de compra en Bariloche */}
        <Route path="llaveros-corporativos-bariloche" element={<LlaverosCorporativos />} />
        <Route path="llaveros-bariloche" element={<LlaverosCorporativos />} />
        <Route path="lamparas-lightbox-bariloche" element={<LamparasLightbox />} />
        <Route path="carteles-lightbox-bariloche" element={<LamparasLightbox />} />
        <Route path="trofeos-personalizados-bariloche" element={<TrofeosPersonalizados />} />
        <Route path="trofeos-bariloche" element={<TrofeosPersonalizados />} />

        {/* Rutas principales y canónicas indexadas por Google */}
        <Route path="souvenirs" element={<Souvenirs />} />
        <Route path="merchandising" element={<Merchandising />} />
        <Route path="eventos" element={<Eventos />} />

        {/* Alias de rutas de productos de alta intención */}
        <Route path="productos/llaveros-corporativos" element={<LlaverosCorporativos />} />
        <Route path="productos/lamparas-lightbox" element={<LamparasLightbox />} />
        <Route path="productos/lightbox" element={<LamparasLightbox />} />
        <Route path="productos/trofeos-personalizados" element={<TrofeosPersonalizados />} />
        <Route path="productos/trofeos" element={<TrofeosPersonalizados />} />
        <Route path="productos/eventos" element={<Eventos />} />
        <Route path="productos/souvenirs" element={<Souvenirs />} />
        <Route path="productos/merchandising" element={<Merchandising />} />
        <Route path="productos/:categoria" element={<ProductoCategoria />} />
      </Route>
    </Routes>
  );
}

export default App;