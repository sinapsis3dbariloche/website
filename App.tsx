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
import ProductoCategoria from './pages/ProductoCategoria';

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
        
        {/* Rutas antiguas redirigidas por SEO */}
        <Route path="souvenirs" element={<Navigate to="/productos/souvenirs" replace />} />
        <Route path="merchandising" element={<Navigate to="/productos/merchandising" replace />} />

        {/* Nuevas rutas jerárquicas de productos */}
        <Route path="productos/souvenirs" element={<Souvenirs />} />
        <Route path="productos/merchandising" element={<Merchandising />} />
        <Route path="productos/:categoria" element={<ProductoCategoria />} />
      </Route>
    </Routes>
  );
}

export default App;